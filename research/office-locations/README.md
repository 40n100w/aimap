# Office location research

This dataset supports the atlas Map view. It is intentionally stricter than the
country-level geography used elsewhere in the project.

Run `npm run report:location-coverage` to measure researched companies against
the authoritative 1,088 `Company` entities currently exported by `src/data.js`.
The coverage denominator is not inferred from location records, so companies
with no current physical office can eventually be recorded as researched
outcomes without disappearing from the audit.

## Inclusion rules

- Include a physical company office, headquarters, laboratory, factory, field
  office, or documented training center with a street-level address.
- Exclude cloud regions, availability zones, reseller locations, job-search
  regions, postal boxes, and city-only locations.
- Prefer the company's official locations or contact page. Regulatory filings
  may be used when an official location directory is unavailable.
- Keep every source URL and the date on which it was checked.
- Do not publish a marker until latitude and longitude have been verified.
- `building` accuracy means the coordinate resolves to the documented parcel or
  building. `street` and `city` results remain research records but are not
  eligible for the final close-zoom map.

## Record states

- `address_verified`: the company source supports the complete address.
- `geocoded`: coordinates exist but still require the accuracy check.
- `map_ready`: coordinates have building-level verification.
- `needs_review`: conflicting, incomplete, duplicated, or stale source data.

Company records are grouped by `companyId`. This is also the key used to keep
all markers for a selected company red in the Map view.

Companies that explicitly operate without physical employee premises are
recorded in the top-level `researchOutcomes` array with the outcome
`no_physical_office`. A legal registration address, postal mailbox, coworking
drop-in space, or employee home must never be turned into an office marker.
