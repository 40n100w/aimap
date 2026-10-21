const ORGANIZATION_TYPES = new Set(['Company', 'Model lab', 'Research lab']);
const PROFILE_FIELDS = new Set(['name', 'type', 'country', 'description', 'website', 'founded', 'leadership', 'headquarters', 'provides', 'howUsed', 'products', 'ecosystemRole', 'whyItMatters']);

export const isGenericProfile = value => /\bparticipates in\b.*\bwith relevance to\b|\bis a structurally relevant part of\b|\bbroadens the atlas beyond\b/i.test(value || '');

export function safeSourceUrl(value) {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

const validDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().startsWith(value);
const present = value => Array.isArray(value) ? value.length > 0 : value != null && String(value).trim() !== '';
const normalize = value => String(value || '').trim().toLocaleLowerCase();
const sameValue = (left, right) => JSON.stringify(left) === JSON.stringify(right);

export function usableSources(sources = []) {
  const seen = new Set();
  return (Array.isArray(sources) ? sources : []).flatMap(source => {
    if (!source || typeof source !== 'object') return [];
    const url = safeSourceUrl(source.url);
    if (!url || seen.has(url)) return [];
    seen.add(url);
    return [{ ...source, url, title: source.title || new URL(url).hostname }];
  });
}

export function informationLabel(value) {
  const label = String(value || '').replace(/([a-z\d])([A-Z])/g, '$1 $2').replace(/([A-Z]{2,})([A-Z][a-z]{2,})/g, '$1 $2').replace(/[_-]+/g, ' ').trim();
  return label.replace(/^./, char => char.toUpperCase()).replace(/\b(sdk|api|gpu|cpu|hbm|ram|llm|cli|npu)\b/gi, token => token.toUpperCase());
}

// Keep scoped product attributes attached to their evidence, rather than
// promoting availability or lifecycle notes to blanket company claims.
export function evidenceDetails(evidence) {
  const valueText = value => Array.isArray(value) ? value.filter(value => value != null && String(value).trim()).map(String).join(' · ') : typeof value === 'string' || typeof value === 'number' ? String(value) : '';
  const rows = [
    ['Kind', informationLabel(evidence.kind)],
    ['Availability / support', evidence.availability],
    ['Lifecycle status', evidence.lifecycleStatus],
    ['Recorded release date', evidence.releaseDate],
    ['Evidence as of', evidence.evidenceAsOf]
  ];
  if (evidence.documentedAttributes && typeof evidence.documentedAttributes === 'object' && !Array.isArray(evidence.documentedAttributes)) {
    rows.push(...Object.entries(evidence.documentedAttributes).map(([key, value]) => [informationLabel(key), value]));
  }
  return rows.map(([label, value]) => ({ label, value: valueText(value) })).filter(row => row.value.trim());
}

export function excerptSource(evidence) {
  const sources = usableSources(evidence.sources);
  if (evidence.evidenceSourceId) return sources.find(source => source.id === evidence.evidenceSourceId) || null;
  return sources.length === 1 ? sources[0] : null;
}

// Evidence applies only to the recorded value it actually reviewed. A citation
// elsewhere on the profile must never silently verify another field.
export function fieldEvidence(entity, field) {
  if (!PROFILE_FIELDS.has(field)) return null;
  return (Array.isArray(entity.fieldFacts) ? entity.fieldFacts : [])
    .filter(fact => fact?.field === field && sameValue(fact.value, entity[field]) && present(fact.scope) && validDate(fact.reviewedOn))
    .map(fact => ({ ...fact, sources: usableSources(fact.sources) }))
    .filter(fact => fact.sources.length)
    .sort((a, b) => b.reviewedOn.localeCompare(a.reviewedOn))[0] || null;
}

export function productInformation(entity) {
  const documented = [], byName = new Set();
  for (const product of Array.isArray(entity.productFacts) ? entity.productFacts : []) {
    const sources = usableSources(product?.sources);
    if (!present(product?.name) || !present(product.scope) || !validDate(product.reviewedOn) || !sources.length) continue;
    const key = normalize(product.name);
    if (byName.has(key)) continue;
    byName.add(key);
    documented.push({ ...product, sources });
  }
  const portfolioEvidence = fieldEvidence(entity, 'products');
  const catalogProducts = Array.isArray(entity.products) ? entity.products : [];
  if (portfolioEvidence) {
    for (const name of catalogProducts) {
      if (byName.has(normalize(name))) continue;
      byName.add(normalize(name));
      documented.push({ name, role: '', ...portfolioEvidence });
    }
  }
  const unreviewed = catalogProducts.filter(name => !byName.has(normalize(name)));
  return { documented, unreviewed, portfolioEvidence };
}

export function entityInformation(entity, { developers = [] } = {}) {
  const organization = ORGANIZATION_TYPES.has(entity.type);
  const recordedFounding = !present(entity.founded) && entity.timelineBasis === 'Founded' && Number.isInteger(entity.timelineYear) ? String(entity.timelineYear) : '';
  const fields = [
    { key: 'type', label: 'Catalog classification', value: entity.type, note: 'Identity needs review. This label does not establish legal identity, company/product boundaries or ownership.' },
    { key: 'country', label: 'Country / region', value: /^(various|unknown|not disclosed|open source|global|worldwide)$/i.test((entity.country || '').trim()) ? '' : entity.country },
    { key: 'website', label: 'Website / documentation', value: safeSourceUrl(entity.website) }
  ];
  if (organization) {
    fields.push(
      { key: 'founded', label: 'Founded / launched', value: entity.founded || recordedFounding, note: recordedFounding ? 'Year recorded in the atlas timeline; founding evidence has not been rechecked here.' : '' },
      { key: 'headquarters', label: 'Headquarters', value: entity.headquarters },
      { key: 'leadership', label: 'Leadership', value: entity.leadership }
    );
  } else if (developers.length) {
    fields.push({ key: 'developer', label: 'Recorded developer', value: developers.join(', '), note: 'From catalog developer links; this does not establish current corporate ownership.' });
  }
  for (const field of fields) {
    field.missing = !present(field.value);
    field.evidence = fieldEvidence(entity, field.key);
    if (field.evidence && field.key === 'type') field.note = '';
  }
  const reviewedFields = [...PROFILE_FIELDS].filter(field => fieldEvidence(entity, field));
  const profileSources = [...new Set((entity.profileSources || []).map(safeSourceUrl).filter(Boolean))];
  const missing = fields.filter(field => field.missing).map(field => field.label);
  const locations = (entity.recordedLocations || entity.locationSummary?.headquarters || [])
    .filter(location => location && present(location.address))
    .map(location => ({ ...location, recordedFor: location.companyName || location.companyId || 'Organization not recorded', sourceUrl: safeSourceUrl(location.addressSourceUrl) || safeSourceUrl(location.sourceUrl) }));
  return {
    organization, fields, missing, reviewedFields, profileSources, locations,
    products: productInformation(entity),
    genericDescription: isGenericProfile(entity.description),
    genericRole: isGenericProfile(entity.ecosystemRole),
    overviewEvidence: fieldEvidence(entity, 'description'),
    providesEvidence: fieldEvidence(entity, 'provides'),
    howUsedEvidence: fieldEvidence(entity, 'howUsed')
  };
}
