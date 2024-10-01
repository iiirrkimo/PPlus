javascript: (async function(){
	chestversion='1130910'
	title=document.querySelector("#root > header > a > h2").textContent;
	ahkuse=true;
	if (!title.includes('百寶箱')){
		await getfetch();
		(function(history){
			var pushState = history.pushState;
			history.pushState = function(state) {
				setTimeout(function() {
					if (document.getElementById('input_fasttype')){
						temptype=document.getElementById('input_fasttype').value;
					}
					createchest();
				}, 0);
				return pushState.apply(history, arguments);
			};
		})(window.history);
		temptype='';
		//escape_populanceConsultation = confirm('百寶箱版本:'+chestversion+'\n看診前是否自動跳過民眾看診首頁');
		document.querySelector("#root > header > a > h2").textContent=title+"_百寶箱v"+chestversion
		escape_populanceConsultation = true;
		createchest();
		if (document.URL.includes('https://phpcis.chshb.gov.tw/consultationMainPage/')){
			button_grabdata_handle()
		}
	} 
})();
async function getfetch(){
	if (!window.fetchIntercepted) {
		window.fetchIntercepted = true;
		const originalFetch = window.fetch;
		window.fetch = async function() {
			let response = await originalFetch.apply(this, arguments);
			let theapi = await arguments[0];
			if (theapi.includes('?')){
				apitype=theapi.split('?')[0];
			} else {
				apitype=theapi
			}
			const clonedResponse = await response.clone();
			let result = await response.text();
			if (apitype == "https://phpcis.chshb.gov.tw/api/v1/health_records/check_valid") {
				const modifiedResponseJson = {
					"code": 200,
					"message": "",
					"result": {
						"chronicReturnDate": "",
						"chronicTestDate": "",
						"isChronicReminder": false
					}
				};
				const modifiedResponse = new Response(JSON.stringify(modifiedResponseJson), {
					status: 200,
					statusText: '',
					headers: new Headers({
						'Content-Type': 'application/json'
					})
				});
				resres= modifiedResponse;
			} else if (apitype == "https://phpcis.chshb.gov.tw/api/v1/prescriptions/list") {
				const modifiedResponseJson = {
					"code": 200,
					"message": "",
					"result": {
						"1": null,
						"3": null,
						"4": null,
						"5": null,
						"6": null,
						"7": null,
						"8": null,
						"9": null,
						"10": null,
						"11": null,
						"12": null,
						"13": null,
						"14": null,
						"15": null,
						"16": null,
						"18": null
					}
				};
				const modifiedResponse = new Response(JSON.stringify(modifiedResponseJson), {
					status: 200,
					statusText: '',
					headers: new Headers({
						'Content-Type': 'application/json'
					})
				});
				let thefetch = {};
				thefetch["api"] = theapi;
				thefetch["result"] = JSON.stringify(result);
				window.chrome.webview.hostObjects.ahkgetfetch(JSON.stringify(thefetch));
				resres= modifiedResponse;
			} else {
				resres= clonedResponse;
			}
			return resres
		}
	}
}
async function fetchData(url,type,postdata) {
    try {
        const response = await fetch(url, {
            method: type,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
		if (type !== 'GET') {
			options.body = JSON.stringify(postdata);
		}
        const result = await response.text();
        return result
    } catch (error) {
        return false
    }
}
function createchest(){
	ccc=document.URL;
	//if (ahkuse){
	//	window.chrome.webview.hostObjects.ahkgeturl(ccc);
	//}
	d0='https://phpcis.chshb.gov.tw/consultationMainPage/';
	d1='https://phpcis.chshb.gov.tw/populanceRegistration';
	d2='https://phpcis.chshb.gov.tw/registration';
	d3='https://phpcis.chshb.gov.tw/registration/';
	d4='https://phpcis.chshb.gov.tw/registration/create';
	d5='https://phpcis.chshb.gov.tw/familyMedicine';
	d6='https://phpcis.chshb.gov.tw/populanceConsultation/';
	d7='https://phpcis.chshb.gov.tw/medicalRefee';
	if (document.getElementById('myDraggable')){
		document.getElementById('myDraggable').remove();
	} 
	if (ccc.includes(d0)){
		create_OPD_one();
	} else if (ccc==d1){
		create_OPD_list();
	} else if (ccc==d2){
		create_REG_list();
	} else if (ccc.includes(d3)||ccc==d4){
		create_REG_one()
	} else if (ccc==d5){
		create_FM();
	} else if (ccc.includes(d6)){
		if (escape_populanceConsultation){
			document.getElementsByClassName('commonBtn btn btn-primary')[1].click();
		}
	} else if (ccc==d7){
		create_Countmonth();
	}
}

function ahkcallfunction(funcname,funcdata){
	let postobj={
		funcname:funcname,
		funcdata:funcdata,
	}
	if (ahkuse){
		window.chrome.webview.hostObjects.ahkcallfunction(JSON.stringify(postobj));
	} else {
		console.log(postobj);
	}
}
function crebutton(name,xx,yy,ww,hh){
	let tempbutton = document.createElement('button');
	tempbutton.textContent=name;
	tempbutton.className='btn btn-primary';
	tempbutton.style.padding ='0px';
	tempbutton.style.left = xx+'px';
	tempbutton.style.top = yy+'px';
	tempbutton.style.width = ww+'px';
	tempbutton.style.height = hh+'px';
	tempbutton.style.position = 'absolute';
	return tempbutton
}
function crespan(textline,xx,yy,ww,hh){
	let tempsapn = document.createElement('span');
	tempsapn.textContent=textline;
	tempsapn.style.left = xx+'px';
	tempsapn.style.top = yy+'px';
	tempsapn.style.width = ww+'px';
	tempsapn.style.height = hh+'px';
	tempsapn.style.position = 'absolute';
	tempsapn.style.textAlign='center';
	tempsapn.style.lineHeight=hh+'px';
	return tempsapn
}
function creinput(inputid,xx,yy,ww,hh){
	let tempinput = document.createElement('input');
	tempinput.id=inputid;
	tempinput.style.width = ww+'px';
	tempinput.style.height = hh+'px';
	tempinput.style.left = xx+'px';
	tempinput.style.top = yy+'px';
	tempinput.style.position = 'absolute';
	tempinput.style.textAlign='center';
	return tempinput
}
function button_preexam_handle(){
	ordertbbody=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0].children[1];
	ordertbhead=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0].children[0];
	for (let i=0;i<ordertbhead.rows[0].cells.length;i++){
		if (ordertbhead.rows[0].cells[i].textContent=='預'){
			preindex=i;
		} else if (ordertbhead.rows[0].cells[i].textContent=='申報代碼'){
			applyindex=i;
		} else if (ordertbhead.rows[0].cells[i].textContent=='自付'){
			applytype=i;
		} 
	}
	changeevent=new Event('change', {bubbles: true});
	for (i=0;i<ordertbbody.rows.length;i++){
		if (ordertbbody.rows[i].cells[preindex].children[0]){
			if (!ordertbbody.rows[i].cells[preindex].children[0].checked){
				if (!ordertbbody.rows[i].cells[applyindex].textContent.includes("P")){
					ordertbbody.rows[i].cells[preindex].children[0].click();
				}
			}
		}
	}

	sws=document.querySelectorAll('.modal');
	if (sws.length>0){
		for (let i=0;i<sws.length;i++){
			if (sws[i].textContent.includes("預開檢驗設定")){
				autoselectpreexam(sws[i]);
				break;
			}
		}
	} else {
		document.querySelector("#root > div.wrapper > main > div > div:nth-child(27) > div > div > form > div > div.btn-group > button:nth-child(1)").click();
	}
}
function autoselectpreexam(taw){
	items=taw.querySelectorAll('select');
	changeevent=new Event('change', {bubbles: true});
	daysitem=items[0];
	if (daysitem.value!=77){
		daysitem.value=77;
		daysitem.dispatchEvent(changeevent);
	} else {
		shiftitem=items[2];
		if (shiftitem.options.length>1){
			for (let j=0;j<shiftitem.options.length;j++){
				if (shiftitem.options[j].textContent.includes('1')){
					shiftitem.options[j].selected=true;
					shiftitem.dispatchEvent(changeevent);
					break;
				}
			}
		}
		typeitem=items[3];
		typeitem.value=0;
		typeitem.dispatchEvent(changeevent);
		if (!taw.querySelectorAll("button[type='submit']")[0].disabled){
			taw.querySelectorAll("button[type='submit']")[0].click();
		}
	}
}
function day77(){
	currentDate = new Date();
	futureDate = new Date();
	futureDate.setDate(currentDate.getDate() + 77);
	const year = futureDate.getFullYear();
	const month = (futureDate.getMonth() + 1).toString().padStart(2, '0');
	const day = futureDate.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`
}
function httpGet(Url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", Url, false );
	xmlHttp.send( null );
	return xmlHttp.responseText;
}
async function button_grabdata_handle(){
	cc=document.URL;
	d1='https://phpcis.chshb.gov.tw/consultationMainPage' //門診畫面
	if (cc.includes(d1)){    //門診內
		document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(7) > div").textContent='結束日';
		document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(10) > div").textContent='起日';
		document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(12) > div > div > label").textContent='連處';
		uu=document.getElementsByClassName('col-xl-5 col-lg-5')[2];
		if (document.getElementsByClassName('badge badge-secondary').length==0){
			alert('非2.0掛號');
		}
		inputarea=uu.querySelectorAll('textarea');
		inputspace=uu.getElementsByClassName('line');
		inputspace[0].style.height='10rem';
		inputarea[0].rows=5;
		inputspace[1].style.height='12.5rem';
		inputarea[1].rows=5;
		ggg=document.getElementsByClassName('line prescription-diagnosis-area')[0];
		ggg.style.height='23.1rem';
		ggg.children[2].style.height='17vh'
		ggg.children[2].children[0].style.height='17vh'
		prevention=document.getElementById('prevention');
		if (prevention==null){
			prevention = document.createElement('div');
			prevention.setAttribute('id', 'prevention');
			title = document.createTextNode('預防保健項目');
			prevention.style.border = '1px solid black';
			prevention.style.width = '500px';
			prevention.appendChild(title);
			prevention_L1 = document.createElement('div');
			prevention_L1.setAttribute('id', 'prevention_L1');
			prevention.appendChild(prevention_L1);
			prevention_L2 = document.createElement('div');
			prevention_L2.setAttribute('id', 'prevention_L2');
			prevention.appendChild(prevention_L2);
			prevention_L3 = document.createElement('div');
			prevention_L3.setAttribute('id', 'prevention_L3');
			prevention.appendChild(prevention_L3);
			prevention_L4 = document.createElement('div');
			prevention_L4.setAttribute('id', 'prevention_L4');
			prevention.appendChild(prevention_L4);
			prevention_L5 = document.createElement('div');
			prevention_L5.setAttribute('id', 'prevention_L5');
			prevention.appendChild(prevention_L5);
			ggg.appendChild(prevention);
			plan = document.createElement('div');
			plan.setAttribute('id', 'plan');
			plan.style.border = '1px solid black';
			plan.style.width = '375px';
			plantitle = document.createTextNode('試辦計畫');
			plan.appendChild(plantitle);
			plan_L1 = document.createElement('div');
			plan_L1.setAttribute('id', 'plan_L1');
			plan.appendChild(plan_L1);
			plan_L2 = document.createElement('div');
			plan_L2.setAttribute('id', 'plan_L2');
			plan.appendChild(plan_L2);
			plan_L3 = document.createElement('div');
			plan_L3.setAttribute('id', 'plan_L3');
			plan.appendChild(plan_L3);
			horizontalContainer = document.createElement('div');
			horizontalContainer.style.display = 'flex';
			horizontalContainer.appendChild(prevention);
			horizontalContainer.appendChild(plan);
			ggg.appendChild(horizontalContainer);
		} 
		registrationId=cc.split('/')[cc.split('/').length-1];
		furl='https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId+'&type=consultation';
		aaa=httpGet(furl);
		res=JSON.parse(aaa);
		personalInfoId=res.result.personalInfoId;
		age=res.result.age;
		gender=res.result.gender;
		name=res.result.name;
		personalId=res.result.personalId;
		let OPD_INFO="OPD_INFO";
		let OPD_INFOdata=aaa
		
		hurl='https://phpcis.chshb.gov.tw/api/v1/health_records/list?personalInfoId='+personalInfoId;
		hhh=httpGet(hurl);
		reshhh=JSON.parse(hhh);
		reshhh.personalId=personalId;
		reshhh.name=name;
		reshhh.personalInfoId=personalInfoId;
		let OPD_HISTORY="OPD_HISTORY";
		let OPD_HISTORYdata=JSON.stringify(reshhh);
		
		
		furl2='https://phpcis.chshb.gov.tw/api/v1/personal_infos/preventions_histories/list?personalInfoId='+personalInfoId;
		bbb=httpGet(furl2);
		res2=JSON.parse(bbb);
		HE=['HE'];
		FO=['FO'];
		OR=['OR'];
		PA=['PA'];
		MA=['MA'];
		for (i=1;i<=res2.result.length;i++){
			if (res2.result[res2.result.length-i].preventionTag=='02'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					HE.splice(HE.length-1,1);
				} else {
					HE.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='03'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					PA.splice(PA.length-1,1);
				} else {
					PA.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='06'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					MA.splice(MA.length-1,1);
				} else {
					MA.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='07'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					FO.splice(FO.length-1,1);
				} else {
					FO.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='08'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					OR.splice(OR.length-1,1);
				} else {
					OR.push(res2.result[res2.result.length-i]);
				}
			}
		}
		nowy=new Date().getFullYear();
		if (age>=65){
			if (HE.length>1){
				LHE=HE[HE.length-1].treatmentDate.split('-')[0];
				if (nowy-LHE>=1){
					HEC='O , 65歲1年1次';
				} else {
					HEC='X , 65歲未滿1年';
				}
				theclinic=HE[HE.length-1].clinicName;
				theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
				if (theclinic.length>12){
					theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
				}
				HEC=HEC+','+theclinic+'('+HE[HE.length-1].treatmentDate+')';
			} else {
				HEC='O , 65歲1年1次';
			}
		} else if (age>=40 && age<65){
			if (HE.length>1){
				LHE=HE[HE.length-1].treatmentDate.split('-')[0];
				if (nowy-LHE>=3){
					HEC='O , 45-64歲3年1次';
				} else {
					HEC='X , 45-64歲未滿3年';
				}
			} else {
				HEC='O , 45-65歲3年1次';
			}
		} else {
			HEC='X , 未滿40歲不可成健';
		}
		if (gender=='2'){
			if (age>=30){
				if (PA.length>1){
					LPA=PA[PA.length-1].treatmentDate.split('-')[0];
					if (nowy-LPA>=6){
						PAC='O , 曾抹且6年未抹';
					} else if (nowy-LPA>=3 && nowy-LPA<6){
						PAC='O , 曾抹且3年未抹';
					} else if (nowy-LPA>=1){
						PAC='O , 曾抹且可抹';
					} else if (nowy-LPA<1){
						PAC='X , 曾抹未滿1年';
					} 
					theclinic=PA[PA.length-1].clinicName;
					theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
					if (theclinic.length>12){
						theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
					}
					PAC=PAC+','+theclinic+'('+PA[PA.length-1].treatmentDate+')';
				} else {
					PAC='O , 不曾抹(首篩)';
				}
			} else {
				PAC='X , 未滿30歲';
			}
		} else {
			PAC='X , 需女性';
		}
		if (gender=='2'){
			if (age>=45 && age<70){
				if (MA.length>1){
					LMA=MA[MA.length-1].treatmentDate.split('-')[0];
					if (nowy-LMA>=2){
						MAC='O , 可乳攝';
					} else {
						MAC='X , 未滿2年';
					}
					theclinic=MA[MA.length-1].clinicName;
					theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
					if (theclinic.length>12){
						theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
					}
					MAC=MAC+','+theclinic+'('+MA[MA.length-1].treatmentDate+')';
				} else {
					MAC='O , 不曾乳攝(首篩)';
				}
			} else if (age>=70){
				MAC='X , 超過70歲';
			} else {
				MAC='X , 未滿45歲';
			}
		} else {
			MAC='X , 需女性';
		}
		if (age>=50 && age<75){
			if (FO.length>1){
				LFO=FO[FO.length-1].treatmentDate.split('-')[0];
				if (nowy-LFO>=2){
					FOC='O , 可FOBT';
				} else {
					FOC='X , 未滿2年';
				}
				theclinic=FO[FO.length-1].clinicName;
				theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
				if (theclinic.length>12){
					theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
				}
				FOC=FOC+','+theclinic+'('+FO[FO.length-1].treatmentDate+')';
			} else {
				FOC='O , 不曾FOBT(首篩)';
			}
		} else if (age>=75){
			FOC='X , 超過75歲';
		} else {
			FOC='X , 未滿50歲';
		}
		if (age>=30){
			if (OR.length>1){
				LOR=OR[OR.length-1].treatmentDate.split('-')[0];
				if (nowy-LOR>=2){
					ORC='O , 有菸檳史可';
				} else {
					ORC='X , 間隔未滿2年';
				}
				theclinic=OR[OR.length-1].clinicName;
				theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
				if (theclinic.length>12){
					theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
				}
				ORC=ORC+','+theclinic+'('+OR[OR.length-1].treatmentDate+')';
			} else {
				ORC='O , 有菸檳史可(首篩)';
			}
		} else {
			ORC='X , 未滿30歲';
		}
		msg2='\n成健: '+HEC+'\n腸篩: '+FOC+'\n子抹: '+PAC+'\n乳攝: '+MAC+'\n口篩: '+ORC;
		prevention_L1=document.getElementById('prevention_L1');
		prevention_L1.textContent='成健: '+HEC;
		prevention_L2=document.getElementById('prevention_L2');
		prevention_L2.textContent='腸篩: '+FOC;
		prevention_L3=document.getElementById('prevention_L3');
		prevention_L3.textContent='子抹: '+PAC;
		prevention_L4=document.getElementById('prevention_L4');
		prevention_L4.textContent='乳攝: '+MAC;	
		prevention_L5=document.getElementById('prevention_L5');
		prevention_L5.textContent='口篩: '+ORC;
		furl3='https://phpcis.chshb.gov.tw/api/v1/personal_infos/chronic_cares_histories/list?personalInfoId='+personalInfoId;
		ccc=httpGet(furl3);
		res3=JSON.parse(ccc);
		DKD=[];
		DM=['DM'];
		yearDMC=0;
		yearDM1=0;
		CKD=['CKD'];
		DKDC='DKD: 無';
		DMC='DM: 無';
		CKDC='CKD: 無';
		cc=res3.result.chronicCares;
		for (i=1;i<cc.length+1;i++){
			if (cc[cc.length-i].chronicCareType=='1'){
				if (cc[cc.length-i].chronicCareCode=='P1407C' || cc[cc.length-i].chronicCareCode=='P1409C' || cc[cc.length-i].chronicCareCode=='P1411C'){
					DM=['DM'];
				}
				yearDM2=cc[cc.length-i].treatmentDate.split('-')[0];
				if (yearDM1==yearDM2){
					yearDMC=yearDMC+1;
				} else {
					yearDMC=1;
					yearDM1=yearDM2;
				}
				DM.push(cc[cc.length-i]);
			} else if (cc[cc.length-i].chronicCareType=='2'){
				if (cc[cc.length-i].chronicCareCode=='P4301C'){
					CKD=['CKD'];
				} 
				CKD.push(cc[cc.length-i]);
			} else if (cc[cc.length-i].chronicCareType=='3'){
				if (DKD.length==0){
					DKD=DM;
				}
				yearDM2=cc[cc.length-i].treatmentDate.split('-')[0]
				if (yearDM1==yearDM2){
					yearDMC=yearDMC+1;
				} else {
					yearDMC=1;
					yearDM1=yearDM2;
				}
				if (cc[cc.length-i].chronicCareCode=='P7002C'){
					DKD=['DKD'];
				}
				DKD.push(cc[cc.length-i]);					
			}
		}
		if (DKD.length>1){
			treatmentDate=DKD[DKD.length-1].treatmentDate
			date_1=new Date(treatmentDate);
			date_2=new Date(date_1.getTime()+77*1000*3600*24);
			mky=date_2.getUTCFullYear()-1911;
			mm0=date_2.getUTCMonth();
			mm0+=1;
			mkm=('00'+mm0).substring(('00'+mm0).length-2,('00'+mm0).length);
			dd0=date_2.getUTCDate();
			mkd=('00'+dd0).substring(('00'+dd0).length-2,('00'+dd0).length);
			mkdd=mky+mkm+mkd;
			now=new Date();
			if (yearDMC<4){
				if (now>=date_2){
					DKDC='DKD: O, 已申報'+yearDMC+'次,';
				} else {
					DKDC='DKD: X, 已申報'+yearDMC+'次,';
				}
				if (DKD.length==5){
					DKDC=DKDC+mkdd+'後可申報年度P7002C';
				} else {
					DKDC=DKDC+mkdd+'後可申報追蹤P7001C';
				}
			} else {
				DKDC='('+yearDMC+')DKD: X, 今年已申報4次';
			}
			DMC='DM: X, 已轉DKD';
			CKDC='CKD: X, 已轉DKD';
		} else {
			if (DM.length>1){
				treatmentDate=DM[DM.length-1].treatmentDate;
				if (DM[DM.length-1].chronicCareCode=='P1410C' || DM[DM.length-1].chronicCareCode=='P1411C'){
					DMtype=2;
				} else {
					DMtype=1;
				}
				date_1=new Date(treatmentDate);
				date_2=new Date(date_1.getTime()+77*1000*3600*24);
				mky=date_2.getUTCFullYear()-1911;
				mm0=date_2.getUTCMonth();
				mm0+=1;
				mkm=('00'+mm0).substring(('00'+mm0).length-2,('00'+mm0).length);
				dd0=date_2.getUTCDate();
				mkd=('00'+dd0).substring(('00'+dd0).length-2,('00'+dd0).length);
				mkdd=mky+mkm+mkd;
				now=new Date();
				if (yearDMC<4){
					if (now>=date_2){
						DMC='DM: O, 已申報'+yearDMC+'次,';
					} else {
						DMC='DM: X, 已申報'+yearDMC+'次,';
					}
					if (DM.length==5){
						if (DMtype=='1'){
							DMC=DMC+mkdd+'後可申報一階年度P1409C';
						} else {
							DMC=DMC+mkdd+'後可申報二階年度P1411C';
						}
					} else {
						if (DMtype=='1'){
							DMC=DMC+mkdd+'後可申報一階追蹤P1408C';
						} else {
							DMC=DMC+mkdd+'後可申報二階追蹤P1410C';
						}
					}
				} else {
					DMC='('+yearDMC+')DM: X ,今年已申報4次';
				}
			}
			if (CKD.length>1){
				treatmentDate=CKD[CKD.length-1].treatmentDate;
				date_1=new Date(treatmentDate);
				date_2=new Date(date_1.getTime()+161*1000*3600*24);
				mky=date_2.getUTCFullYear()-1911;
				mm0=date_2.getUTCMonth();
				mm0+=1;
				mkm=('00'+mm0).substring(('00'+mm0).length-2,('00'+mm0).length);
				dd0=date_2.getUTCDate();
				mkd=('00'+dd0).substring(('00'+dd0).length-2,('00'+dd0).length);
				mkdd=mky+mkm+mkd;
				now=new Date();
				if (now>=date_2){
					CKDC='CKD: O,'+mkdd+'後可申報';
				} else {
					CKDC='CKD: X,'+mkdd+'後可申報';
				}
			}
		}	
		plan_L1=document.getElementById('plan_L1');
		plan_L1.textContent=DKDC;
		plan_L2=document.getElementById('plan_L2');
		plan_L2.textContent=DMC;
		plan_L3=document.getElementById('plan_L3');
		plan_L3.textContent=CKDC;
		var ppp = document.querySelector("body > div.fade.modal.show > div > div"); //成健
		var zzz =document.querySelector("#shareId").value;
		find=0
		tb=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0];
		tbl=tb.rows.length;
		for (i=1;i<tbl;i++){
			if (tb.rows[i].cells[24].innerText=='01036C'){
				find=1;
				break;
			} 
		}
		if (ppp!==null){   	// 成健
			GEN=document.getElementsByClassName('consultationMainPage__value')[10].textContent;
			bb=document.getElementsByClassName('consultationMainPage__value')[6].textContent;
			bby=bb.substring(0,4);
			yyyy=new Date().getFullYear();
			age=yyyy-bby;
			vd0=document.getElementsByClassName('consultationMainPage__value')[27].value;
			vd=(vd0.split(' ')[1].split('-')[0]-1911)+"/"+vd0.split(' ')[1].split('-')[1]+"/"+vd0.split(' ')[1].split('-')[2];
			P_ID=document.getElementsByClassName('consultationMainPage__value')[2].textContent;
			P_NAME=document.getElementsByClassName('consultationMainPage__value')[4].textContent;
			yyy='000'+(bb.split('-')[0]-1911);
			P_BIR=yyy.substring(yyy.length-3,yyy.length)+"/"+bb.split('-')[1]+"/"+bb.split('-')[2];
			P_S=4
			if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").checked){
				P_S=0;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(2)").checked){
				P_S=1;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(3)").checked){
				P_S=2;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(4)").checked){
				P_S=3;
			}
			if (P_S==4){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").click();
				P_S=0;
			}
			if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").checked){
				P_B=0;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(2)").checked){
				P_B=1;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(3)").checked){
				P_B=2;
			}
			P_HTN=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(1)").checked;
			if (P_HTN){
				PP_HTN=1;
			} else {
				PP_HTN=0;
			}
			P_DM=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(2)").checked;
			if (P_DM){
				PP_DM=1;
			} else {
				PP_DM=0;
			}
			P_LIP=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(3)").checked;
			if (P_LIP){
				PP_LIP=1;
			} else {
				PP_LIP=0;
			}
			P_CAD=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(4)").checked;
			if (P_CAD){
				PP_CAD=1;
			} else {
				PP_CAD=0;
			}
			P_CVA=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(5)").checked;
			if (P_CVA){
				PP_CVA=1;
			} else {
				PP_CVA=0;
			}
			P_CKD=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(1)").checked;
			if (P_CKD){
				PP_CKD=1;
			} else {
				PP_CKD=0;
			}
			P_HBV=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(2)").checked;
			P_HCV=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(3)").checked;
			P_PSY=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(4)").checked;
			P_CA=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(5)").checked;
			P_COUGH=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(16) > input[type=checkbox]:nth-child(3)").checked;
			P_D1=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(17) > input[type=checkbox]:nth-child(3)").checked;
			P_D2=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(18) > input[type=checkbox]:nth-child(3)").checked;		
			H_smoke=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").checked;
			H_drink=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(11) > input[type=checkbox]:nth-child(1)").checked;
			H_betel=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").checked;
			H_exercise=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(15) > input[type=checkbox]:nth-child(3)").checked;
			PE_height=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(2) > input[type=number]:nth-child(1)").value;
			PE_weight=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(2) > input[type=number]:nth-child(3)").value;
			PE_SBP=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(3) > input[type=number]:nth-child(1)").value;
			PE_DBP=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(3) > input[type=number]:nth-child(2)").value;
			PE_WC=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(3) > input[type=number]:nth-child(4)").value;
			PE_BMI=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(4) > input[type=number]").value;
			PE_VR1=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(6) > input[type=number]:nth-child(2)").value;
			PE_VL1=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(6) > input[type=number]:nth-child(4)").value;
			PE_VR2=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(7) > input[type=number]:nth-child(2)").value;
			PE_VL2=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(7) > input[type=number]:nth-child(4)").value;
			PE_OR1=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(10) > input[type=checkbox]:nth-child(3)").checked;
			PE_OR2=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(10) > input[type=checkbox]:nth-child(4)").checked;
			L_UP=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(3) > input[type=string]").value;
			L_AC=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(5) > input[type=number]").value;
			L_TC=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(6) > input[type=number]").value;
			L_TG=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(7) > input[type=number]").value;
			L_HDL=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(8) > input[type=number]").value;
			L_LDL=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(9) > input[type=number]").value;
			L_GOT=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(11) > input[type=number]").value;
			L_GPT=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(12) > input[type=number]").value;
			L_CRE=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(13) > input[type=number]").value;
			L_GFR=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(14) > input[type=number]").value;
			L_BN=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(15) > input[type=checkbox]:nth-child(2)").checked;
			L_BP=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(15) > input[type=checkbox]:nth-child(3)").checked;
			L_NB=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(15) > input[type=checkbox]:nth-child(4)").checked;
			L_CN=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(16) > input[type=checkbox]:nth-child(2)").checked;
			L_CP=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(16) > input[type=checkbox]:nth-child(3)").checked;
			L_NC=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(16) > input[type=checkbox]:nth-child(4)").checked;
			S_smoke=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(1)").checked;
			S_dring=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(2)").checked;
			S_betel=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(3)").checked;
			S_exer=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(4)").checked;
			S_bw=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(1)").checked;
			S_diet=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(2)").checked;
			S_tra=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(3)").checked;
			S_oral=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(4)").checked;
			S_BN=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(1)").checked;
			S_BP=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(2)").checked;
			S_NB=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(3)").checked;
			S_CN=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").checked;
			S_CP=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(2)").checked;
			S_NC=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(3)").checked;
			if (L_BN){
				HBV_status=0;
			} else if (L_BP){
				HBV_status=1;
			} else if (L_NB){
				HBV_status=2;
			}
			if (L_CN){
				HCV_status=0;
			} else if (L_CP){
				HCV_status=1;
			} else if (L_NC){
				HCV_status=2;
			}
			
			if (H_smoke==S_smoke){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(1)").click();
			}
			if (H_drink==S_dring){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(2)").click();
			}
			if (H_betel==S_betel){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(3)").click();
			}
			if (H_exercise==S_exer){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(4)").click();
			}
			if ((PE_BMI>24 || (GEN.includes('女') && PE_WC>80) || (GEN.includes('男') && PE_WC>90)) !== S_bw ){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(1)").click();
			}
			if (S_diet==false){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(2)").click();
			}
			if ((P_PSY==true || P_CVA==true || (PE_VR1<0.5 && PE_VR2 <0.5 && PE_VL1<0.5 && PE_VL2<0.5)) !== S_tra){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(3)").click();
			}
			if ((PE_OR1==true || PE_OR2==true) !==S_oral){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(4)").click();
			}
			if (P_HTN==true || PE_SBP>179 || PE_DBP>119){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(6)").click();
			} else if (PE_SBP>159 || PE_DBP>109){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(5)").click();
			} else if (PE_SBP>134 || PE_DBP>84){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(1)").click();
			}
			if (P_DM==true || L_AC>199){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(6)").click();
			} else if (L_AC>125){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(5)").click();
			} else if (L_AC>100){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(1)").click();
			}
			if (P_LIP==true || ((P_DM==true || P_CAD==true || P_CVA==true)&& L_LDL>100) || L_TG>400){
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(6)').click();
			} else if (L_LDL>190 || (P_HTN==true && L_LDL>160)){
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(5)').click();
			} else if (L_LDL>130 || L_TG>150 || L_TC>200 ||(GEN.includes('女') && L_HDL<50) || (GEN.includes('男') && L_HDL<40)){
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(2)').click();
			} else {
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(1)').click();
			}
			if (P_CKD==true){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(6)").click();
			} else if (L_GFR<60 && L_UP>15){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(5)").click();
			} else if (L_GFR<60 || L_UP>15){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_GOT>200 || L_GPT>200){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(6)").click();
			} else if ((P_HBV==true || P_HCV==true) && (L_GOT>40 || L_GPT>40)){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(5)").click();
			} else if (P_HBV==true || P_HCV==true || L_GOT>40 || L_GPT>40){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(1)").click();
			}
			meta=0;
			if(L_AC>99 || P_DM==true){
				meta=meta+1;
			}
			if(L_TG>149 || P_LIP==true){
				meta=meta+1;
			}
			if(PE_SBP>129 || PE_DBP>84 || P_HTN==true){
				meta=meta+1;
			}
			if ((GEN.includes('女') && PE_WC>79) || (GEN.includes('男') && PE_WC>89)){
				meta=meta+1;
			}
			if ((GEN.includes('女') && L_HDL<50) || (GEN.includes('男') && L_HDL<40) || P_LIP==true){
				meta=meta+1;
			}
			if ((P_HTN==true || P_DM==true || P_LIP==true) && meta>2){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(6)").click();
			} else if (meta >2){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(5)").click();
			} else if (meta >0){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_BN!==S_BN){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_BP!==S_BP){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(2)").click();
			}
			if (L_NB!==S_NB){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(3)").click();
			}
			if (L_CN!==S_CN){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_CP!==S_CP){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(2)").click();
			}
			if (L_NC!==S_NC){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(3)").click();
			}
			if (P_COUGH==true){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(14) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(14) > input[type=checkbox]:nth-child(1)").click();
			}
			if (P_D1==true || P_D2==true){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(15) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(15) > input[type=checkbox]:nth-child(1)").click();
			}
			document.querySelector("#uncontrolled-tab-example-tab-tab4").click();
			let OPD_HE="OPD_HE";
			let OPD_HEdata={
				visitdata:vd,
				personalid:P_ID,
				name:P_NAME,
				birth:P_BIR,
				gender:GEN,
				smoke:P_S,
				betel:P_B,
				height:PE_height,
				weight:PE_weight,
				bmi:PE_BMI,
				waist:PE_WC,
				sbp:PE_SBP,
				dbp:PE_DBP,
				PP_DM:PP_DM,
				PP_HTN:PP_HTN,
				PP_CAD:PP_CAD,
				PP_LIP:PP_LIP,
				PP_CKD:PP_CKD,
				L_AC:L_AC,
				L_TC:L_TC,
				L_TG:L_TG,
				L_HDL:L_HDL,
				L_LDL:L_LDL,
				L_CRE:L_CRE,
				L_GFR:L_GFR,
				L_UP:L_UP,
				L_GOT:L_GOT,
				L_GPT:L_GPT,
				L_HBV:HBV_status,
				L_HCV:HCV_status,
				metabolic:meta,					
			};
			await ahkcallfunction(OPD_HE,JSON.stringify(OPD_HEdata));
		} 
		if (zzz==31){   ///戒菸
			s1 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(4) > div").innerText;
			s2 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(2) > div").innerText;
			s3 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(6) > div").innerText;
			yy=s3.substring(0,4);
			yy-=1911;
			yy='000'+yy;
			yy=yy.substring(yy.length-3);
			mm=s3.substring(5,7);
			dd=s3.substring(8,10);
			s3=yy+'/'+mm+'/'+dd;
			s4 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(8) > div > div:nth-child(1) > input").value;
			As4=s4.split(" ");
			AAs4=As4[1].split("-");
			yy=AAs4[0]-1911;
			mm=AAs4[1];
			dd=AAs4[2];
			s4=yy+'/'+mm+'/'+dd;
			table = document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0];
			tot=table.rows.length;
			for (i=0;i<table.rows[0].cells.length;i++){
				if (table.rows[0].cells[i].textContent=='天數'){
					cdays=i;
				} else if (table.rows[0].cells[i].textContent=='合計'){
					camount=i;
				}else if (table.rows[0].cells[i].textContent=='申報代碼'){
					ccode=i;
					break;
				}
			}
			for (i=1;i<tot;i++){
				try { 
					d = table.rows[i].cells[cdays].children[0].children[0].value;
					if (d!=""){
						s5=d/7;
						break;
					}
				} catch(e) {
				}
			}
			s6=[];
			for (i=1;i<tot;i++){
				try { 
					d = table.rows[i].cells[ccode].textContent;
					if (d!="E1027C" && d!="E1022C"){
					e = table.rows[i].cells[camount].children[0].children[0].value;
					let tempdrug={
						code:d,
						amount:e,
					}
					s6.push(tempdrug);
					}
				} catch(e) {
				}
			}
			let OPD_SMOKE="OPD_SMOKE";
			let OPD_SMOKEdata={
				name:s1,
				personalid:s2,
				birth:s3,
				visitdate:s4,
				week:s5,
				drug:s6,
			}
			await ahkcallfunction(OPD_SMOKE,JSON.stringify(OPD_SMOKEdata));
		} 
		if (find==1){	//轉診
			id=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(2) > div").innerText;
			name=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(4) > div").innerText;
			bir0=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(6) > div").innerText;
			bir=(('000'+(bir0.split('-')[0]-1911)).substring(('000'+(bir0.split('-')[0]-1911)).length-3))+"/"+bir0.split('-')[1]+"/"+bir0.split('-')[2];
			sss=uu.querySelectorAll('textarea')[0].value;
			ooo=uu.querySelectorAll('textarea')[1].value;;
			icd=document.getElementsByClassName('line prescription-diagnosis-area')[0].children[2].children[0].children[0].children[0].rows[1].cells[1].innerText;
			icd=icd.replaceAll('.','');
			icd=icd.toUpperCase();
			let OPD_TRANS="OPD_TRANS";
			let OPD_TRANSdata={
				name:name,
				personalid:id,
				birth:bir,
				cc:sss,
				pe:ooo,
				icd:icd,
			}
			await ahkcallfunction(OPD_TRANS,JSON.stringify(OPD_TRANS));
		} 
		await ahkcallfunction(OPD_INFO,OPD_INFOdata);
		await ahkcallfunction(OPD_HISTORY,OPD_HISTORYdata);
	} else {
		alert('請在看診頁面使用');
	}
}
function button_medvpn_handle(){
	let funcname='medvpn2';
	let funcdata='';
	ahkcallfunction(funcname,funcdata);
	console.log(funcname);
}
function create_OPD_one(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	
	button_preexam =crebutton('預開檢驗',xx,yy,ww,hh);
	button_preexam.className='btn btn-primary';
	button_preexam.addEventListener('click', button_preexam_handle);
	myDraggable.appendChild(button_preexam);
	xx+=ww+ii
	button_grabdata =crebutton('抓個案',xx,yy,ww,hh);
	button_grabdata.className='btn btn-primary';
	button_grabdata.addEventListener('click', button_grabdata_handle);
	myDraggable.appendChild(button_grabdata);
	xx+=ww+ii
	button_medvpn =crebutton('雲端整合',xx,yy,ww,hh);
	button_medvpn.className='btn btn-primary';
	button_medvpn.addEventListener('click', button_medvpn_handle);
	myDraggable.appendChild(button_medvpn);
	xx+=ww+ii
	button_niis =crebutton('NIIS',xx,yy,ww,hh);
	button_niis.className='btn btn-primary';
	//button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_niis);
	xx+=ww+ii
	button_question =crebutton('完成問卷',xx,yy,ww,hh);
	button_question.className='btn btn-primary';
	//button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_question);
	xx+=ww+ii
	button_drugpic =crebutton('藥品圖片',xx,yy,ww,hh);
	button_drugpic.className='btn btn-primary';
	//button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_drugpic);
	xx+=ww+ii
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_OPD_list(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	
	button_reflash =crebutton('更新列表',xx,yy,ww,hh);
	button_reflash.className='btn btn-primary';
	//button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_reflash);
	xx+=ww+ii
	button_reflash =crebutton('列印處方',xx,yy,ww,hh);
	button_reflash.className='btn btn-primary';
	//button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_reflash);
	xx+=ww+ii
	button_autocomplete =  crebutton('批次完成',xx,yy,ww,hh);
	button_autocomplete.className='btn btn-primary';
	//button_autocomplete.addEventListener('click', button_autocomplete_handle);
	myDraggable.appendChild(button_autocomplete);
	xx+=ww+ii
	button_autocompletev2 =crebutton('標準身分',xx,yy,ww,hh);
	button_autocompletev2.className='btn btn-primary';
	//button_autocompletev2.addEventListener('click', button_autocompletev2_handle);
	myDraggable.appendChild(button_autocompletev2);
	xx+=ww+ii
	button_autocompletesingle =crebutton('標準個案',xx,yy,ww,hh);
	button_autocompletesingle.className='btn btn-primary';
	//button_autocompletesingle.addEventListener('click', button_autocompletesingle_handle);
	myDraggable.appendChild(button_autocompletesingle);
	xx+=ww+ii
	button_niis = crebutton('NIIS',xx,yy,ww,hh);
	button_niis.className='btn btn-primary';
	//button_changenumber.addEventListener('click', button_changenumber_handle);
	myDraggable.appendChild(button_niis);
	xx+=ww+ii
	button_medvpn = crebutton('雲端整合',xx,yy,ww,hh);
	button_medvpn.className='btn btn-primary';
	//button_changenumber.addEventListener('click', button_changenumber_handle);
	myDraggable.appendChild(button_medvpn);
	xx+=ww+ii
	button_listdelete = crebutton('快速刪除',xx,yy,ww,hh);
	button_listdelete.className='btn btn-danger';
	//button_listdelete.addEventListener('click', button_listdelete_handle);
	myDraggable.appendChild(button_listdelete);
	xx+=ww+ii
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_REG_list(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	span_fasttype = crespan('身分別',xx,yy,ww,hh);
	myDraggable.appendChild(span_fasttype);
	xx+=ww+ii;
	input_fasttype = creinput('input_fasttype',xx,yy,ww,hh);
	if (temptype){
		input_fasttype.value=temptype
	}
	myDraggable.appendChild(input_fasttype);
	xx+=ww+ii;
	button_fastreg = crebutton('快速掛號',xx,yy,ww,hh);
	button_fastreg.className='btn btn-primary';
	//button_fastreg.addEventListener('click', button_fastreg_handle);
	myDraggable.appendChild(button_fastreg);
	xx+=ww+ii;
	button_checkpreexam = crebutton('預檢查詢',xx,yy,ww,hh);
	button_checkpreexam.className='btn btn-primary';
	//button_OPDhistory.addEventListener('click', button_OPDhistory_handle);
	myDraggable.appendChild(button_checkpreexam);
	xx+=ww+ii;
	button_detail = crebutton('基本資料',xx,yy,ww,hh);
	button_detail.className='btn btn-primary';
	//button_detail.addEventListener('click', button_detail_handle);
	myDraggable.appendChild(button_detail);
	xx+=ww+ii;
	button_OPDhistory = crebutton('就醫紀錄',xx,yy,ww,hh);
	button_OPDhistory.className='btn btn-primary';
	//button_OPDhistory.addEventListener('click', button_OPDhistory_handle);
	myDraggable.appendChild(button_OPDhistory);
	xx+=ww+ii;
	button_showvaccine = crebutton('顯示疫苗',xx,yy,ww,hh);
	button_showvaccine.className='btn btn-primary';
	//button_showvaccine.addEventListener('click', button_showvaccine_handle);
	myDraggable.appendChild(button_showvaccine);
	xx+=ww+ii;
	button_countvaccine = crebutton('算疫苗',xx,yy,ww,hh);
	button_countvaccine.className='btn btn-primary';
	//button_countvaccine.addEventListener('click', button_countvaccine_handle);
	myDraggable.appendChild(button_countvaccine);
	xx+=ww+ii;
	button_reflash = crebutton('重整畫面',xx,yy,ww,hh);
	button_reflash.className='btn btn-primary';
	//button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_reflash);
	xx+=ww+ii;
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_REG_one(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	span_fasttype = crespan('身分別',xx,yy,ww,hh);
	myDraggable.appendChild(span_fasttype);
	xx+=ww+ii;
	input_fasttype = creinput('input_fasttype',xx,yy,ww,hh)
	if (temptype){
		input_fasttype.value=temptype;
	}
	myDraggable.appendChild(input_fasttype);
	xx+=ww+ii;
	button_fastreg = crebutton('快速掛號',xx,yy,ww,hh);
	button_fastreg.className='btn btn-primary';
	//button_fastreg.addEventListener('click', button_fastreg_handle);
	myDraggable.appendChild(button_fastreg);
	xx+=ww+ii;
	button_checkpreexam =  crebutton('預檢查詢',xx,yy,ww,hh);
	button_checkpreexam.className='btn btn-primary';
	//button_OPDhistory.addEventListener('click', button_OPDhistory_handle);
	myDraggable.appendChild(button_checkpreexam);
	xx+=ww+ii;
	
	button_detail = crebutton('基本資料',xx,yy,ww,hh);
	button_detail.className='btn btn-primary';
	//button_detail.addEventListener('click', button_detail_handle);
	myDraggable.appendChild(button_detail);
	xx+=ww+ii;
	button_OPDhistory = crebutton('就醫紀錄',xx,yy,ww,hh);
	button_OPDhistory.className='btn btn-primary';
	//button_OPDhistory.addEventListener('click', button_OPDhistory_handle);
	myDraggable.appendChild(button_OPDhistory);
	xx+=ww+ii;
	button_showvaccine = crebutton('顯示疫苗',xx,yy,ww,hh);
	button_showvaccine.className='btn btn-primary';
	//button_showvaccine.addEventListener('click', button_showvaccine_handle);
	myDraggable.appendChild(button_showvaccine);
	xx+=ww+ii;
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_FM(){
	create_myDraggable();
	button_FMdebug = document.createElement('button');
	button_FMdebug.textContent='醫療群除錯';
	button_FMdebug.style.width = '160px';
	button_FMdebug.style.height = '66px';
	button_FMdebug.style.left = '2px';
	button_FMdebug.style.top = '2px';
	button_FMdebug.style.position = 'absolute';
	//button_FMdebug.addEventListener('click', button_FMdebug_handle);
	myDraggable.appendChild(button_FMdebug);
	myDraggable.style.width='164px';
	myDraggable.style.height = 70+'px';
	myDraggable.style.left=window.innerWidth-164-borderx +'px';
}
function create_Countmonth(){
	create_myDraggable();
	button_countmonth = document.createElement('button');
	button_countmonth.textContent='查天數';
	button_countmonth.style.width = '160px';
	button_countmonth.style.height = '66px';
	button_countmonth.style.left = '2px';
	button_countmonth.style.top = '2px';
	button_countmonth.style.position = 'absolute';
	//button_countmonth.addEventListener('click', button_countmonth_handle);
	myDraggable.appendChild(button_countmonth);
	myDraggable.style.width='164px';
	myDraggable.style.height = 70+'px';
	myDraggable.style.left=window.innerWidth-1164-borderx +'px';
}
function create_myDraggable(){
	thewidth=330;
	theheight=100;
	borderx=20;
	bordery=50;
	var myDraggable = document.createElement('div');
	myDraggable.id='myDraggable';
	myDraggable.style.width = thewidth+'px';
	myDraggable.style.left=window.innerWidth-thewidth-borderx +'px';
	myDraggable.style.height = theheight+'px';
	myDraggable.style.top = bordery +'px';
	myDraggable.style.background = '#f9f9f9';
	myDraggable.style.fontFamily = '微軟正黑體';
	myDraggable.style.fontSize = '16px';
	myDraggable.style.border = '1px solid #ccc';
	myDraggable.style.position = 'absolute';
	//myDraggable.style.cursor = 'move';
	myDraggable.style.zIndex = '9999';
	document.body.insertBefore(myDraggable,document.body.firstChild);
	/*
	myDraggable.addEventListener('mousedown', function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
	function onMouseMove(e) {
		posX = mouseX - e.clientX;
		posY = mouseY - e.clientY;
		mouseX = e.clientX;
		mouseY = e.clientY;
		myDraggable.style.left = (myDraggable.offsetLeft - posX) + 'px';
		myDraggable.style.top = (myDraggable.offsetTop - posY) + 'px';
	}
	function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}
	*/
	
}

