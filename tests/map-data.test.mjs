import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { loadMapData } from '../src/map-data.js';
import { parseCsv } from '../src/csv.js';

test('a failed optional CSV leaves the other map datasets available and supports retry', async () => {
  const read = async name => parseCsv(await readFile(new URL(`../data/${name}`, import.meta.url), 'utf8'));
  const partial = await loadMapData(name => name === 'submarine-cable-routes.csv' ? Promise.reject(new Error('offline')) : read(name));
  assert.deepEqual(partial.failed, ['submarine-cable-routes.csv']);
  assert.equal(partial.data.routes.length, 0);
  assert.ok(partial.data.dataCenters.length > 0);
  assert.ok(partial.officeLocations.length > 0);
  const recovered = await loadMapData(read);
  assert.deepEqual(recovered.failed, []);
  assert.ok(recovered.data.routes.length > 0);
});

test('all map files may be unavailable without preventing a core-data workflow', async () => {
  const result = await loadMapData(() => Promise.reject(new Error('offline')));
  assert.equal(result.failed.length, 18);
  assert.deepEqual(result.officeLocations, []);
  assert.deepEqual(result.data.dataCenters, []);
});
