(function(){
personalInfoId='please_change_me_1';
rv1d='please_change_me_2';
rv2d='please_change_me_3';
comment='please_change_me_4';
HealthRecordId='please_change_me_5';
xmlHttp=new XMLHttpRequest();
errmsg="";
suscessmsg="";
if (rv1d!="NONONO"){
	rv1dd="|"+rv1d.split('-')[1]+rv1d.split('-')[2]+"驗";
	url1='https://phpcis.chshb.gov.tw/api/v1/shifts/list?date='+rv1d+'&period=1';
	xmlHttp.open( 'GET', url1, false );
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xmlHttp.send();
	res1=xmlHttp.responseText;
	jres1=JSON.parse(res1);
	gonext=false;
	for (let i=0;i<jres1.result.length;i++){
		if (jres1.result[i].roomName=="1"){
			gonext=true;
			shiftId1=jres1.result[i].shiftId;
			break;
		}
	}
	if (gonext){
		upj1={
			personalInfoId: personalInfoId*1,
			registrationId: null,
			registrationType:3,
			reservationHealthRecordId: HealthRecordId*1,
			shiftId: shiftId1.toString(),
		}
		urlp='https://phpcis.chshb.gov.tw/api/v1/registrations/reservations/create';
		xmlHttp.open( 'POST', urlp, false );
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xmlHttp.send(JSON.stringify(upj1));
		suscessmsg+="預約抽血 "+ rv1d + "成功\n";
	} else {
		errmsg+="預約抽血日期無設定排班\n";
	}
}	else {
	rv1dd="|"
}
if (rv2d!="NONONO"){
	rv2dd="|"+rv2d.split('-')[1]+rv2d.split('-')[2]+"看";
	url2='https://phpcis.chshb.gov.tw/api/v1/shifts/list?date='+rv2d+'&period=1';
	xmlHttp.open( 'GET', url2, false );
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xmlHttp.send();
	res2=xmlHttp.responseText;
	jres2=JSON.parse(res2);
	gonext=false;
	for (let i=0;i<jres2.result.length;i++){
		if (jres2.result[i].roomName=="1"){
			gonext=true;
			shiftId2=jres2.result[i].shiftId;
			break;
		}
	}
	if (gonext){
		upj2={
			personalInfoId: personalInfoId*1,
			registrationId: null,
			registrationType:3,
			reservationHealthRecordId: HealthRecordId*1,
			shiftId: shiftId2.toString(),
		}
		urlp='https://phpcis.chshb.gov.tw/api/v1/registrations/reservations/create';
		xmlHttp.open( 'POST', urlp, false );
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xmlHttp.send(JSON.stringify(upj2));
		suscessmsg+="預約回診 "+ rv2d + "成功\n";
	} else {
		errmsg+="預約回診日期無設定排班\n";
	}
}	else {
	rv2dd="|"
}
if (comment!="NONONO"){
	newcomment=comment.substring(0,8)+rv1dd+rv2dd;
	upjc={
		personalInfoId: personalInfoId*1,
		personalTag: newcomment,
	}
	urlc='https://phpcis.chshb.gov.tw/api/v1/personal_infos/fieldUpdate';
	xmlHttp.open( 'POST', urlc, false );
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xmlHttp.send(JSON.stringify(upjc));
} 
if (errmsg!=""){
	alert(errmsg);
} else {
	if (suscessmsg!=""){
		alert(suscessmsg);
	}
}
})();