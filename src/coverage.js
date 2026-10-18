export function coverageSummary(entities, relationships) {
  const dated = entities.filter(entity => Number.isFinite(entity.timelineYear) && entity.timelineYear > 0).length;
  return {
    total: entities.length,
    dated,
    percent: entities.length ? (dated / entities.length * 100).toFixed(1) : '0.0',
    profiles: entities.filter(entity => entity.profileSources?.length).length,
    reviewed: entities.filter(entity => entity.catalogReview?.reviewedOn).length,
    relationships: relationships.length,
    sourcedRelationships: relationships.filter(edge => edge.sourceUrl).length
  };
}
