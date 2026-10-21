#!/usr/bin/env python3
"""Measure every catalog record without treating populated fields as verified facts.

Read-only with respect to production data. Rewrites only this research directory's
inventory.csv and inventory-summary.json. Identity overrides are research leads,
not independently verified corporate classifications or ownership assertions.
"""
import argparse
import collections
import csv
import hashlib
import json
from pathlib import Path
from urllib.parse import urlsplit

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
DATA = ROOT / 'data'
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--output-dir', type=Path, default=HERE, help='Use another directory to create a new snapshot after production data changes.')
OUT = parser.parse_args().output_dir.resolve()
OUT.mkdir(parents=True, exist_ok=True)
input_names = ['entities.csv','office-locations.csv','catalog-reviews.csv','relationships.csv','aliases.csv']
input_hashes = {name: hashlib.sha256((DATA/name).read_bytes()).hexdigest() for name in input_names}
prior_summary = OUT / 'inventory-summary.json'
if prior_summary.exists() and json.loads(prior_summary.read_text()).get('inputSha256') != input_hashes:
    raise SystemExit('Input data has changed. Preserve the existing baseline; use --output-dir for a new snapshot.')

def read_csv(name):
    return list(csv.DictReader((DATA / name).open(newline='', encoding='utf-8')))

def array(value):
    return json.loads(value) if value else []

def json_cell(value):
    return json.dumps(value, ensure_ascii=False, separators=(',', ':'))

entities = read_csv('entities.csv')
locations = read_csv('office-locations.csv')
reviews = {row['entityId']: row for row in read_csv('catalog-reviews.csv')}
relationships = read_csv('relationships.csv')
aliases = {row['alias']: row['entityId'] for row in read_csv('aliases.csv')}
by_id = {row['id']: row for row in entities}

# Names that warrant an organization-identity check despite a product-like type.
# This is deliberately a candidate list, not a source-backed reclassification.
organization_candidates = set('''
lite-on-technology innolight-technology mattson-technology eoptolink-technology
naura-technology sinfonia-technology nuflare-technology eugene-technology
zhen-ding-technology powertech-technology unimicron-technology nanya-technology
tripod-technology biren-technology mitac-computing-technology neousys-technology
montage-technology avalue-technology macom-technology quanta-cloud-technology
baseten lightning-ai confluent qdrant arize-ai surge-ai protect-ai portkey
fiddler-ai labelbox hiddenlayer zenity-security tonic-ai cerebrium lancedb
whylabs snorkel-ai robust-intelligence martian haize-labs hazy anyscale dbt-labs
galileo appen calypsoai not-diamond gray-swan-ai synthesized octoai runhouse
fivetran humanloop defined-ai prompt-security unify-ai aim-security statice
predibase airbyte braintrust sama layerx-security ydata copyright-clearance-center
lepton-ai astronomer patronus-ai imerit guardrails-ai evidently-ai reality-defender
gencove tollbit deepinfra prefect singlestore giskard cloudfactory aporia kolena
harmonic-security rendered-ai human-native-ai fal-ai dagster invisible-technologies
arthur-ai traceloop pillar-security parallel-domain calliope-networks modal-labs
deepchecks toloka credo-ai keywords-ai agentops deepkeep spawning-ai beam typesense
confident-ai centific holistic-ai eden-ai langwatch enkrypt-ai cognata inferless
openpipe tecton hopsworks marqo promptfoo v7-labs truefoundry lunary seldon
reinforcement-ai monte-carlo-data helicone encord bigeye turbopuffer langfuse
dataloop datagen soda-data kili-technology
notion canva adobe palantir salesforce servicenow synthesia abridge shield-ai
character-ai notable-health heygen positive-technologies exscientia helsing qventus
luminance descript bi-zone aidoc benevolentai ada replika regard glean veed group-ib
pathai atomwise forethought infinitus-systems riiid you-com grammarly photoroom
kapwing paige insitro rebellion-defense akasa phind topaz-labs opusclip viz-ai
genesis-therapeutics magicschool clarify-health blue-j exa twelve-labs butterfly-network
xtalpi schoolai blacksky paige-ai norm-ai nosto brisk-teaching tavily krea tavus
owkin valence-labs carnegie-learning proscia greenlite-ai lily-ai teachmateai d-id
insilico-medicine absci century-tech epirus physicsx heartflow recraft colossyan
abnormal-security suki squirrel-ai skydio monolith-ai caption-health ocrolus
scenario pictory darktrace ambience-healthcare relay-therapeutics subtle-medical
meshy invideo-ai securonix nabla formation-bio feedzai gong citrine-informatics
finchat dynamic-yield
retell-ai mem0 vapi zep just-ai bland-ai polyai parloa decagon sierra arcade-dev
composio nango augment-code browserbase parallel-web-systems qodo
'''.split())

