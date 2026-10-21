#!/usr/bin/env python3
"""Rebuild the all-entity follow-up register from current data and the frozen baseline."""
import csv,json,pathlib,collections,hashlib
ROOT=pathlib.Path(__file__).resolve().parents[2];HERE=pathlib.Path(__file__).resolve().parent
E=list(csv.DictReader((ROOT/'data/entities.csv').open()));L=json.loads((ROOT/'data/entity-facts.json').read_text());baseline={r['entityId']:r for r in csv.DictReader((HERE/'inventory.csv').open())};locations={r['entityId']:r for r in L['locationSummaries']};reviewed=collections.defaultdict(list);products=collections.defaultdict(list)
for f in L['facts']:reviewed[f['entityId']].append(f)
for p in L['products']:products[p['entityId']].append(p)
rows=[]
for e in E:
 eid=e['id'];b=baseline[eid];ff=reviewed[eid];pp=products[eid];field_names=[f['field']for f in ff];catalog=json.loads(e['products']);documented=[p['name']for p in pp]
 if 'products'in field_names:documented=list(dict.fromkeys(documented+catalog))
 unreviewed=[p for p in catalog if p.casefold()not in {x.casefold()for x in documented}]
 company=e['type']in ['Company','Model lab','Research lab']or'organization_candidate'in b['likelyRecordKind']
 missing=[f for f in ['website','provides','howUsed']if not e[f]]
 if company:missing.extend(f for f in ['founded','headquarters','leadership']if not e[f])
 # Every company still needs a comprehensive corporate/product review; no numeric
 # completeness percentage is meaningful when ownership and portfolios are unknown.
 next_step='Verify legal company/business-unit/product identity and remaining company facts; document the full portfolio and lifecycle from primary sources.'if company else'Confirm the developer/owner and product identity; source remaining capabilities, lifecycle and access requirements.'
 if not ff and not pp:next_step='Obtain primary company/product sources; '+next_step[0].lower()+next_step[1:]
 row=dict(entityId=eid,name=e['name'],currentType=e['type'],layer=e['layer'],baselineIdentityAssessment=b['likelyRecordKind'],assessmentConfidence='heuristic_only_unless_type_fact_listed',commercialScopeAssessment=b['commercialScopeAssessment'],fieldReviewedNames=';'.join(sorted(field_names)),documentedProductNames=json.dumps(documented,ensure_ascii=False),unreviewedCatalogListings=json.dumps(unreviewed,ensure_ascii=False),missingRecordedFields=';'.join(missing),corporateIdentityAndOwnershipReview='pending'if company else'owner_identity_pending',completePortfolioReview='pending',currentLeadershipReview='pending'if company else'not_assessed_for_product_record',latestScopedFactReview=max([f['reviewedOn']for f in ff+pp],default=''),recordedLocationCount=locations.get(eid,{}).get('recordCount',0),historicalHeadquartersReferenceCount=len(locations.get(eid,{}).get('headquarters',[])),legacyCatalogReviewDate=b['catalogReviewDate'],priority=b['priority'],nextAction=next_step)
 rows.append(row)
with(HERE/'review-register.csv').open('w',newline='')as f:
 w=csv.DictWriter(f,fieldnames=list(rows[0]),lineterminator='\n');w.writeheader();w.writerows(rows)
summary=dict(reviewedOn=L['reviewedOn'],entries=len(E),companyLabLabeled=sum(e['type']in['Company','Model lab','Research lab']for e in E),scopedEvidenceEntities=sum(bool(reviewed[e['id']]or products[e['id']])for e in E),withoutNewFieldOrProductEvidence=sum(not reviewed[e['id']]and not products[e['id']]for e in E),fieldFacts=len(L['facts']),productFacts=len(L['products']),primarySources=len(L['sources']),locationEvidenceEntities=len(locations),missingFields={k:sum(e[k]in['','[]']for e in E)for k in['website','founded','leadership','headquarters','provides','howUsed','profileSources']},productionEntitySha256=hashlib.sha256((ROOT/'data/entities.csv').read_bytes()).hexdigest(),limitations='Presence, baseline heuristics and field-specific evidence are separate. No company has been certified as having a complete current dossier or portfolio.')
(HERE/'current-coverage.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary,indent=2))
