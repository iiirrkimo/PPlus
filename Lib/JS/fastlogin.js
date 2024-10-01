(function(){
curl=document.URL;
if (curl.includes('https://phpcis.chshb.gov.tw/login')){
	acc='please_change_me_1';
	pass='please_change_me_2';
	focusevent=new Event("focus", {bubbles: true});
	blurevent=new Event("blur", {bubbles: true});
	document.getElementsByName('account')[0].dispatchEvent(focusevent);
	document.getElementsByName('account')[0].value=acc;
	document.getElementsByName('account')[0].dispatchEvent(blurevent);
	document.getElementsByName('password')[0].dispatchEvent(focusevent);
	document.getElementsByName('password')[0].value=pass;
	document.getElementsByName('password')[0].dispatchEvent(blurevent);
	document.getElementsByClassName('btn login-button btn-block')[0].click();
} else {
	funcname="callchest";
	funcdata="please_change_me_3";
	let postobj={
		funcname:funcname,
		funcdata:funcdata,
	}
	window.chrome.webview.hostObjects.ahkcallfunction(JSON.stringify(postobj));
}
})();
