const ORGANIZATION_TYPES=new Set(['Company','Model lab','Research lab']);
const SOFTWARE_TYPES=new Set(['Application','Agent','Framework','Model','Platform','Project','Protocol','Standard']);
const PHYSICAL_LAYERS=new Set(['materials','equipment','fabrication','compute','datacenter','robotics']);

export const ENTITY_KINDS={
 organization:{label:'Company / organization',short:'Company',symbol:'●'},
 hardware:{label:'Hardware / physical product',short:'Hardware',symbol:'■'},
 software:{label:'Software / model product',short:'Software',symbol:'◆'}
};

export function entityKind(entity){
 if(ORGANIZATION_TYPES.has(entity.type))return 'organization';
 if(SOFTWARE_TYPES.has(entity.type))return 'software';
 if(entity.cluster==='eda-ip'||entity.cluster==='robotics-software')return 'software';
 return PHYSICAL_LAYERS.has(entity.layer)?'hardware':'software';
}
