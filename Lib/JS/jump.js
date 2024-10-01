(function (){
	sid='please_change_me_1';
	xmlHttp=new XMLHttpRequest();
	URL='https://phpcis.chshb.gov.tw/api/v1/registrations/list?personalId='+sid
	xmlHttp.open( "GET", URL, false ); 
	xmlHttp.send();
	uuu=JSON.parse(xmlHttp.responseText);
	HEfind=false;
	PEDSarray=["7A","7B","7C","7D","7E","7F"]
	PEDSfind=false;
	ORALfind=false;
	retobj={};
	for (i=0;i<uuu.result.length;i++){
		reg=uuu.result[i]
		if (reg.personalId==sid ){
			if (reg.visitTypeCode=='69'){
				if (PEDSarray.includes(reg.preventionServiceCode)){
					if (!PEDSfind){
						tempobj={};
						tempobj["treatmentDate"]=reg.treatmentDate;
						tempobj["preventionServiceCode"]=reg.preventionServiceCode;
						tempobj["treatmentSeqNo"]=reg.treatmentSeqNo;
						tempobj["UURL"]='https://phpcis.chshb.gov.tw/consultationMainPage/'+reg.registrationId;
						retobj["PEDS"]=tempobj;
						PEDSfind=true;
					}
				} else {
					if (!HEfind){
						tempobj={};
						tempobj["treatmentDate"]=reg.treatmentDate;
						tempobj["preventionServiceCode"]=reg.preventionServiceCode;
						tempobj["treatmentSeqNo"]=reg.treatmentSeqNo;
						tempobj["UURL"]='https://phpcis.chshb.gov.tw/consultationMainPage/'+reg.registrationId;
						retobj["HE"]=tempobj;
						HEfind=true;
					}
				}
			} else if (reg.visitTypeCode=='6G'){
				if (!ORALfind){
					tempobj={};
					tempobj["treatmentDate"]=reg.treatmentDate;
					tempobj["preventionServiceCode"]=reg.preventionServiceCode;
					tempobj["treatmentSeqNo"]=reg.treatmentSeqNo;
					tempobj["UURL"]='https://phpcis.chshb.gov.tw/consultationMainPage/'+reg.registrationId;
					retobj["ORAL"]=tempobj;
					ORALfind=true;
				}
			}
		}
	}
	let OPD_jump="OPD_jump";
	let OPD_jumpdata=retobj
	ahkcallfunction(OPD_jump,OPD_jumpdata);
})();