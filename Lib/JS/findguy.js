(function(){
jjj=document.URL;
seid = 'please_change_me_1';
d1='https://phpcis.chshb.gov.tw/populanceRegistration';
if (jjj.includes(d1)){
	tb=document.getElementsByClassName('table table-striped table-bordered table-sm role-list__role-table commonTable');
	tab=[document.querySelector("#uncontrolled-tab-example-tab-consulted"),document.querySelector("#uncontrolled-tab-example-tab-notConsulted")];
	for (let i=0;i<2;i++){
		index=1-i;
		tb=document.getElementsByClassName('table table-striped table-bordered table-sm role-list__role-table commonTable')[index];
		for (let j=0;j<tb.rows.length;j++){
			if (tb.rows[j].cells.length>4){
				if (tb.rows[j].cells[3].innerText==seid){
					tb.rows[j].style.backgroundColor='#82D900';
					tab[i].click();
                    tb.rows[j-1].scrollIntoView();
				}
			}
		}
	}
}
})();