# Clearly product/system/software-style names that deserve identity review under
# Company. Some may also designate a business unit: do not silently change types.
product_candidates = set('''
shin-etsu-thermal-interface-materials 3m-fluids shell-lubricants
western-digital-flash intel-nand powerchip-memory
huawei-ascend tesla-dojo nvidia-jetson samsung-pm1743 intel-ethernet google-coral
micron-9550-nvme qualcomm-hexagon kioxia-cm7 samsung-exynos-npu cisco-silicon-one
solidigm-d7 ibm-power intel-npu marvell-teralynx apple-m-series lenovo-neptune
western-digital-ultrastar alibaba-yitian amd-xdna broadcom-tomahawk
qualcomm-snapdragon-x inspur-nf-series seagate-exos aws-graviton samsung-exynos-ai
h3c-uniserver phison-pascari google-axion alibaba-hanguang hailo-8 xfusion-fusionserver
silicon-motion-montitan microsoft-cobalt tencent-zixiao microchip-cxl
ambarella-cvflow fujitsu-primehpc marvell-bravera fujitsu-a64fx bytedance-asic
marvell-cxl astera-labs-fabric nxp-eiq nec-sx-aurora microchip-flashtec ibm-aiu
samsung-cxl-memory rockchip-npu atos-eviden-bullsequana broadcom-megaraid
tenstorrent-wormhole sk-hynix-cxl-memory horizon-robotics-journey
supermicro-supercluster memblaze-pblaze dell-powerscale submer-smartpod
zutacore-hypercool cumulus-linux coolit-chx sonic vertiv-liebert-xdu
schneider-motivair-cdu stulz-cybercool munters-sycool solidigm-ssd
openai-whisper google-alphafold google-veo google-audiolm writer-palmyra openai-sora
meta-audiocraft microsoft-aurora
ros ros-2 anduril-ghost medtronic-hugo shield-ai-hivemind johnson-and-johnson-ottava
isaac-sim mujoco gazebo webots coppeliasim drake-robotics moveit lerobot
smith-nephew-cori mobileye-drive openvla zimmer-biomet-rosa rt-2 octo-robot-policy
'''.split())

# A location/site/fab name is not automatically its own incorporated company.
facility_candidates = set('''
coherent-sherman wolfspeed-mohawk-valley at-and-s-chongqing onsemi-east-fishkill
infineon-kulim texas-instruments-fabs stmicroelectronics-catania stmicroelectronics-fabs
lumentum-wafer-fab
'''.split())

research_candidates = set('''
allen-institute-for-ai bigscience airi eleutherai openbmb laion turkunlp
ellis-institute-t-bingen futurehouse-research futurehouse opengpt-x occiglot
shanghai-ai-laboratory nii-japan-llm-center barcelona-supercomputing-center-ai
ellis-alicante beijing-academy-of-ai swiss-ai-initiative kyutai cern-openlab-ai
chinese-academy-of-sciences-automation-institute arc-institute biohub
technology-innovation-institute rakuten-institute-of-technology
korea-institute-of-science-and-technology-information-ai open-robotics
ucie-consortium open-compute-project-odsa mlcommons coalition-for-content-provenance
'''.split())

