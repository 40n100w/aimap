import test from 'node:test';
import assert from 'node:assert/strict';
import { attachEntityFacts } from '../src/entity-facts.js';
import { summarizeEntityLocations } from '../src/entity-location-summary.js';

test('evidence is attached only to its entity and does not overwrite catalog values', () => {
  const entities = [{ id: 'company', name: 'Company', website: '', products: ['Legacy category'] }, { id: 'other', name: 'Other' }];
  const ledger = { schemaVersion: 1, sources: [{ id: 'doc', url: 'https://example.com/docs' }], facts: [{ entityId: 'company', field: 'website', value: 'https://example.com', sourceIds: ['doc'] }], products: [{ entityId: 'company', name: 'SDK', sourceIds: ['doc'] }], locationSummaries: [] };
  const result = attachEntityFacts(entities, ledger);
  assert.equal(result[0].website, '');
  assert.deepEqual(result[0].products, ['Legacy category']);
  assert.equal(result[0].fieldFacts[0].sources[0].url, 'https://example.com/docs');
  assert.equal(result[0].productFacts[0].name, 'SDK');
  assert.deepEqual(result[1].fieldFacts, []);
  assert.deepEqual(result[1].productFacts, []);
  assert.equal(entities[0].fieldFacts, undefined);
});

test('location evidence keeps explicit shared associations, dates and regional labels', () => {
  const entities = [{ id: 'company' }, { id: 'business-unit' }, { id: 'unrelated' }];
  const locations = [
    { id: 'regional', companyId: 'company', entityIds: ['company', 'business-unit'], locationName: 'Regional headquarters', locationType: 'headquarters', address: 'Recorded address', country: 'Taiwan', verifiedOn: '2026-08-24', status: 'needs_review' },
    { id: 'office', companyId: 'old-alias', locationName: 'Office', locationType: 'office', country: 'Japan', status: 'map_ready' },
    { id: 'unknown', companyId: 'not-a-catalog-id', locationType: 'headquarters', country: 'United States' }
  ];
  const result = summarizeEntityLocations(entities, locations, { 'old-alias': 'company' });
  assert.equal(result.length, 2);
  const company = result.find(row => row.entityId === 'company');
  assert.equal(company.recordCount, 2);
  assert.equal(company.headquarters.length, 1);
  assert.equal(company.headquarters[0].locationName, 'Regional headquarters');
  assert.equal(company.headquarters[0].verifiedOn, '2026-08-24');
  assert.equal(company.headquarters[0].status, 'needs_review');
  assert.equal(company.needsReviewCount, 1);
  assert.equal(company.mapReadyCount, 1);
  assert.deepEqual(company.countries, ['Japan', 'Taiwan']);
  assert.equal(result.find(row => row.entityId === 'business-unit').recordCount, 1);
  assert.equal(entities[0].headquarters, undefined);
});
