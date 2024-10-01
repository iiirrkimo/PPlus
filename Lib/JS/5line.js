(async function (){
	function httpGet(Url)
	{
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", Url, false );
		xmlHttp.send( null );
		return xmlHttp.responseText;
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
		//aaa=await fetchData(furl,'GET','');
		res=JSON.parse(aaa);
		personalInfoId=res.result.personalInfoId;
		age=res.result.age;
		gender=res.result.gender;
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
	}
})();