# Do not infer mergers/ownership from these groups; use them as explicit review
# queues for duplicates, brands, products, subsidiaries, and historical identities.
identity_groups = [
 ('quanta', ['qct','quanta-cloud-technology','quanta-computer']),
 ('coherent', ['coherent','coherent-corp','ii-vi-photonics','coherent-sherman']),
 ('innolight', ['innolight','innolight-technology']),
 ('eoptolink', ['eoptolink','eoptolink-technology']),
 ('accelink', ['accelink','accelink-technologies']),
 ('mitac', ['mitac-computing','mitac-computing-technology']),
 ('unimicron', ['unimicron','unimicron-technology']),
 ('lumentum', ['lumentum','lumentum-holdings','lumentum-wafer-fab']),
 ('kinsus', ['kinsus','kinsus-interconnect']),
 ('siliconware', ['spil','siliconware-precision']),
 ('tongfu', ['tongfu','tfme']),
 ('changxin', ['cxmt','changxin-memory']),
 ('kurita', ['kurita','kurita-water-industries']),
 ('compal', ['compal','compal-electronics']),
 ('eaton', ['eaton','eaton-electrical']),
 ('boyd', ['boyd','boyd-corporation']),
 ('green-revolution-cooling', ['green-revolution-cooling','grc']),
 ('schneider', ['schneider','schneider-electric-secure-power','schneider-motivair-cdu']),
 ('cummins', ['cummins-power','cummins-power-generation','cummins-power-systems']),
 ('ge-vernova-grid', ['ge-vernova-grid','ge-vernova-grid-solutions']),
 ('caterpillar-power', ['caterpillar-power','caterpillar-electric-power']),
 ('rebellions-sapeon', ['rebellions','sapeon']),
 ('kohler-rehlko', ['kohler-energy','rehlko']),
 ('robotics-geek', ['geek-robotics','geekplus']),
 ('cradle', ['cradle','cradle-ai']),
 ('mosaic-research', ['databricks-mosaic-research','databricks-mosaic-ai-research']),
 ('defined-ai', ['defined-ai','defined-ai-data-marketplace']),
 ('phoenix', ['phoenix-by-arize','phoenix-arize']),
 ('giskard', ['giskard','giskard-ai']),
 ('ovhcloud', ['ovhcloud','ovhcloud-public-cloud','ovhcloud-data-centers']),
 ('modal', ['modal','modal-labs','modal-training']),
 ('baseten', ['baseten','baseten-cloud']),
 ('beam', ['beam','beam-cloud']),
 ('paige', ['paige','paige-ai']),
 ('photomath', ['photomath','photomath-ai']),
 ('socratic', ['socratic','socratic-by-google']),
 ('magicschool', ['magicschool','magicschool-ai']),
 ('bedrock-agents', ['amazon-bedrock-agents','aws-bedrock-agents']),
]
identity_group_by_id = collections.defaultdict(list)
for group, ids in identity_groups:
    for entity_id in ids:
        assert entity_id in by_id, entity_id
        identity_group_by_id[entity_id].append(group)

for candidates in [organization_candidates, product_candidates, facility_candidates, research_candidates]:
    assert candidates <= by_id.keys(), sorted(candidates - by_id.keys())

location_by_id = collections.defaultdict(list)
for location in locations:
    joined_ids = set([location['companyId']] + array(location.get('entityIds','')))
    for entity_id in joined_ids:
        if entity_id in by_id:
            location_by_id[entity_id].append(location)

def record_kind(entity):
    entity_id = entity['id']
    if entity_id in research_candidates:
        return 'research_community_or_standards_organization_candidate', 'name_based_candidate_not_source_verified'
    if entity_id in facility_candidates:
        return 'facility_or_manufacturing_site_candidate', 'name_based_candidate_not_source_verified'
    if entity_id in product_candidates:
        return 'product_system_or_business_unit_candidate', 'name_based_candidate_not_source_verified'
    if entity_id in organization_candidates:
        return 'organization_candidate_with_product_like_type', 'name_based_candidate_not_source_verified'
    if entity['type'] in ['Company','Model lab','Research lab']:
        return 'organization_or_business_unit_candidate', 'catalog_label_only'
    if entity['type'] in ['Material','Infrastructure']:
        return 'material_or_infrastructure_record', 'catalog_label_only'
    if entity['type'] in ['Framework','Standard','Protocol','Project']:
        return 'software_standard_or_project_record', 'catalog_label_only'
    return 'model_product_or_service_record', 'catalog_label_only'

