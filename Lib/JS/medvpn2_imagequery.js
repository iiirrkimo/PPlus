(function (){
	ClientDatastr='please_change_me_1';
	postjson={
		ClientData:ClientDatastr,
		ProcID:"IMUE0130",
	}
	theurl="https://medcloud2.nhi.gov.tw/imu/api/imuecommon/imuecommon/get-ctmri2";
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open('POST', theurl, false );
	xmlHttp.setRequestHeader('Content-Type', 'application/json, text/plain, */*');
	authorization="Bearer "+sessionStorage.token;
	xmlHttp.setRequestHeader('authorization', authorization);
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xmlHttp.send(JSON.stringify(postjson));
	res=xmlHttp.responseText;
	jres=JSON.parse(res);
	thewebsite=jres['ctmri_url'];
	windowFeatures = "width=800,height=600,scrollbars=yes";
    window.open(thewebsite, "_blank",windowFeatures);
})();