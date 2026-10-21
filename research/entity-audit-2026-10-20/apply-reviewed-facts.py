#!/usr/bin/env python3
"""Integrate this dated, manually inspected research batch; preserve all entity IDs.
Not a discovery tool. Product subsets do not certify or replace whole portfolios.
"""
import csv, json, hashlib, pathlib, re
ROOT=pathlib.Path(__file__).resolve().parents[2]
HERE=pathlib.Path(__file__).resolve().parent
DATA=ROOT/'data'
FILES=['hardware-facts.json','model-company-facts.json','cloud-facts.json','software-facts.json','hardware-accuracy-facts.json','systems-additional-facts.json','software-additional-facts.json','specialist-facts.json','robotics-facts.json']
ARRAY_FIELDS={'products','profileSources','categories'}
REPLACE_PRODUCTS={'aws-graviton','broadcom-tomahawk','eleven-v3'}
ALLOWED={'type','description','products','provides','howUsed','website','founded','leadership','headquarters','country','geography','ecosystemRole','whyItMatters'}
DATE='2026-10-20'
def digest(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def load(path):return json.loads(path.read_text())
entities=list(csv.DictReader((DATA/'entities.csv').open()));headers=list(entities[0]);byid={e['id']:e for e in entities};initialids=list(byid)
baseline=load(HERE/'inventory-summary.json')['inputSha256']['entities.csv'];journal_path=HERE/'changes-applied.json';previous=load(journal_path)if journal_path.exists()else{}
if digest(DATA/'entities.csv')not in [baseline,previous.get('entityOutputSha256')]:raise SystemExit('Entity CSV changed outside this research batch; inspect before applying.')
ledger=load(DATA/'entity-facts.json');sources={};facts={};products={};assessed=set();blocked=[];changes={(r['entityId'],r['field']):r for r in previous.get('changes',[])}
def decoded(e,field):return json.loads(e[field]or'[]')if field in ARRAY_FIELDS else e[field]
def set_value(e,field,value,sourceids,scope):
 old=decoded(e,field)
 if old!=value:
  key=(e['id'],field);before=changes.get(key,{}).get('before',old)
  changes[key]=dict(entityId=e['id'],field=field,before=before,after=value,sourceIds=sourceids,scope=scope)
  e[field]=json.dumps(value,ensure_ascii=False,separators=(',',':'))if field in ARRAY_FIELDS else value
for filename in FILES:
 batch=load(HERE/filename)
 for source in batch['sources']:
  if source['id']in sources:assert sources[source['id']]==source,source['id']
  sources[source['id']]=source
 blocked.extend(batch.get('blockedSources',[]))
 for entity in batch['entities']:
  eid=entity['entityId'];assert eid in byid,eid;assessed.add(eid);target=byid[eid];field_map=entity.get('fieldEvidence',{});used=set()
  for field,value in entity.get('changes',{}).items():
   assert field in ALLOWED,(eid,field)
   if field=='products'and eid not in REPLACE_PRODUCTS:continue
   evidence=field_map[field];sid=evidence['sourceIds'];assert sid and evidence.get('scope');assert all(id in sources for id in sid)
   set_value(target,field,value,sid,evidence['scope']);used.update(sid)
   fid=eid+'-'+field
   facts[fid]=dict(id=fid,entityId=eid,field=field,value=value,sourceIds=sid,reviewedOn=DATE,scope=evidence['scope'])
  for p in entity.get('productFacts',[]):
   sid=p['sourceIds'];assert sid and all(id in sources for id in sid),(eid,p);assert p.get('scope');name=p['name'];key=(eid,name.casefold());used.update(sid)
   role=p.get('role')or p.get('description');assert role,(eid,name)
   product=dict(id=eid+'-product-'+hashlib.sha256(name.encode()).hexdigest()[:12],entityId=eid,name=name,role=role,kind=p.get('kind','documented offering'),sourceIds=sid,reviewedOn=DATE,scope=p['scope'])
   for field in ['limitations','evidenceExcerpt','evidenceSourceId','availability','documentedAttributes','lifecycleStatus','releaseDate','evidenceAsOf']:
    if p.get(field):product[field]=p[field]
   if p.get('evidenceLine')or p.get('excerptStartLine'):product['evidenceLine']=p.get('evidenceLine')or p['excerptStartLine']
   if key in products:assert products[key]==product,key
   products[key]=product
  if used:
   links=list(dict.fromkeys(decoded(target,'profileSources')+[sources[id]['url']for id in sorted(used)]))
   set_value(target,'profileSources',links,sorted(used),'Source links retained alongside field/item-specific evidence; do not interpret as verification of the full profile.')
# Append documented names while retaining unreviewed legacy listings. Explicit
# corrections replace unsupported generic bundles and retain old values
# in the integration journal and Git history.
for (eid,_),product in products.items():
 if eid in REPLACE_PRODUCTS:continue
 entity=byid[eid];existing=decoded(entity,'products')
 if product['name'].casefold()not in [p.casefold()for p in existing]:
  set_value(entity,'products',existing+[product['name']],product['sourceIds'],'Add documented product/tool; other inherited listings remain individually unreviewed.')
# A combined change journal must retain evidence for every appended item.
for (eid,field),change in changes.items():
 if field=='products':
  added={x.casefold()for x in change['after']} - {x.casefold()for x in change['before']}
  item_sources={sid for (pid,_),p in products.items()if pid==eid and p['name'].casefold()in added for sid in p['sourceIds']}
  full=facts.get(eid+'-products')
  if full:item_sources.update(full['sourceIds'])
  change['sourceIds']=sorted(set(change['sourceIds'])|item_sources)
assert list(byid)==initialids and len(entities)==2038
with(DATA/'entities.csv').open('w',newline='')as f:
 writer=csv.DictWriter(f,fieldnames=headers,lineterminator='\n');writer.writeheader();writer.writerows(entities)
usedsources={sid for fact in list(facts.values())+list(products.values())for sid in fact['sourceIds']}
ledger.update(schemaVersion=1,reviewedOn=DATE,coverage='Field/item-scoped primary documentation only. Most corporate identity, headquarters, leadership, ownership and hardware portfolios remain unverified. Historical locations retain their original dates and status.',sources=[sources[id]for id in sorted(usedsources)],facts=sorted(facts.values(),key=lambda f:f['id']),products=sorted(products.values(),key=lambda f:(f['entityId'],f['name'].casefold())))
ledger['identityNotes']=[
 {'entityId':'apple-foundation-models','appliesToType':'Company','note':'The cited evidence covers Apple’s on-device model framework and SDK. This record’s company classification remains unresolved; it does not establish an independent company.'},
 {'entityId':'ibm-granite','appliesToType':'Company','note':'The cited evidence covers IBM’s Granite model family. This record’s company classification remains unresolved; it does not establish an independent company.'},
 {'entityId':'amazon-agi-lab','appliesToType':'Company','note':'The cited evidence covers Amazon Nova products and workflows. It does not establish the formal identity or full responsibilities of an organization called Amazon AGI Lab.'}
]
(DATA/'entity-facts.json').write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n')
summary=dict(reviewedOn=DATE,entityInputSha256=baseline,entityOutputSha256=digest(DATA/'entities.csv'),entityCount=len(entities),assessedEntityIds=sorted(assessed),entitiesWithFieldFacts=len(set(f['entityId']for f in facts.values())),entitiesWithProductFacts=len(set(f['entityId']for f in products.values())),entitiesWithAnyFacts=len(set(f['entityId']for f in list(facts.values())+list(products.values()))),sourceCount=len(usedsources),fieldFactCount=len(facts),productFactCount=len(products),entitiesChanged=len(set(eid for eid,_ in changes)),changes=sorted(changes.values(),key=lambda c:(c['entityId'],c['field'])),explicitProductCorrections=sorted(REPLACE_PRODUCTS),limitations='This is a scoped enrichment, not verification of every commercial company or a complete product inventory.')
journal_path.write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
# Preserve exact observed failures; do not change an unknown network allowlist.
blocked=[dict(item,domain=__import__('urllib.parse',fromlist=['urlparse']).urlparse(item['url']).hostname)for item in blocked]
for item in blocked:item['failureKind']='proxy_denied' if '403' in item.get('error','') else 'not_found' if '404' in item.get('error','') else 'other_failure'
(HERE/'blocked-sources.json').write_text(json.dumps(blocked,indent=2)+'\n')
(HERE/'required-source-domains.txt').write_text('\n'.join(sorted(set(x['domain']for x in blocked if x['domain'] and x['failureKind']=='proxy_denied')))+'\n')
print(json.dumps({k:v for k,v in summary.items()if k not in ['changes','assessedEntityIds']},indent=2))
