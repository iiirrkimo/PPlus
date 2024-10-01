(function(){
	try {
		resultobj=queryalldata();
		
		
		resultstring=JSON.stringify(resultobj);
	} catch (e) {
		if (document.getElementsByClassName('login-btn blue2').length>0){
			document.getElementsByClassName('login-btn blue2')[0].click();
		} else if (document.getElementsByClassName('green-btn').length>0){
			document.getElementsByClassName('green-btn')[0].click();
		}
		resultstring="嘗試換卡";
	} finally {
		window.chrome.webview.hostObjects.ahkgetvpn2(resultstring);
	}
})();

function queryalldata(){
	currentTime = getFormattedDate();
	patientname=document.getElementsByClassName('name')[0].textContent;
	querykey=currentTime+'&insert_log=true';
	url_list={
		"drug" : 'https://medcloud2.nhi.gov.tw/imu/api/imue0008/imue0008s02/get-data?cli_datetime=',
		"exam" : 'https://medcloud2.nhi.gov.tw/imu/api/imue0060/imue0060s02/get-data?cli_datetime=',
		"HBCV" : 'https://medcloud2.nhi.gov.tw/imu/api/imue0180/imue0180s01/hbcv-data?cli_datetime=',
		"he":'https://medcloud2.nhi.gov.tw/imu/api/imue0140/imue0140s01/hpa-data?cli_datetime=',
		"cancer": "https://medcloud2.nhi.gov.tw/imu/api/imue0150/imue0150s01/hpa-data?cli_datetime=",
		"residue": "https://medcloud2.nhi.gov.tw/imu/api/imue0120/imue0120s01/pres-med-day?cli_datetime=",
		"image": "https://medcloud2.nhi.gov.tw/imu/api/imue0130/imue0130s02/get-data?cli_datetime=",
	}
	keylist=Object.keys(url_list);
	retobj={};
	retobj['name']=patientname;
	for (let i=0;i<keylist.length;i++){
		item=keylist[i];
		theurl=url_list[item]+querykey;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open('GET', theurl, false );
		xmlHttp.setRequestHeader('Content-Type', 'application/json, text/plain, */*');
		authorization="Bearer "+sessionStorage.token;
		xmlHttp.setRequestHeader('authorization', authorization);
		xmlHttp.send();
		res=xmlHttp.responseText;
		jres=JSON.parse(res);
		retobj[item]=jres
	}
	retobj=modifydrug(retobj);
	retobj=modifyexam(retobj);
	return retobj
}

function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

function modifydrug(retobj){
	retobj.drug.modify={}
	retobj.drug.modify['byitem']={}
	retobj.drug.modify['bydate']={}
	for (let i=0;i<retobj.drug.robject.length;i++){
		let drug=retobj.drug.robject[i];
		let date=cytomkysplash(drug.drug_date);
		let hospname=drug.hosp.split(';')[0];
		let icd=drug.icd_code+drug.icd_cname
		let newprop=date+'_'+hospname+'_'+icd;
		let desc=drug.drug_ename+'('+drug.drug_ing_name+'):'+drug.drug_fre+' * '+drug.day+' 天= '+drug.qty+'#|'+drug.drug_code;
		if (!retobj.drug.modify['bydate'].hasOwnProperty(newprop)){
			retobj.drug.modify['bydate'][newprop]=[];
		}
		if (drug.drug_left>0){
			desc='('+drug.drug_left+')'+desc;
		}
		retobj.drug.modify['bydate'][newprop].push(desc);
		let itemprop=drug.drug_code+'_'+drug.drug_ename+'_'+drug.drug_ing_name;
		if (!retobj.drug.modify['byitem'].hasOwnProperty(itemprop)){
			retobj.drug.modify['byitem'][itemprop]=[];
		}
		let descbyitem=date+'_'+hospname+'_'+drug.drug_fre+' * '+drug.day+' 天= '+drug.qty;
		retobj.drug.modify['byitem'][itemprop].push(descbyitem);
	}

	return retobj
}

function cytomkysplash(cy){
	let act=cy.split('/');
	let mky=act[0]*1-1911;
	return mky+act[1]+act[2]
}

function modifyexam(retobj){
	retobj.exam.modify={}
	retobj.exam.modify['byitem']={}
	retobj.exam.modify['bydate']={}
	for (let i=0;i<retobj.exam.robject.length;i++){
		let exam=retobj.exam.robject[i];
		let date=cytomkysplash(exam.real_inspect_date);
		let hospname=exam.hosp.split(';')[0];
		let item=exam.order_code+'_'+exam.assay_item_name;
		let desc=date+' : '+exam.assay_value+' '+exam.unit_data+'，'+hospname+'，參考值:'+exam.consult_value;
		if (!retobj.exam.modify['byitem'].hasOwnProperty(item)){
			retobj.exam.modify['byitem'][item]=[];
		}
		retobj.exam.modify['byitem'][item].push(desc);
		let dateprop=date +'_'+hospname;
		if (!retobj.exam.modify['bydate'].hasOwnProperty(dateprop)){
			retobj.exam.modify['bydate'][dateprop]=[];
		}
		descbydate=item +' : '+exam.assay_value+' '+exam.unit_dat+'，參考值:'+exam.consult_value;
		retobj.exam.modify['bydate'][dateprop].push(descbydate);
	}

	return retobj
}
