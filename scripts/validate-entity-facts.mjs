import { readFileSync } from 'node:fs';
import { entities, officeLocations, aliases } from './load-csv-data.mjs';
import { attachEntityFacts } from '../src/entity-facts.js';
import { summarizeEntityLocations } from '../src/entity-location-summary.js';

const ledger = JSON.parse(readFileSync(new URL('../data/entity-facts.json', import.meta.url), 'utf8'));
const errors = [];
const byId = new Map(entities.map(entity => [entity.id, entity]));
const sourceById = new Map(), recordIds = new Set();
const date = value => /^\d{4}-\d{2}-\d{2}$/.test(value || '') && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
const safeUrl = value => { try { return new URL(value).protocol === 'https:'; } catch { return false; } };
const fieldNames = new Set(['name', 'type', 'description', 'website', 'country', 'geography', 'founded', 'leadership', 'headquarters', 'provides', 'howUsed', 'products', 'ecosystemRole', 'whyItMatters']);
if (ledger.schemaVersion !== 1) errors.push('Unsupported schema version');
if (!date(ledger.reviewedOn)) errors.push('Invalid ledger review date');
for (const source of ledger.sources) {
  if (!source.id || sourceById.has(source.id)) errors.push(`Duplicate/missing source ID: ${source.id}`);
  sourceById.set(source.id, source);
  if (!safeUrl(source.url)) errors.push(`Unsafe source URL: ${source.id}`);
  if (!source.title?.trim() || !source.excerpt?.trim()) errors.push(`Missing source title/excerpt: ${source.id}`);
  if (!date(source.retrievedOn)) errors.push(`Invalid source retrieval date: ${source.id}`);
  if (!['retrieved_primary', 'existing_record'].includes(source.evidenceOrigin)) errors.push(`Invalid evidence origin: ${source.id}`);
  if (source.evidenceOrigin === 'retrieved_primary' && !/^[0-9a-f]{64}$/.test(source.sha256 || '')) errors.push(`Missing source content hash: ${source.id}`);
  if (source.revision && !/^[0-9a-f]{40}$/.test(source.revision)) errors.push(`Invalid source revision: ${source.id}`);
}
const checkRecord = record => {
  if (!record.id || recordIds.has(record.id)) errors.push(`Duplicate/missing fact ID: ${record.id}`);
  recordIds.add(record.id);
  if (!byId.has(record.entityId)) errors.push(`Unknown entity: ${record.entityId}`);
  if (!date(record.reviewedOn) || record.reviewedOn > ledger.reviewedOn) errors.push(`Invalid fact review date: ${record.id}`);
  if (!record.scope?.trim()) errors.push(`Missing claim scope: ${record.id}`);
  if (!Array.isArray(record.sourceIds) || !record.sourceIds.length) errors.push(`Missing fact sources: ${record.id}`);
  for (const id of record.sourceIds || []) if (!sourceById.has(id)) errors.push(`Unknown source ${id}: ${record.id}`);
};
for (const fact of ledger.facts) {
  checkRecord(fact);
  if (!fieldNames.has(fact.field)) errors.push(`Unsupported fact field: ${fact.id}`);
  if (JSON.stringify(byId.get(fact.entityId)?.[fact.field]) !== JSON.stringify(fact.value)) errors.push(`Fact does not match current field: ${fact.id}`);
}
for (const product of ledger.products) {
  checkRecord(product);
  if (!product.name?.trim() || !product.role?.trim()) errors.push(`Missing product name/role: ${product.id}`);
  if (product.evidenceSourceId && !product.sourceIds.includes(product.evidenceSourceId)) errors.push(`Item quotation references an unrelated source: ${product.id}`);
  if (product.evidenceLine != null && (!Number.isInteger(product.evidenceLine) || product.evidenceLine < 1 || !product.evidenceExcerpt?.trim())) errors.push(`Invalid item quotation line: ${product.id}`);
  for (const field of ['releaseDate', 'evidenceAsOf']) if (product[field] && !date(product[field])) errors.push(`Invalid product ${field}: ${product.id}`);
  if (product.documentedAttributes && (typeof product.documentedAttributes !== 'object' || Array.isArray(product.documentedAttributes))) errors.push(`Invalid documented attributes: ${product.id}`);
}
const locationIds = new Set(officeLocations.map(location => location.id));
const summarizedIds = new Set();
for (const summary of ledger.locationSummaries) {
  if (!byId.has(summary.entityId) || summarizedIds.has(summary.entityId)) errors.push(`Invalid/duplicate location entity: ${summary.entityId}`);
  summarizedIds.add(summary.entityId);
  if (!Number.isInteger(summary.recordCount) || summary.recordCount < summary.headquarters.length) errors.push(`Invalid location count: ${summary.entityId}`);
  for (const location of summary.headquarters) {
    if (!locationIds.has(location.id)) errors.push(`Unknown historical location: ${location.id}`);
    if (location.locationType !== 'headquarters') errors.push(`Non-HQ location in headquarters list: ${location.id}`);
    if (location.verifiedOn && !date(location.verifiedOn)) errors.push(`Invalid historical location date: ${location.id}`);
  }
}
if (JSON.stringify(ledger.locationSummaries) !== JSON.stringify(summarizeEntityLocations(entities, officeLocations, aliases))) errors.push('Historical location summaries differ from their source records; rebuild them before publishing.');
const identityIds = new Set();
for (const note of ledger.identityNotes || []) {
  if (!byId.has(note.entityId) || identityIds.has(note.entityId) || !note.appliesToType?.trim() || !note.note?.trim()) errors.push(`Invalid identity note: ${note.entityId}`);
  identityIds.add(note.entityId);
}
const hydrated = attachEntityFacts(entities, ledger);
if (hydrated.length !== entities.length || hydrated.some((entity, index) => entity.id !== entities[index].id)) errors.push('Evidence attachment changed catalog identities/order');
console.log(JSON.stringify({ entities: entities.length, sources: ledger.sources.length, fieldFacts: ledger.facts.length, productFacts: ledger.products.length, entitiesWithEvidence: new Set([...ledger.facts, ...ledger.products].map(record => record.entityId)).size, entitiesWithLocationRecords: ledger.locationSummaries.length, errors }, null, 2));
if (errors.length) process.exit(1);
