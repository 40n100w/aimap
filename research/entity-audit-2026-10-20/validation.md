# Validation — company and product information review

Final dataset: 2,038 retained entities; 399 field facts; 472 product facts; 196 primary sources; 143 entries with new scoped evidence; 117 historical location summaries.

| Check | Result |
| --- | --- |
| `npm run check:data` | All ten validators passed against the final data. Includes exact field/evidence matching, source references and historical location summary equality. |
| `npm test` | 25 tests passed, zero failures. Includes stale-field evidence, scoped products, unsafe links, missing information, historical/shared offices, lifecycle/specifications and quotation attribution. |
| `npm run build` | Production standalone assets and portable package built successfully. |
| Final `npm run test:browser` | All 35 scenarios passed against the final production build, including eight profile scenarios, direct desktop/mobile startup and reload, touch navigation, maps, updates, and fallback/retry paths. |
| Visual inspection | Scale, Nanya and OpenAI profiles inspected at 1440×1000 and 390×844. No horizontal overflow or browser errors; evidence/source controls remain accessible. |
| Independent source/data review | All 196 source hashes, 401 source excerpts, 311 exact item quotations/line references, all field values, identity retention and journal references checked. See independent-review.md. |
| `git diff --check` | Passed. |

Browser coverage includes generic categories remaining unreviewed; exact per-product source links; Graviton's hardware identity; SK hynix software evidence not certifying HBM products; shared historical headquarters retaining the original company/date; Speechmatics' legacy SDK deprecation and patch cutoff; Apple's on-device/runtime requirements; and mobile evidence controls with 44px touch targets and no horizontal overflow.

The final full browser run includes the metadata renderer and welcome-screen removal. Desktop and mobile startup/reload checks confirm direct access without a welcome screen, dialog or automatic keyboard focus. Data, source-integrity and build checks use the final dataset.

Visual captures and focused rendering checks are retained under ignored `work/entity-profile-visual/`; final full browser captures are under `work/direct-entry-browser/`. These local checks do not confirm deployment; the GitHub Pages workflow must report publication separately.
