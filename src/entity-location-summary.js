// Retain explicit dataset associations; never infer corporate ownership from a name.
export function summarizeEntityLocations(entities, locations, aliases = {}) {
  const ids = new Set(entities.map(entity => entity.id));
  const canonical = id => aliases[id] || id;
  const byEntity = new Map();
  for (const location of locations) {
    const associated = new Set([location.companyId, ...(location.entityIds || [])].map(canonical).filter(id => ids.has(id)));
    for (const id of associated) {
      if (!byEntity.has(id)) byEntity.set(id, new Map());
      byEntity.get(id).set(location.id, location);
    }
  }
  return [...byEntity.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([entityId, rows]) => {
    const records = [...rows.values()];
    return {
      entityId,
      evidenceOrigin: 'existing_record',
      recordCount: records.length,
      countries: [...new Set(records.map(row => row.country).filter(Boolean))].sort(),
      mapReadyCount: records.filter(row => row.status === 'map_ready').length,
      needsReviewCount: records.filter(row => row.status === 'needs_review').length,
      sourceDataset: 'office-locations.csv',
      scope: 'Existing address records with their original dates and status. Headquarters labels may refer to a region, subsidiary or historical organization; no current global headquarters or training facility is inferred.',
      headquarters: records.filter(row => row.locationType === 'headquarters').map(row => Object.fromEntries([
        'id', 'companyId', 'companyName', 'locationName', 'locationType', 'address', 'country',
        'status', 'sourceUrl', 'addressSourceUrl', 'sourceType', 'verifiedOn', 'researchNote'
      ].map(key => [key, row[key] || ''])))
    };
  });
}
