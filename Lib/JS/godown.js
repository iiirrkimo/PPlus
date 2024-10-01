javascript:
(async function(){
url=document.URL;
u2='https://phpcis.chshb.gov.tw/consultationMainPage/';
if (url.includes(u2)){
	registrationId=url.split('/')[url.split('/').length-1];
	furl='https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId+'&type=consultation';
	await fetch(furl, {
	  'headers': {
		'content-type': 'application/json'
	  },
	  'body': null,
	  'method': 'GET',
	}).then(response => response.text())
	  .then((response) => {
		res=JSON.parse(response);
		visitTypeCode=res.result.visitTypeCode;
		shiftId=res.result.shiftId;
		console.log(res.result.shiftId);
		furl2='https://phpcis.chshb.gov.tw/api/v1/registrations/list?clinicId=4&shiftId='+shiftId;
		fetch(furl2, {
		  'headers': {
			'content-type': 'application/json'
		  },
		  'body': null,
		  'method': 'GET',
		}).then(response => response.text())
		  .then((response) => {
			res2=JSON.parse(response);
			console.log(res2.result.length);
			find=0;
			for (i=0;i<res2.result.length;i++){
				if (res2.result[i].registrationId>registrationId && res2.result[i].visitTypeCode==visitTypeCode && res2.result[i].treatmentStatus!="3"){
					find=1;
					NregistrationId=res2.result[i].registrationId;
					break;
				}
			}
			if (find==1){
				location.href='https://phpcis.chshb.gov.tw/consultationMainPage/'+NregistrationId;
			} else {
				alert('shiftId '+shiftId+' 的 '+visitTypeCode+' 身分已到最後一筆');
			}
		}).catch(err => console.log(err));
	}).catch(err => console.log(err));
} else {
	alert('非看診頁面');
}
})();