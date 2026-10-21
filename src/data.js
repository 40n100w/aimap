import { jsonArray, loadCsv, loadJson, numberOrNull } from './csv.js';
import { attachEntityFacts } from './entity-facts.js';

export let DATA_UPDATED = '';
export let CATALOG_REVIEWED = '';
export let LAYERS = [];
export let entities = [];
export let relationships = [];
export let aliases = {};
export let journeys = [];
export let representativePaths = {};
export let relationTypes = [];

export async function loadCoreData() {
  const [coreRows, entityEvidence] = await Promise.all([Promise.all([
    'settings.csv', 'layers.csv', 'entities.csv', 'relationships.csv',
    'aliases.csv', 'journeys.csv', 'representative-paths.csv', 'catalog-reviews.csv'
  ].map(loadCsv)), loadJson('entity-facts.json')]);
  const [settingsRows, layerRows, entityRows, relationshipRows, aliasRows, journeyRows, pathRows, reviewRows] = coreRows;
  const settings = Object.fromEntries(settingsRows.map(row => [row.key, row.value]));
  DATA_UPDATED = settings.data_updated;
  CATALOG_REVIEWED = settings.catalog_reviewed || '';
  LAYERS = layerRows.map(row => ({ ...row, y: Number(row.y) }));
  const reviews = new Map(reviewRows.map(row => [row.entityId, { ...row, sourceUrls: jsonArray(row.sourceUrls) }]));
  entities = attachEntityFacts(entityRows.map(row => ({ ...row, catalogReview: reviews.get(row.id) || null, categories: jsonArray(row.categories), products: jsonArray(row.products), profileSources: jsonArray(row.profileSources), importanceLevel: Number(row.importanceLevel), positionIndex: Number(row.positionIndex), timelineYear: numberOrNull(row.timelineYear), website: row.website || null })), entityEvidence);
  aliases = Object.fromEntries(aliasRows.map(row => [row.alias, row.entityId]));
  relationships = relationshipRows.map(row => ({ ...row, source: aliases[row.source] || row.source, target: aliases[row.target] || row.target, sourceUrl: row.sourceUrl || undefined, activeFrom: numberOrNull(row.activeFrom), activeTo: numberOrNull(row.activeTo) }));
  journeys = journeyRows.map(row => ({ ...row, nodes: jsonArray(row.nodes) }));
  representativePaths = Object.fromEntries(pathRows.map(row => [row.entityId, jsonArray(row.nodes)]));
  relationTypes = [...new Set(relationships.map(row => row.type))].sort();
}
