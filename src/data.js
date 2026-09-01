import { jsonArray, loadCsv, numberOrNull } from './csv.js';

export let DATA_UPDATED = '';
export let LAYERS = [];
export let entities = [];
export let relationships = [];
export let aliases = {};
export let journeys = [];
export let representativePaths = {};
export let relationTypes = [];

export async function loadCoreData() {
  const [settingsRows, layerRows, entityRows, relationshipRows, aliasRows, journeyRows, pathRows] = await Promise.all([
    'settings.csv', 'layers.csv', 'entities.csv', 'relationships.csv',
    'aliases.csv', 'journeys.csv', 'representative-paths.csv'
  ].map(loadCsv));
  const settings = Object.fromEntries(settingsRows.map(row => [row.key, row.value]));
  DATA_UPDATED = settings.data_updated;
  LAYERS = layerRows.map(row => ({ ...row, y: Number(row.y) }));
  entities = entityRows.map(row => ({ ...row, categories: jsonArray(row.categories), products: jsonArray(row.products), profileSources: jsonArray(row.profileSources), importanceLevel: Number(row.importanceLevel), positionIndex: Number(row.positionIndex), timelineYear: numberOrNull(row.timelineYear), website: row.website || null }));
  relationships = relationshipRows.map(row => ({ ...row, sourceUrl: row.sourceUrl || undefined, activeFrom: numberOrNull(row.activeFrom), activeTo: numberOrNull(row.activeTo) }));
  aliases = Object.fromEntries(aliasRows.map(row => [row.alias, row.entityId]));
  journeys = journeyRows.map(row => ({ ...row, nodes: jsonArray(row.nodes) }));
  representativePaths = Object.fromEntries(pathRows.map(row => [row.entityId, jsonArray(row.nodes)]));
  relationTypes = [...new Set(relationships.map(row => row.type))].sort();
}
