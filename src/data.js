import settingsCsv from '../data/settings.csv?raw';
import layersCsv from '../data/layers.csv?raw';
import entitiesCsv from '../data/entities.csv?raw';
import relationshipsCsv from '../data/relationships.csv?raw';
import aliasesCsv from '../data/aliases.csv?raw';
import journeysCsv from '../data/journeys.csv?raw';
import pathsCsv from '../data/representative-paths.csv?raw';
import { jsonArray, numberOrNull, parseCsv } from './csv.js';

const settings = Object.fromEntries(parseCsv(settingsCsv).map(row => [row.key, row.value]));

export const DATA_UPDATED = settings.data_updated;
export const LAYERS = parseCsv(layersCsv).map(row => ({ ...row, y: Number(row.y) }));
export const entities = parseCsv(entitiesCsv).map(row => ({
  ...row,
  categories: jsonArray(row.categories),
  products: jsonArray(row.products),
  profileSources: jsonArray(row.profileSources),
  importanceLevel: Number(row.importanceLevel),
  positionIndex: Number(row.positionIndex),
  timelineYear: numberOrNull(row.timelineYear),
  website: row.website || null
}));
export const relationships = parseCsv(relationshipsCsv).map(row => ({
  ...row,
  sourceUrl: row.sourceUrl || undefined,
  activeFrom: numberOrNull(row.activeFrom),
  activeTo: numberOrNull(row.activeTo)
}));
export const aliases = Object.fromEntries(parseCsv(aliasesCsv).map(row => [row.alias, row.entityId]));
export const journeys = parseCsv(journeysCsv).map(row => ({ ...row, nodes: jsonArray(row.nodes) }));
export const representativePaths = Object.fromEntries(parseCsv(pathsCsv).map(row => [row.entityId, jsonArray(row.nodes)]));
export const relationTypes = [...new Set(relationships.map(row => row.type))].sort();
