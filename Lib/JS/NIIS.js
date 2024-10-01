(function(){
	patientid="please_change_me_1";  //python_transfer_ID
	patientidbirth="please_change_me_2";  //python_transfer_BIR
	patientidcheckRA=false; //python_transfer_checkRA
	testmode=false;//false
	vaccinelist=['rHepB-1','rHepB-2','rHepB-3',
		'13PCV-1','13PCV-2','13PCV-3','13PCV-4',
		'5in1-1','5in1-2','5in1-3','5in1-4',
		'BCG',
		'MMR-1','MMR-2',
		'Var-1',
		'2HepA-1','2HepA-2',
		'JE-CV_LiveAtd-1','JE-CV_LiveAtd-2',
		'DTaP-IPV-5'
		]
	vacnameprolist={
"BCG":["BCG"],
"rHepB-1":["HBV"],
"rHepB-2":["HBV"],
"rHepB-3":["HBV"],
"5in1-1":["Tetanus","Diphtheria","Pertusis","Polio","Hib"],
"5in1-2":["Tetanus","Diphtheria","Pertusis","Polio","Hib"],
"5in1-3":["Tetanus","Diphtheria","Pertusis","Polio","Hib"],
"5in1-4":["Tetanus","Diphtheria","Pertusis","Polio","Hib"],
"MMR-1":["Measles","Mumps","Rubella"],
"MMR-2":["Measles","Mumps","Rubella"],
"JE-1":["JE"],
"JE-2":["JE"],
"JE-3":["JE"],
"JE-4":["JE"],
"JE-CV_LiveAtd-1":["JE"],
"JE-CV_LiveAtd-2":["JE"],
"JE_LiveAtd-1":["JE"],
"JE_LiveAtd-2":["JE"],
"JE-VC_Inactd-1":["JE"],
"JE-VC_Inactd-2":["JE"],
"JE-VC_Inactd-3":["JE"],
"JE-VC_Inactd-4":["JE"],
"Tdap-IPV":["Tetanus","Diphtheria","Pertusis","Polio"],
"Td":["Tetanus","Diphtheria"],
"2HepA-1":["HAV"],
"2HepA-2":["HAV"],
"6in1-1":["Tetanus","Diphtheria","Pertusis","Polio","Hib","HBV"],
"6in1-2":["Tetanus","Diphtheria","Pertusis","Polio","Hib","HBV"],
"6in1-3":["Tetanus","Diphtheria","Pertusis","Polio","Hib","HBV"],
"6in1-4":["Tetanus","Diphtheria","Pertusis","Polio","Hib","HBV"],
"13PCV-1":["PCV"],
"13PCV-2":["PCV"],
"13PCV-3":["PCV"],
"13PCV-4":["PCV"],
"DTaP-IPV-1":["Tetanus","Diphtheria","Pertusis","Polio"],
"DTaP-IPV-2":["Tetanus","Diphtheria","Pertusis","Polio"],
"DTaP-IPV-3":["Tetanus","Diphtheria","Pertusis","Polio"],
"DTaP-IPV-4":["Tetanus","Diphtheria","Pertusis","Polio"],
"MV":["Measles"],
"DTaP-1":["Tetanus","Diphtheria","Pertusis"],
"DTaP-2":["Tetanus","Diphtheria","Pertusis"],
"DTaP-3":["Tetanus","Diphtheria","Pertusis"],
"DTaP-4":["Tetanus","Diphtheria","Pertusis"],
"DTaP-5":["Tetanus","Diphtheria","Pertusis"],
"IPV-1":["Polio"],
"IPV-2":["Polio"],
"IPV-3":["Polio"],
"IPV-4":["Polio"],
"IPV-5":["Polio"],
"Hib-1":["Hib"],
"Hib-2":["Hib"],
"Hib-3":["Hib"],
"Hib-4":["Hib"],
"DTP-1":["Tetanus","Diphtheria","Pertusis"],
"DTP-2":["Tetanus","Diphtheria","Pertusis"],
"DTP-3":["Tetanus","Diphtheria","Pertusis"],
"DTP-4":["Tetanus","Diphtheria","Pertusis"],
"DT-1":["Tetanus","Diphtheria"],
"DT-2":["Tetanus","Diphtheria"],
"DT-3":["Tetanus","Diphtheria"],
"DT-4":["Tetanus","Diphtheria"],
"7PCV-1":["PCV"],
"7PCV-2":["PCV"],
"7PCV-3":["PCV"],
"7PCV-4":["PCV"],
"10PCV-1":["PCV"],
"10PCV-2":["PCV"],
"10PCV-3":["PCV"],
"10PCV-4":["PCV"],
"HepAB-1":["HAV","HBV"],
"HepAB-2":["HAV","HBV"],
"HepAB-3":["HAV","HBV"],
"Tdap":["AP"],
"+BCG":["BCG"],
"HepB-LBW":["HBV"],
"HepB-LBWe":["HBV"],
"HepB-LBWs":["HBV"],
"HepB-LBWu":["HBV"],
"+JE-1":["JE"],
"+JE-2":["JE"],
"+Td-1":["Tetanus","Diphtheria"],
"+Td-2":["Tetanus","Diphtheria"],
"+Tdap-IPV-1":["AP"],
"+Tdap-IPV-2":["AP"],
"+MMR-1":["Measles","Mumps","Rubella"],
"+MMR-2":["Measles","Mumps","Rubella"],
"+rHepB-1":["HBV"],
"+rHepB-2":["HBV"],
"+rHepB-3":["HBV"],
"pHepB-1":["HBV"],
"pHepB-2":["HBV"],
"pHepB-3":["HBV"],
"pHepB-4":["HBV"],
"Mumps":["Mumps"],
"+MV":["Measles"],
"OPV-1":["Polio"],
"OPV-2":["Polio"],
"OPV-3":["Polio"],
"OPV-4":["Polio"],
"OPV-5":["Polio"],
"+OPV-1":["Polio"],
"+OPV-2":["Polio"],
"+OPV-3":["Polio"],
"+IPV-1":["Polio"],
"+IPV-2":["Polio"],
"+IPV-3":["Polio"],
"DTaP-IPV-5":["AP"],
"+DTaP-IPV-1":["Tetanus","Diphtheria","Pertusis","Polio","AP"],
"+DTaP-IPV-2":["Tetanus","Diphtheria","Pertusis","Polio","AP"],
"MMRV-1":["Measles","Mumps","Rubella","Var"],
"MMRV-2":["Measles","Mumps","Rubella","Var"],
"+2HepA-1":["HAV"],
"+2HepA-2":["HAV"],
"3HepA-1":["HAV"],
"3HepA-2":["HAV"],
"3HepA-3":["HAV"],
"MMR0":["Measles","Mumps","Rubella"],
"MR-1":["Measles","Rubella"],
"MR-2":["Measles","Rubella"],
"RV":["Rubella"],
"Var-1":["Var"],
"Var-2":["Var"],
"MMR":["Measles","Mumps","Rubella"],
"15PCV-1":["PCV"],
"15PCV-2":["PCV"],
"15PCV-3":["PCV"],
"15PCV-4":["PCV"],
"DTaP-HepB-IPV-1":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTaP-HepB-IPV-2":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTaP-HepB-IPV-3":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTaP-HepB-IPV-4":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTaP-HepB-IPV-5":["Tetanus","Diphtheria","Pertusis","Polio","HBV","AP"],
"TT":["Tetanus"],
"DTwP-HepB-Hib-1":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTwP-HepB-Hib-2":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTwP-HepB-Hib-3":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTwP-HepB-Hib-4":["Tetanus","Diphtheria","Pertusis","Polio","HBV"],
"DTwP-HepB-Hib-5":["Tetanus","Diphtheria","Pertusis","Polio","HBV","AP"],
"rHepB":["HBV"],
"20PCV-1":["PCV"],
"20PCV-2":["PCV"],
"20PCV-3":["PCV"],
"20PCV-4":["PCV"],
};
	vacprolist=["HBV","Tetanus","Diphtheria","Pertusis","Hib","Polio","PCV","BCG","Measles","Mumps","Rubella","Var","HAV","JE","AP"];
	returnvalue=getvaccinelist(patientid,patientidbirth,patientidcheckRA);
	window.chrome.webview.hostObjects.ahkgetNIIS(returnvalue);
	function applyrecord_to_obj(NIISrecord){
		applylistbyvaccine={};
		for (a=0;a<NIISrecord.ApplyRecord.length;a++){
			SRVC=NIISrecord.ApplyRecord[a].SRVC;
			temprecord={};
			temprecord['ID']=NIISrecord.ApplyRecord[a]['ID'];
			temprecord['ON']=NIISrecord.ApplyRecord[a]['ON'];
			temprecord['VB']=NIISrecord.ApplyRecord[a]['VB'];
			temprecord['SRVC']=SRVC;
			applylistbyvaccine[SRVC]=temprecord;
		}
		return applylistbyvaccine
	}
	function countage(BD){
		TBY=BD.substring(0,3)*1;
		TBM=BD.substring(3,5)*1;
		TBD=BD.substring(5,7)*1;
		ND=new Date;
		NY=ND.getFullYear()-1911;
		NM=ND.getMonth()+1;
		ND=ND.getDate();
		DO=ND-TBD;
		MO=NM-TBM;
		YO=NY-TBY;
		if (DO<0){
			DO+=30;
			MO-=1;
		}
		if (MO<0){
			MO+=12;
			YO-=1
		}
		returnvalue=[YO,MO,DO]
		return returnvalue
	}
	function countageold(BD){
		TBY=BD.substring(0,3)*1;
		ND=new Date;
		NY=ND.getFullYear()-1911;
		return NY-TBY
	}
	function countVageold(BD,ID){
		TBY=BD.substring(0,3)*1+1911;
		IDY=new Date(ID).getFullYear();
		return IDY-TBY
	}
	function countVageold2(BD,ID){
		TBY=BD.substring(0,3)*1+1911;
		TBM=BD.substring(3,5)*1;
		TBD=BD.substring(3,5)*1;
		IDY=new Date(ID).getFullYear();
		IDM=new Date(ID).getMonth()+1;
		IDD=new Date(ID).getDate();
		DDY=IDY-TBY;
		DDM=IDM-TBM;
		DDD=IDD-TBD;
		if (DDD<0){
			DDD+=30;
			DDM-=1;
		}
		if (DDM<0){
			DDM+=12;
			DDY-=1;
		}
		VMO=DDY*12+DDM
		return VMO
	}
	function countdayslater(lastID,interval){
		date_1=new Date(lastID);
		date_2=new Date(date_1.getTime()+(interval)*1000*3600*24+8*1000*3600).toISOString();
		return date_2
	}
	function countneedvaccine(monthold){
		needtoapplylist=[];
		recvaccinelist={
			"0":['rHepB-1'],
			"1":['rHepB-2'],
			"2":['13PCV-1','5in1-1'],
			"4":['13PCV-2','5in1-2'],
			"5":['BCG'],
			"6":['rHepB-3','5in1-3'],
			"12":['MMR-1','Var-1','2HepA-1','13PCV-3'],
			"15":['JE-CV_LiveAtd-1'],
			"18":['2HepA-2','5in1-4'],
			"27":['JE-CV_LiveAtd-2'],
			"60":['DTaP-IPV-5','MMR-2']
		}
		monthlist=Object.keys(recvaccinelist)
		for (b=0;b<monthlist.length;b++){
			if (monthlist[b]<=monthold){
				for (c=0;c<recvaccinelist[monthlist[b]].length;c++){
					needtoapplylist.push(recvaccinelist[monthlist[b]][c])
				}
			}
		}
		return needtoapplylist
	}
	function countnextvaccine(monthold){
		recvaccinelist={
			"0":['rHepB-1'],
			"1":['rHepB-2'],
			"2":['13PCV-1','5in1-1'],
			"4":['13PCV-2','5in1-2'],
			"5":['BCG'],
			"6":['rHepB-3','5in1-3'],
			"12":['MMR-1','Var-1','2HepA-1','13PCV-3'],
			"15":['JE-CV_LiveAtd-1'],
			"18":['2HepA-2','5in1-4'],
			"27":['JE-CV_LiveAtd-2'],
			"60":['DTaP-IPV-5','MMR-2']
		}
		monthlist=Object.keys(recvaccinelist);
		nexttimevaccine=[];
		for (let b=0;b<monthlist.length;b++){
			if (monthlist[b]>monthold){
				nexttimevaccine=recvaccinelist[monthlist[b]];
				break;
			}
		}
		return nexttimevaccine
	}
	function comparevaccine(applyrecord,birth){
		old_array=countage(birth);
		monthold=(old_array[0]*12+old_array[1]+old_array[2]/30).toFixed(2)*1;
		ageold=countageold(birth);
		need_array=countneedvaccine(monthold);
		next_array=countnextvaccine(monthold);
		applylist=applyrecord_to_obj(applyrecord);
		returnobj={};
		returnobj['needtoapply']={};
		returnobj['nexttoapply']={};
		applylist_array=Object.keys(applylist);
		if (applylist_array.includes('13PCV-3')){
			PCV3ID=applylist['13PCV-3']['ID'];
			PCV3IDageold=countVageold2(birth,PCV3ID);
			if (PCV3IDageold<12){
				if (monthold>=12){
					need_array.push('13PCV-4')
				}
			}
		}
		applypro=countvacpro(applylist_array);
		needpro=countvacpro(need_array);
		if (monthold<216){
			for (d=0;d<need_array.length;d++){
				if (!applylist_array.includes(need_array[d])){
					returnobj['needtoapply'][need_array[d]]=countnextIDfunction(applylist,need_array[d],birth);
				} 
			}
			for (let ccc=0; ccc<next_array.length;ccc++){
				returnobj['nexttoapply'][next_array[ccc]]=countnextIDfunction(applylist,next_array[ccc],birth);
			}
		}
		return returnobj
	}
	function mkytocy(mky){
		mkyy=mky.substring(0,3);
		mkym=mky.substring(3,5);
		mkyd=mky.substring(5,7);
		cyy=mkyy*1+1911;
		cyd=cyy+'-'+mkym+'-'+mkyd;
		return new Date(cyd)
	}
	function cyaddttime(cy,year,month){
		cyd=new Date(cy);
		cyy=cyd.getFullYear();
		cym=cyd.getMonth()+1;
		cyd=cyd.getDate();
		cyy=cyy+year;
		cym=cym+month;
		if (cym>12){
			cym-=12
			cyy+=1
		}
		ncyd=cyy+'-'+cym+'-'+cyd;
		date_1=new Date(ncyd);
		date_2=new Date(date_1.getTime()+8*1000*3600).toISOString();
		return date_2
	}
	function cytomky(cy){
		cyd=new Date(cy);
		cyy=cyd.getFullYear()-1911;
		cym=cyd.getMonth()+1;
		cyd=cyd.getDate();
		mky="000"+cyy;
		mky=mky.substring(mky.length-3,mky.length);
		mkm="00"+cym;
		mkm=mkm.substring(mkm.length-2,mkm.length);
		mkd="00"+cyd;
		mkd=mkd.substring(mkd.length-2,mkd.length);
		mkdate=mky+mkm+mkd;
		return mkdate
	}
	function countnextIDfunction(applylist,countnextID,birth){
		activevaccine=['MMR','MMR-1','MMR-2','Var-1','Var-2','JE-CV_LiveAtd-1','JE-CV_LiveAtd-2']
		birthcy=mkytocy(birth);
		ALD='';
		ALDNa='';
		applykeys=Object.keys(applylist);
		for (e=0;e<activevaccine.length;e++){
			if (applykeys.includes(activevaccine[e])){
				ALDN=new Date(applylist[activevaccine[e]]['ID']);
				if (ALD==''){
					ALD=ALDN;
					ALDNa=activevaccine[e];
				} else {
					if (ALDN>ALD){
						ALD=ALDN;
						ALDNa=activevaccine[e];
					}
				}
			}
		}
		if (vaccinelist.includes(countnextID)){
			if (countnextID=='rHepB-1'){
				LD='';
				recommandtime=birthcy;
				recommandtimeC='出生24小時內儘速';
				leastinterval=birthcy;
				leastintervalC='出生24小時內儘速';
			}
			if (countnextID=='rHepB-2'){
				if (applykeys.includes('rHepB-1')){
					LD=applylist['rHepB-1']['ID']
					recommandtime1=cyaddttime(LD,0,1);
					recommandtime2=cyaddttime(birthcy,0,1);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='1個月大(與第一劑間隔1個月)';
					leastinterval=countdayslater(LD,28);
					leastintervalC='間隔4週(28天)';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第一劑';
					leastinterval='';
					leastintervalC='未接種第一劑';
				}
			}
			if (countnextID=='rHepB-3'){
				if (applykeys.includes('rHepB-2')){
					LD=applylist['rHepB-2']['ID']
					recommandtime1=cyaddttime(LD,0,5);
					recommandtime2=cyaddttime(birthcy,0,6);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='6個月大(第二劑間隔5個月)';
					leastinterval1=countdayslater(LD,56);
					if (applykeys.includes('rHepB-1')){
						LD2=applylist['rHepB-1']['ID']
						leastinterval2=countdayslater(LD2,112);
					}
					if (leastinterval1>leastinterval2){
						leastinterval=leastinterval
					} else {
						leastinterval=leastinterval2
					}
					leastintervalC='與第二劑間隔56天且第1、第3劑應間隔至少16週';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第二劑';
					leastinterval='';
					leastintervalC='未接種第二劑';
				}
			}
			if (countnextID=='5in1-1'){
				LD='';
				recommandtime1=countdayslater(birthcy,60);
				recommandtime2=cyaddttime(birthcy,0,2);
				if (recommandtime1>recommandtime2){
					recommandtime=recommandtime1;
				} else {
					recommandtime=recommandtime2;
				}
				recommandtimeC='2個月';
				leastinterval=countdayslater(birthcy,42);
				leastintervalC='6週';
			}
			if (countnextID=='5in1-2'){
				if (applykeys.includes('5in1-1')){
					LD=applylist['5in1-1']['ID']
					recommandtime1=cyaddttime(LD,0,2);
					recommandtime2=cyaddttime(birthcy,0,4);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='4個月(與第一劑間隔2個月)';
					leastinterval=countdayslater(LD,28);
					leastintervalC='4週(與第一劑間隔28天)';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第一劑';
					leastinterval='';
					leastintervalC='未接種第一劑';
				}
			}
			if (countnextID=='5in1-3'){
				if (applykeys.includes('5in1-2')){
					LD=applylist['5in1-2']['ID']
					recommandtime1=cyaddttime(LD,0,2);
					recommandtime2=cyaddttime(birthcy,0,6);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='6個月(與第二劑間隔2個月)';
					leastinterval=countdayslater(LD,28);
					leastintervalC='4週(與第二劑間隔28天)';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第二劑';
					leastinterval='';
					leastintervalC='未接種第二劑';
				}
			}
			if (countnextID=='5in1-4'){
				if (applykeys.includes('5in1-3')){
					LD=applylist['5in1-3']['ID']
					recommandtime1=cyaddttime(LD,1,0);
					recommandtime2=cyaddttime(birthcy,1,6);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='18個月(與第三劑間隔1年)';
					leastinterval1=countdayslater(LD,180);
					leastinterval2=cyaddttime(birthcy,1,0);
					if (leastinterval1>leastinterval2){
						leastinterval=leastinterval1
					} else {
						leastinterval=leastinterval2
					}
					leastintervalC='間隔6個月(與第二劑間隔180天)且滿1歲後';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第三劑';
					leastinterval='';
					leastintervalC='未接種第三劑';
				}
			}
			if (countnextID=='13PCV-1'){
				LD='';
				recommandtime1=countdayslater(birthcy,60);
				recommandtime2=cyaddttime(birthcy,0,2);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
				recommandtimeC='2個月大';
				leastinterval=countdayslater(birthcy,42);
				leastintervalC='6週大';
			}
			if (countnextID=='13PCV-2'){
				if (applykeys.includes('13PCV-1')){
					LD=applylist['13PCV-1']['ID']
					recommandtime1=cyaddttime(LD,0,2);
					recommandtime2=cyaddttime(birthcy,0,4);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='4個月大(第一劑間隔2個月)';
					leastinterval=countdayslater(LD,56);
					leastintervalC='間隔8週(56天)';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第一劑';
					leastinterval='';
					leastintervalC='未接種第一劑';
				}
			}
			if (countnextID=='13PCV-3'){
				if (applykeys.includes('13PCV-2')){
					LD=applylist['13PCV-2']['ID']
					recommandtime1=cyaddttime(LD,0,8);
					recommandtime2=cyaddttime(birthcy,1,0);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='12個月大(與第二劑間隔8個月)';
					leastinterval1=countdayslater(LD,56);
					leastinterval2=cyaddttime(birthcy,1,0);
					if (leastinterval1>leastinterval2){
						leastinterval=leastinterval1;
					} else {
						leastinterval=leastinterval2;
					}
					leastintervalC='間隔8週且滿1歲(與第二劑間隔56天)';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第二劑';
					leastinterval='';
					leastintervalC='未接種第二劑';
				}
			}
			if (countnextID=='13PCV-4'){
				if (applykeys.includes('13PCV-3')){
					LD=applylist['13PCV-3']['ID']
					recommandtime1=cyaddttime(LD,0,6);
					recommandtime2=cyaddttime(birthcy,1,0);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='12個月大(與第三劑間隔6個月)';
					leastinterval1=countdayslater(LD,56);
					leastinterval2=cyaddttime(birthcy,1,0);
					if (leastinterval1>leastinterval2){
						leastinterval=leastinterval1;
					} else {
						leastinterval=leastinterval2;
					}
					leastintervalC='間隔8週且滿1歲(與第三劑間隔56天)';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第二劑';
					leastinterval='';
					leastintervalC='未接種第二劑';
				}
			}
			if (countnextID=='BCG'){
				LD='';
				recommandtime=cyaddttime(birthcy,0,5);
				recommandtimeC='5個月';
				leastinterval=birthcy;
				leastintervalC='出生後';
			}
			if (countnextID=='MMR-1'){
				LD='';
				if (ALD==''){
					recommandtime=cyaddttime(birthcy,1,0);
					recommandtimeC='12個月';
					leastinterval=cyaddttime(birthcy,1,0);
					leastintervalC='12個月';
				} else {
					recommandtime1=cyaddttime(birthcy,1,0);
					recommandtime2=countdayslater(ALD,29);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
						leastinterval=recommandtime1;
						recommandtimeC='12個月';
						leastintervalC='12個月';
					} else {
						recommandtime=recommandtime2;
						leastinterval=recommandtime2;
						recommandtimeC='滿12個月且與'+ALDNa+'間隔28+1天';
						leastintervalC='滿12個月且與'+ALDNa+'間隔28+1天';
					}
				}
			}
			if (countnextID=='MMR-2'){
				if (applykeys.includes('MMR-1')){
					LD=applylist['MMR-1']['ID']
					if (ALD==''){
						recommandtime=cyaddttime(birthcy,5,0);
						recommandtimeC='滿5歲';
						leastinterval=countdayslater(LD,29);
						leastintervalC='隔4週(與第一劑間隔28+1天)';
					} else {
						recommandtime1=cyaddttime(birthcy,5,0);
						recommandtime2=countdayslater(ALD,29);
						if (recommandtime1>recommandtime2){
							recommandtime=recommandtime1;
							recommandtimeC='滿5歲';
						} else {
							recommandtime=recommandtime2;
							recommandtimeC='滿5歲且與'+ALDNa+'間隔28+1天';
						} 
						leastinterval1=countdayslater(ALD,29);
						leastinterval2=countdayslater(LD,29);
						if (leastinterval1>leastinterval2){
							leastinterval=leastinterval1;
							leastintervalC='隔4週(與第一劑間隔28+1天)';
						} else {
							leastinterval=leastinterval2;
							leastintervalC='與'+ALDNa+'間隔28天';
						} 
					}
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第一劑';
					leastinterval='';
					leastintervalC='未接種第一劑';
				}
			}
			if (countnextID=='Var-1'){
				LD='';
				if (ALD==''){
					recommandtime=cyaddttime(birthcy,1,0);
					recommandtimeC='12個月';
					leastinterval=cyaddttime(birthcy,1,0);
					leastintervalC='12個月';
				} else {
					recommandtime1=cyaddttime(birthcy,1,0);
					recommandtime2=countdayslater(ALD,29);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
						leastinterval=recommandtime1;
						recommandtimeC='12個月';
						leastintervalC='12個月';
					} else {
						recommandtime=recommandtime2;
						leastinterval=recommandtime2;
						recommandtimeC='滿12個月且與'+ALDNa+'間隔28(+1)天';
						leastintervalC='滿12個月且與'+ALDNa+'間隔28(+1)天';
					}
				}
			}
			if (countnextID=='2HepA-1'){
				LD='';
				recommandtime=cyaddttime(birthcy,1,0);
				recommandtimeC='12個月';
				leastinterval=cyaddttime(birthcy,1,0);
				leastintervalC='12個月';
			}
			if (countnextID=='2HepA-2'){
				if (applykeys.includes('2HepA-1')){
					LD=applylist['2HepA-1']['ID']
					recommandtime1=cyaddttime(LD,0,6);
					recommandtime2=cyaddttime(birthcy,1,6);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
					} else {
						recommandtime=recommandtime2;
					}
					recommandtimeC='18個月(與第一劑間隔6個月)';
					leastinterval=cyaddttime(LD,0,6);
					leastintervalC='與第一劑間隔6個月';
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第一劑';
					leastinterval='';
					leastintervalC='未接種第一劑';
				}
			}
			if (countnextID=='JE-CV_LiveAtd-1'){
				LD='';
				if (ALD==''){
					recommandtime=cyaddttime(birthcy,1,3);
					recommandtimeC='15個月';
					leastinterval=cyaddttime(birthcy,1,0);
					leastintervalC='12個月';
				} else {
					recommandtime1=cyaddttime(birthcy,1,3);
					recommandtime2=countdayslater(ALD,29);
					if (recommandtime1>recommandtime2){
						recommandtime=recommandtime1;
						recommandtimeC='15個月';
					} else {
						recommandtime=recommandtime2;
						recommandtimeC='滿15個月且與'+ALDNa+'間隔28+1天';
					}
					leastinterval1=cyaddttime(birthcy,1,0);
					leastinterval2=countdayslater(ALD,29);
					if (leastinterval1>leastinterval2){
						leastinterval=leastinterval1;
						leastintervalC='12個月';
					} else {
						leastinterval=leastinterval2;
						leastintervalC='滿12個月且與'+ALDNa+'間隔28+1天';;
					} 
				}
			}
			if (countnextID=='JE-CV_LiveAtd-2'){
				if (applykeys.includes('JE-CV_LiveAtd-1')){
					LD=applylist['JE-CV_LiveAtd-1']['ID']
					if (ALD==''){
						recommandtime1=cyaddttime(LD,1,0);
						recommandtime1=countdayslater(recommandtime1,1);
						recommandtime2=cyaddttime(birthcy,2,3);
						recommandtime2=countdayslater(recommandtime2,1);
						if (recommandtime1>recommandtime2){
							recommandtime=recommandtime1;
						} else {
							recommandtime=recommandtime2;
						}
						recommandtimeC='27個月+1天(與第一劑間隔12個月+1天)';
						leastinterval=cyaddttime(LD,1,0);
						leastinterval=countdayslater(leastinterval,1);
						leastintervalC='與第一劑間隔12個月+1天';
					} else {
						recommandtime1=cyaddttime(LD,1,0);
						recommandtime1=countdayslater(recommandtime1,1);
						recommandtime2=countdayslater(ALD,29);
						if (recommandtime1>recommandtime2){
							recommandtime=recommandtime1;
							recommandtimeC='27個月+1天(與第一劑間隔12個月+1天)';
						} else {
							recommandtime=recommandtime2;
							recommandtimeC='第一劑間隔12個月+1天且與'+ALDNa+'間隔28+1天';
						} 
						leastinterval1=cyaddttime(LD,1,0);
						leastinterval1=countdayslater(leastinterval1,1);
						leastinterval2=countdayslater(ALD,29);
						if (leastinterval1>leastinterval2){
							leastinterval=leastinterval1;
							leastintervalC='與第一劑間隔12個月+1天';
						} else {
							leastinterval=leastinterval2;
							leastintervalC='與第一劑間隔12個月+1天且與'+ALDNa+'間隔28天';
						} 
					}
				} else {
					LD='';
					recommandtime='';
					recommandtimeC='未接種第一劑';
					leastinterval='';
					leastintervalC='未接種第一劑';
				}
			}
			if (countnextID=='DTaP-IPV-5'){
				LD='';
				recommandtime=cyaddttime(birthcy,5,0);
				recommandtimeC='滿5歲';
				leastinterval=cyaddttime(birthcy,4,0);
				leastintervalC='滿4歲';
			}
			temparray={};
			temparray.name=countnextID;
			temparray.LD=LD;
			temparray.recommandtime=recommandtime;
			temparray.recommandtimeC=recommandtimeC;
			temparray.leastinterval=leastinterval;
			temparray.leastintervalC=leastintervalC;
			now0=new Date();
			nowy=now0.getFullYear();
			nowm=now0.getMonth()+1;
			nowd=now0.getDate();
			nowm= nowm.toString().padStart(2, '0');
			nowd= nowd.toString().padStart(2, '0');
			now=new Date(nowy.toString()+'-'+nowm.toString()+'-'+nowd.toString()+"T15:00:00.000Z");
			if (now>=leastinterval){
				thevacpro=vacnameprolist[countnextID]
				pass=true
				for (zz=0;zz<thevacpro.length;zz++){
					apro=Math.ceil(applypro[thevacpro[zz]]);
					npro=Math.ceil(needpro[thevacpro[zz]]);
					if (apro<npro){
						pass=false
					}
				}
				if (pass){
					if (now>=recommandtime){
						temparray.allsug='?_O';
						temparray.allsugC='請檢查是否有接種替代疫苗，若無建議接種';
					} else {
						temparray.allsug='?_▲';
						temparray.allsugC='請檢查是否有接種替代疫苗，若無可接種(符合最短間隔)';
					}
				} else {
					if (now>=recommandtime){
						temparray.allsug='O';
						temparray.allsugC='建議接種';
					} else {
						temparray.allsug='▲';
						temparray.allsugC='僅符合最短接種時程';
					}
				}
			} else {
				temparray.allsug='X';
				temparray.allsugC='不符合接種時程';
			}
			return temparray
		} 
	}
	function countvacpro(array){
	vacpro={}
	for (aa=0;aa<vacprolist.length;aa++){
		vacpro[vacprolist[aa]]=0;
	}
	for (ab=0;ab<array.length;ab++){
		thevacname=array[ab];
		if (Object.keys(vacnameprolist).includes(thevacname)){
			thevacprolist=vacnameprolist[thevacname];
			if (["JE-1","JE-2","JE-3","JE-4","JE-VC_Inactd-1","JE-VC_Inactd-2","JE-VC_Inactd-3","JE-VC_Inactd-4"].includes(thevacname)){
				vproc=0.3;
			} else {
				vproc=1;
			}
			for (ac=0;ac<thevacprolist.length;ac++){
				vacpro[thevacprolist[ac]]+=vproc;
			}
		}
	}
	return vacpro
}
	function countflu(result,birth){
		now=new Date();
		nowy=now.getFullYear();
		nowm=now.getMonth()+1;
		if (nowm>=10){
			sy=nowy;
		} else {
			sy=nowy-1;
		}
		flustarttime=new Date(sy+'-10-01');
		old_array=countage(birth);
		monthold=(old_array[0]*12+old_array[1]+old_array[2]/30).toFixed(2)*1;
		retobj={};
		errmsg='';
		flulist=[];
		if (monthold>=6){
			for (f=0;f<result['ApplyRecord'].length;f++){
				SRVC=result['ApplyRecord'][f]['SRVC'];
				if (SRVC.includes('Flu')){
					flulist.push(result['ApplyRecord'][f]);
				}
			}
			if (flulist.length==0){
				suggest="O";
				if (monthold<108){
					errmsg='未滿9歲,需接種第二劑';
				} else {
					errmsg='不曾接種';
				}
				LD="";
				LDsite="";
			} else {
				LD=flulist[flulist.length-1]['ID'];
				LDdate=new Date(LD);
				if (LDdate>flustarttime){
					if (flulist.length==1){
						if (monthold<108){
							if (now>=countdayslater(LDdate,28)){
								suggest="2";
								LDsite=flulist[flulist.length-1]['ON'];
								errmsg='第二劑,間隔滿28天';
							} else {
								suggest="X";
								LDsite=flulist[flulist.length-1]['ON'];
								errmsg='第二劑間隔未滿28天';
							}
						} else {
							suggest="X";
							LDsite=flulist[flulist.length-1]['ON'];
							errmsg='當年度已接種';
						}
					} else {
						suggest="X";
						LDsite=flulist[flulist.length-1]['ON'];
						errmsg='當年度已接種';
					}
				} else {
					suggest="O";
					errmsg='當年度未接種';
					LDsite=flulist[flulist.length-1]['ON'];
				}
			}
				
		} else {
			suggest="X";
			LD="";
			LDsite="";
			errmsg='未滿6個月';
		}
		retobj['suggest']=suggest;
		retobj['LD']=LD;
		retobj['LDsite']=LDsite;
		retobj['errmsg']=errmsg;
		return retobj
	}
	function countPV(result,birth){
		ageold=countageold(birth);
		PPVlist=[];
		PCVlist=[];
		for (g=0;g<result['ApplyRecord'].length;g++){
			SRVC=result['ApplyRecord'][g]['SRVC'];
			if (SRVC.includes('PPV')){
				PPVlist.push(result['ApplyRecord'][g]);
			}
			if (SRVC.includes('PCV')){
				if (countVageold(birth,result['ApplyRecord'][g]['ID'])>18){
					PCVlist.push(result['ApplyRecord'][g]);
				}
			}
		}
		if (PPVlist.length>0){
			PPVsuggest='X';
			PPVcomment='已接種過PPV';
			PPVLD=PPVlist[PPVlist.length-1]['ID'];
			PPVLDS=PPVlist[PPVlist.length-1]['ON'];
		} else {
			if (ageold>=65){
				if (PCVlist.length>0){
					PCVLD=PCVlist[PCVlist.length-1]['ID'];
					now=new Date();
					if (now>=cyaddttime(PCVLD,1,0)){
						PPVsuggest='O';
						PPVcomment='已接種過PCV13,間隔滿1年';
						PPVLD="";
						PPVLDS="";
					} else {
						PPVsuggest='X';
						PPVcomment='已接種過PCV1,間隔未滿1年';
						PPVLD="";
						PPVLDS="";
					}
				} else {
					PPVsuggest='▲';
					PPVcomment='年滿65歲,優先接種PCV13';
					PPVLD="";
					PPVLDS="";
				}
			} else if (ageold>=50 && ageold<65){
				PPVsuggest='▲';
				PPVcomment='55-64專案';
				PPVLD="";
				PPVLDS="";
			} else {
				PPVsuggest='X';
				PPVcomment='未滿50歲,無法施打PPV';
				PPVLD="";
				PPVLDS="";
			}
		}
		if (PCVlist.length>0){
			PCVsuggest='X';
			PCVcomment='已接種過PCV';
			PCVLD=PCVlist[PCVlist.length-1]['ID'];
			PCVLDS=PCVlist[PCVlist.length-1]['ON'];
		} else {
			if (ageold>=65){
				if (PPVlist.length>0){
					PPVLD=PPVlist[PPVlist.length-1]['ID'];
					now=new Date();
					if (now>=cyaddttime(PPVLD,1,0)){
						PCVsuggest='O';
						PCVcomment='已接種過PPV,間隔滿1年';
						PCVLD="";
						PCVLDS="";
					} else {
						PCVsuggest='X';
						PCVcomment='已接種過PPV,間隔未滿1年';
						PCVLD="";
						PCVLDS="";
					}
				} else {
					PCVsuggest='O';
					PCVcomment='可接種PCV';
					PCVLD="";
					PCVLDS="";
				}
			} else {
				PCVsuggest='X';
				PCVcomment='未滿65歲,無法施打PCV';
				PCVLD="";
				PCVLDS="";
			}
		}
		retobj={};
		retobj['PCV']={}
		retobj['PCV']['PCVsuggest']=PCVsuggest;
		retobj['PCV']['PCVcomment']=PCVcomment;
		retobj['PCV']['PCVLD']=PCVLD;
		retobj['PCV']['PCVLDS']=PCVLDS;
		retobj['PPV']={}
		retobj['PPV']['PPVsuggest']=PPVsuggest;
		retobj['PPV']['PPVcomment']=PPVcomment;
		retobj['PPV']['PPVLD']=PPVLD;
		retobj['PPV']['PPVLDS']=PPVLDS;
		return retobj
	}
	function countCOV(result,birth){
		old_array=countage(birth);
		monthold=(old_array[0]*12+old_array[1]+old_array[2]/30).toFixed(2)*1;
		retobj={};
		if (monthold>6){
			CoVlist=[];
			for (h=0;h<result['ApplyRecord'].length;h++){
				SRVC=result['ApplyRecord'][h]['SRVC'];
				if (SRVC.includes('CoV_')){
					CoVlist.push(result['ApplyRecord'][h]);
				}
			}
			if (CoVlist.length>0){
				theSRVC=CoVlist[CoVlist.length-1]['SRVC'];
				retobj['count']=CoVlist.length;
				COVLD=CoVlist[CoVlist.length-1]['ID'];
				retobj['LD']=COVLD;
				retobj['LDsite']=CoVlist[CoVlist.length-1]['ON'];
				retobj['LDtype']=theSRVC;
				if (theSRVC.includes('XBB')){
					now=new Date();
					if (now>=cyaddttime(COVLD,0,3)){
						retobj['suggest']='O';
					} else {
						retobj['suggest']='X';
					}
				} else {
					retobj['suggest']='O';
				}
			} else {
				retobj['count']=CoVlist.length;
				retobj['LD']="";
				retobj['LDsite']="";
				retobj['LDtype']="";
				retobj['suggest']='O';
			}
		} else {
			retobj['count']=0;
			retobj['LD']="";
			retobj['LDsite']="";
			retobj['LDtype']="<6個月不接種新冠疫苗";
			retobj['suggest']='X';
		}
		
		return retobj
	}
	function getallneedvaccine(result,birth){
		returnobj={};
		returnobj['routine']=comparevaccine(result,birth);
		returnobj['flu']=countflu(result,birth);
		returnobj['PV']=countPV(result,birth);
		returnobj['CoV']=countCOV(result,birth);
		return returnobj
	}
	function getvaccinelist(pid,pbirth,checkRA){
		theY=pbirth.substring(0,3)*1+1911;
		theM=pbirth.substring(3,5);
		theD=pbirth.substring(5,7);
		xmlHttp = new XMLHttpRequest();
		Url='https://niis.cdc.gov.tw/CaseMaintain/UserProfileListOP.aspx';
		xmlHttp.open( 'POST', Url, false );
		xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		postData =  'BirthDateS='+pbirth+'&BirthDateE='+pbirth+'&CaseName=&CaseIdNo='+pid+'&NumberType=0&HouseNo=&ContactName=&ContactIdNo=&ContactBirthDate=&CountyID=0&TownID=0&AddrKind=0&OrderCol=0&OrderAsc=1&ContactType=2&IsDead=false&CaseListNowPage=1&UseModule=2&pgNow=1&pgSize=10';
		xmlHttp.send(postData);
		uuu = xmlHttp.responseText;
		if (uuu.includes('>全國性預防接種資訊管理系統<')){
			msg = '未登入';
			return msg;
		} else {
			uuujson=JSON.parse(uuu);
			theC=uuujson.message[0].C;
			thename=uuujson.message[0].N;
			if (checkRA){
				Url='https://niis.cdc.gov.tw/Vaccination/RecordM/RegisterData_Detail.aspx';
				xmlHttp.open( 'POST', Url, false );
				xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				postData = 'i='+theC;
				xmlHttp.send(postData);
				uuu2 = xmlHttp.responseText;
				theRA=uuu2.split('lblRAddress">')[1].split('</span>')[0];
				thecovphone=uuu2.split('lblMobileNoCoV">')[1].split('</span>')[0];
			} else {
				theRA="不查詢";
				thecovphone="不查詢";
			}
			
			Url='https://niis.cdc.gov.tw/Vaccination/RecordM/RegisterData_DetailOP.aspx';
			xmlHttp.open( 'POST', Url, false );
			xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			postData = 'i='+theC+'&yi=2&bd='+theY+'%2F'+theM+'%2F'+theD+'+%E4%B8%8A%E5%8D%88+12%3A00%3A00&IdNo=D122491269&t=2&ir=2';
			xmlHttp.send(postData);
			RT = xmlHttp.responseText;
			result=JSON.parse(RT);
			vaccinesug=getallneedvaccine(result,pbirth);
			theretobj={};
			theretobj['patientName']=thename;
			theretobj['vaccinesuggestion']=vaccinesug;
			theretobj['niisapplylist']=result;
			
			//changetoutc
			
			if (testmode){
				return theretobj
			} else {
				theretobj_string=JSON.stringify(theretobj);
				return theretobj_string
			}
		}
	}
})();