rows=[]
for entity in entities:
    entity_id = entity['id']
    kind, confidence = record_kind(entity)
    review = reviews.get(entity_id)
    profile_sources = array(entity['profileSources'])
    review_sources = array(review['sourceUrls']) if review else []
    generic_description = ' participates in ' in entity['description'] or ' is a structurally relevant part of ' in entity['description']
    generic_why = ' broadens the atlas beyond ' in entity['whyItMatters'] or ' sits on a high-leverage part of ' in entity['whyItMatters']
    generic = generic_description or generic_why
    missing = [field for field in ['website','founded','leadership','headquarters','provides','howUsed','profileSources'] if not entity[field] or entity[field] == '[]']
    if entity['country'] in ['', 'Various', 'Global', 'Open source']:
        missing.append('specificCountry')
    if not entity['timelineYear']:
        missing.append('timelineYear')
    if not review:
        missing.append('datedCatalogReview')
    office_records = location_by_id[entity_id]
    headquarters = [row for row in office_records if row['locationType']=='headquarters']
    office_sources = sorted(set(row['addressSourceUrl'] or row['sourceUrl'] for row in office_records if row['addressSourceUrl'] or row['sourceUrl']))
    evidence_state = 'scoped_catalog_review_not_full_product_catalog' if review else 'profile_citations_without_product_field_mapping' if profile_sources else 'no_profile_or_product_review_sources'
    identity_issue = confidence != 'catalog_label_only' or bool(identity_group_by_id[entity_id])
    reasons=[]
    if identity_issue: reasons.append('identity_or_record_kind_review')
    if generic: reasons.append('generic_editorial_profile')
    if not profile_sources and not review_sources: reasons.append('product_and_profile_sources_missing')
    if headquarters and not entity['headquarters']: reasons.append('headquarters_evidence_not_joined_to_profile')
    if not entity['provides'] or not entity['howUsed']: reasons.append('company_specific_offering_or_use_missing')
    if not entity['website']: reasons.append('official_website_missing')
    high_priority = int(entity['importanceLevel']) >= 3
    priority = 'P0' if high_priority and (generic or identity_issue or not profile_sources) else 'P1' if ('organization' in kind or identity_issue) and reasons else 'P2'
    if kind == 'organization_or_business_unit_candidate' or kind == 'organization_candidate_with_product_like_type':
        scope = 'commercial_organization_or_unit_candidate_requires_identity_check'
    elif kind == 'research_community_or_standards_organization_candidate':
        scope = 'commercial_status_or_nonprofit_affiliation_requires_identity_check'
    elif kind in ['product_system_or_business_unit_candidate','model_product_or_service_record','facility_or_manufacturing_site_candidate']:
        scope = 'product_service_or_facility_owner_requires_identification'
    else:
        scope = 'commercial_ownership_not_inferred_from_record_type'
    relationship_sources = sorted(set(r['sourceUrl'] for r in relationships if r['sourceUrl'] and entity_id in [aliases.get(r['source'],r['source']),aliases.get(r['target'],r['target'])]))
    rows.append({
        'entityId': entity_id, 'name': entity['name'], 'type': entity['type'], 'layer': entity['layer'],
        'likelyRecordKind': kind, 'kindAssessmentBasis': confidence, 'commercialScopeAssessment': scope,
        'missingFields': json_cell(missing), 'genericProfile': str(generic).lower(),
        'genericDescription': str(generic_description).lower(), 'genericWhyItMatters': str(generic_why).lower(),
        'productEvidenceGap': evidence_state, 'listedProducts': json_cell(array(entity['products'])),
        'existingSources': json_cell(sorted(set(profile_sources+review_sources))),
        'existingSourceCount': len(set(profile_sources+review_sources)),
        'existingWebsite': entity['website'],
        'websiteLinkKind': 'not_recorded' if not entity['website'] else 'raw_source_document' if urlsplit(entity['website']).netloc == 'raw.githubusercontent.com' else 'repository' if urlsplit(entity['website']).netloc == 'github.com' else 'external_site_link_requires_scope_review',
        'catalogReviewDate': review['reviewedOn'] if review else '',
        'catalogReviewScope': review['scope'] if review else '',
        'existingLocationRows': len(office_records), 'existingHeadquartersRows':len(headquarters),
        'existingLocationSources':json_cell(office_sources),
        'existingRelationshipSources':json_cell(relationship_sources),
        'identityReviewGroups':json_cell(identity_group_by_id[entity_id]),
        'priority': priority, 'reason':json_cell(reasons),
        'assessmentType':'mechanical_inventory_and_identity_screen_not_source_verification'
    })

