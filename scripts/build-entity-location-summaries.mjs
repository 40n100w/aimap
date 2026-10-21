import { readFileSync, writeFileSync } from 'node:fs';
import { entities, officeLocations, aliases } from './load-csv-data.mjs';
import { summarizeEntityLocations } from '../src/entity-location-summary.js';

const path = new URL('../data/entity-facts.json', import.meta.url);
const ledger = JSON.parse(readFileSync(path, 'utf8'));
ledger.locationSummaries = summarizeEntityLocations(entities, officeLocations, aliases);
writeFileSync(path, `${JSON.stringify(ledger, null, 2)}\n`);
console.log(`Preserved dated location evidence for ${ledger.locationSummaries.length} entities; no headquarters field was inferred.`);
