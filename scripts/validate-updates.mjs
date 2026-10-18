import { readFile } from 'node:fs/promises';
import { entities } from './load-csv-data.mjs';
import { validateUpdates } from '../src/update-records.js';
const data = JSON.parse(await readFile(new URL('../data/updates.json', import.meta.url), 'utf8'));
const errors = validateUpdates(data, entities);
if (errors.length) { console.error(errors.join('\n')); process.exitCode=1; }
else console.log(`Updates valid: ${data.events.length} events, ${data.versions.length} claim versions, ${data.sources.length} sources.`);