with (OUT/'inventory.csv').open('w',newline='',encoding='utf-8') as output:
    writer=csv.DictWriter(output,fieldnames=list(rows[0]),lineterminator='\n')
    writer.writeheader(); writer.writerows(rows)

company_labeled=[r for r in rows if r['type'] in ['Company','Model lab','Research lab']]
profileless_with_location=[r for r in rows if r['existingLocationRows'] and r['existingSourceCount']==0]
summary={
 'assessmentDate':'2026-10-20',
 'method':'Every core catalog record assessed mechanically; named identity groups and kind overrides are research leads, not independently sourced corporate facts. No production record was edited.',
 'entityCount':len(rows), 'entityTypes':dict(collections.Counter(r['type']for r in rows)),
 'genericDescriptionCount':sum(r['genericDescription']=='true'for r in rows),
 'genericProfileCount':sum(r['genericProfile']=='true'for r in rows),
 'missingFieldCounts':dict(collections.Counter(field for r in rows for field in json.loads(r['missingFields']))),
 'companyLabLabeledCount':len(company_labeled),
 'companyLabLabeledMissingFieldCounts':dict(collections.Counter(field for r in company_labeled for field in json.loads(r['missingFields']))),
 'kindAssessmentCounts':dict(collections.Counter(r['likelyRecordKind']for r in rows)),
 'commercialScopeCounts':dict(collections.Counter(r['commercialScopeAssessment']for r in rows)),
 'websiteLinkKindCounts':dict(collections.Counter(r['websiteLinkKind']for r in rows)),
 'productEvidenceStateCounts':dict(collections.Counter(r['productEvidenceGap']for r in rows)),
 'priorityCounts':dict(collections.Counter(r['priority']for r in rows)),
 'identityReviewGroups':[{'group':group,'entityIds':ids,'status':'unverified_identity_review_group'}for group,ids in identity_groups],
 'locationEvidence':{
   'allLocationRows':len(locations),
   'allDistinctCompanyIds':len(set(r['companyId']for r in locations)),
   'coreEntitiesWithJoinedLocationRows':sum(bool(r['existingLocationRows'])for r in rows),
   'coreEntitiesWithJoinedHeadquartersRows':sum(bool(r['existingHeadquartersRows'])for r in rows),
   'coreEntitiesWithHeadquartersRowsButBlankProfileHeadquarters':sum(r['existingHeadquartersRows']>0 and not by_id[r['entityId']]['headquarters']for r in rows),
   'entitiesWithLocationEvidenceButNoProfileOrReviewSources':[r['entityId']for r in profileless_with_location],
   'limitations':'Existing location records retain their own status, address source, date and coordinate accuracy. Not freshly reverified; multiple headquarters rows may concern subsidiaries or historical entities.'
 },
 'repeatedProductBundles':[{'products':json.loads(products),'recordCount':count}for products,count in collections.Counter(e['products']for e in entities).most_common(25)],
 'inputSha256':input_hashes
}
(OUT/'inventory-summary.json').write_text(json.dumps(summary,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({key:summary[key]for key in ['entityCount','genericDescriptionCount','genericProfileCount','companyLabLabeledCount','kindAssessmentCounts','productEvidenceStateCounts','priorityCounts']},indent=2))
