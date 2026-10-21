// Field-level evidence never promotes unrelated profile fields to reviewed facts.
export function attachEntityFacts(entities, ledger) {
  if (ledger.schemaVersion !== 1) throw new Error('Unsupported entity evidence schema');
  const sourceById = new Map(ledger.sources.map(source => [source.id, source]));
  const fields = new Map(), products = new Map();
  const locations = new Map((ledger.locationSummaries || []).map(summary => [summary.entityId, summary]));
  const identityNotes = new Map((ledger.identityNotes || []).map(note => [note.entityId, note]));
  const attach = (records, target) => {
    for (const record of records) {
      const resolved = { ...record, sources: record.sourceIds.map(id => sourceById.get(id)).filter(Boolean) };
      if (!target.has(record.entityId)) target.set(record.entityId, []);
      target.get(record.entityId).push(resolved);
    }
  };
  attach(ledger.facts, fields);
  attach(ledger.products, products);
  return entities.map(entity => ({
    ...entity,
    fieldFacts: fields.get(entity.id) || [],
    productFacts: products.get(entity.id) || [],
    locationSummary: locations.get(entity.id) || null,
    recordedLocations: locations.get(entity.id)?.headquarters || [],
    identityNote: identityNotes.has(entity.id) && identityNotes.get(entity.id).appliesToType === entity.type ? identityNotes.get(entity.id).note : ''
  }));
}
