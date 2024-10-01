#Include <WebView2\WebView2>
#Include Lib\JXON.ahk
ver:="1130904"
programtitle:="AHK_OPD_v" . ver
sqlpath :=A_ScriptDir . "\lib\sqlite3.dll"
dbpath := A_ScriptDir . "\lib\phpciis.db"
tscpath:= A_ScriptDir . "\lib\TSCLIB.dll"
opdpath := A_ScriptDir . "\lib\門診表.txt"
SumatraPDF := A_ScriptDir . "\lib\SumatraPDF.exe"

hisx := ComObject("CsHisX.nhicshisx.1")

tempjson:=""
testmode:=true
hadninput:=true
;;webs
loadingini:=false
mainphpciis:=false
mainphpciisweb:=false
mainphpciiswebgo:=true
subphpciis:=false
subphpciisweb:=false
subphpciiswebgo:=true
medvpn:=false
medvpnweb:=false
medvpn2:=false
medvpn2web:=false
medvpn2webgo:=true
niis:=false
niisweb:=false
niiswebgo:=true
eipap:=false
eipapweb:=false
gdms:=false
gdmsweb:=false
ssap:=false
ssapweb:=false
trans:=false
transweb:=false
smoke:=false
smokeweb:=false
lims:=false
limsweb:=false
mainphpciiswebgo:=true

;;門診資訊
c_name:=""
c_personalId:=""
c_personalInfoId:=""
c_healthRecordId:=""
c_registrationId:=""
c_personalTag:=""
c_birth:=""





;;; maingui
mainwindow := Gui("+AlwaysOnTop",programtitle)
mainwindow.SetFont("s14", "微軟正黑體")
mainwindow.OnEvent("Close", mainwindowclose)
mainwindowclose(*) { 
    if MsgBox("是否關閉","是否關閉", "YN") = "YES"
        ExitApp
    else
        return true
}
up_button:= mainwindow.Add("button", "x212 y5 w40 h30 Center", "↑")
up_button.OnEvent("Click", (*) => webgoto("up"))
down_button:= mainwindow.Add("button", "x254 y5 w40 h30 Center", "↓")
down_button.OnEvent("Click", (*) => webgoto("down"))
main_button:= mainwindow.Add("button", "x296 y5 w40 h30 Center", "主")
main_button.OnEvent("Click", (*) => fastlogin(mainphpciis,mainphpciisweb,'main'))
sub_button:= mainwindow.Add("button", "x338 y5 w40 h30 Center", "副")
sub_button.OnEvent("Click", (*) => fastlogin(subphpciis,subphpciisweb,'sub'))
callman:= mainwindow.Add("Edit", "x380 y5 w70 h30 Center", "")
loadnum()


maintab := mainwindow.Add("Tab3","x5 y5 w450 h250 ", ["網頁","看診","設定"])

isicc:=false


;;一般標籤
maintab.UseTab("網頁")
xx:=10
yy:=40
mainphpciis_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w110 h30", "主PHPCIIS")
mainphpciis_button.OnEvent("Click", (*) => fastlogin(mainphpciis,mainphpciisweb,'main'))
xx+=110
mainphpciis_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
mainphpciis_status.SetFont("cred s14", "微軟正黑體")
xx+=70
xx+=140
top_check:=mainwindow.Add("Checkbox","x" . xx . " y" . yy . " w150 h30","監測讀卡機")
top_check.OnEvent("Click", (*) => top_check_handle())
yy+=30
xx:=10
subphpciis_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w110 h30", "副PHPCIIS")
subphpciis_button.OnEvent("Click", (*) => fastlogin(subphpciis,subphpciisweb,'sub'))
xx+=110
subphpciis_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
subphpciis_status.SetFont("cred s14", "微軟正黑體")
xx+=70
xx+=140
phpciisdb_status:=mainwindow.Add("Text","x" . xx . " y" . yy . " w150 h30","資料庫未建立")
phpciisdb_status.SetFont("cred s14", "微軟正黑體")
phpciisdb_status.OnEvent("Click",(*) => reload())
yy+=30
xx:=10
vpn1_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "雲端1")
vpn1_button.OnEvent("Click", (*) => create_medvpn())
xx+=80
vpn1_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
vpn1_status.SetFont("cred s14", "微軟正黑體")
xx+=70
vpn2_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "雲端2")
vpn2_button.OnEvent("Click", (*) => create_medvpn2())
xx+=80
vpn2_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
vpn2_status.SetFont("cred s14", "微軟正黑體")
xx+=70
NIIS_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "NIIS")
NIIS_button.OnEvent("Click", (*) => create_niis())
xx+=80
NIIS_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
NIIS_status.SetFont("cred s14", "微軟正黑體")
yy+=30
xx:=10
eipap_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "打卡")
eipap_button.OnEvent("Click", (*) => create_eipap())
xx+=80
eipap_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
eipap_status.SetFont("cred s14", "微軟正黑體")
xx+=70
gdms_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "公文")
gdms_button.OnEvent("Click", (*) => create_gdms())
xx+=80
gdms_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
gdms_status.SetFont("cred s14", "微軟正黑體")
xx+=70
ssap_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "公告")
ssap_button.OnEvent("Click", (*) => create_ssap())
xx+=80
ssap_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
ssap_status.SetFont("cred s14", "微軟正黑體")
yy+=30
xx:=10
trans_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "轉診")
trans_button.OnEvent("Click", (*) => create_trans())
xx+=80
trans_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
trans_status.SetFont("cred s14", "微軟正黑體")
xx+=70
smoke_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "戒菸")
smoke_button.OnEvent("Click", (*) => create_smoke())
xx+=80
smoke_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
smoke_status.SetFont("cred s14", "微軟正黑體")
xx+=70
LIMS_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "LIMS")
LIMS_button.OnEvent("Click", (*) => create_lims())
xx+=80
LIMS_status := mainwindow.Add("Text", "x" . xx . " y" . yy+1 . " w60 h30 center", "未開啟")
LIMS_status.SetFont("cred s14", "微軟正黑體")


;;看診標籤
maintab.UseTab("看診")
xx:=10
yy:=40
OPD_readic := mainwindow.Add("Button", "x" . xx . " y" . yy . " w60 h30", "找人")
OPD_readic.OnEvent("Click", (*) => OPD_readic_handle())
xx+=60
OPD_name := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w130 h30 center ReadOnly","")
xx+=130
OPD_id := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w150 h30 center ReadOnly","")
xx+=150
OPD_bir := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w100 h30 center ReadOnly","")
yy+=30
xx:=10
OPD_medvpn := mainwindow.Add("Button", "x" . xx . " y" . yy . " w90 h30", "雲端整合")
OPD_medvpn.OnEvent("Click", (*) => OPD_medvpn_handle())
xx+=90
OPD_niis := mainwindow.Add("Button", "x" . xx . " y" . yy . " w90 h30", "NIIS")
OPD_niis.OnEvent("Click", (*) => OPD_niis_handle(OPD_id.Value,OPD_bir.Value))
xx+=90
OPD_growth := mainwindow.Add("Button", "x" . xx . " y" . yy . " w90 h30", "生長曲線")

xx+=90
OPD_prevention := mainwindow.Add("Button", "x" . xx . " y" . yy . " w90 h30", "預防保健")
OPD_prevention.OnEvent("Click", (*) => OPD_prevention_handle())
xx+=90
OPD_shortcut := mainwindow.Add("Button", "x" . xx . " y" . yy . " w80 h30", "捷徑")
;yy+=30
;xx:=10
;OPD_remarkphp := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w440 h30 ReadOnly","123456")
yy+=30
xx:=10
OPD_remark := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w440 r6","")
OPD_remark.OnEvent("change", (*) => OPD_remark_change())
OPD_remark_change(*){
    if (OPD_name.Value!="" && StrLen(OPD_id.value)==10 && hadninput){
        sql:="SELECT * FROM personalInfo WHERE personalID='" . OPD_id.value . "'"
        table:=selectdb(dbpath,sql)
        if (table.Length>0){
            sql:="UPDATE personalInfo SET remark='" . OPD_remark.Value . "' WHERE personalID='" . OPD_id.value . "'"
            if (!execdb(dbpath,sql)){
                MsgBox('更新資料庫失敗')
            }
        } else {
            sql:="INSERT INTO personalInfo (personalID, remark) VALUES ('" . OPD_id.value . "','" . OPD_remark.Value . "')"
            if (!execdb(dbpath,sql)){
                A_Clipboard:=sql
                MsgBox('新增資料庫失敗')
            }
        }
    }
    
}



;;設定標籤
maintab.UseTab("設定")
xx:=10
yy:=40
mainwindow.Add("TEXT", "x" . xx . " y" . yy . " w120 h30 center", "PHPCIIS")
xx+=120
PHPCIIS_account := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w160 h30", "")
xx+=160
PHPCIIS_password := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w160 h30 Password*", "")
yy+=30
xx:=10
mainwindow.Add("TEXT", "x" . xx . " y" . yy . " w120 h30 center", "戒菸系統")
xx+=120
SMOKE_account := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w160 h30", "")
xx+=160
SMOKE_password := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w160 h30 Password*", "")
yy+=30
xx:=10
mainwindow.Add("TEXT", "x" . xx . " y" . yy . " w120 h30 center", "憑證/ID")
xx+=120
naturalcode := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w160 h30 ", "")
xx+=160
idcode := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w160 h30 ", "")
yy+=30
xx:=10
printer_prescription_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w120 h30 center", "印表機")
xx+=120
printer_prescription_edit := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w320 h30", "")
yy+=30
xx:=10
printer_label_button := mainwindow.Add("Button", "x" . xx . " y" . yy . " w120 h30 center", "標籤機")
xx+=120
printer_label_edit := mainwindow.Add("Edit", "x" . xx . " y" . yy . " w320 h30", "")
loadini()
mainwindow.Show('x1440 y140 w460 h260')


printwindow := Gui("+AlwaysOnTop",'列印處方')
printwindow.show("w850 h1000")
printwindowweb := WebView2.create(printwindow.Hwnd)
printwindowweb.CoreWebView2.Navigate(A_WorkingDir . "\lib\printer.html")
printwindowweb.CoreWebView2.AddHostObjectToScript('printret', printret)
;printwindowweb.CoreWebView2.AddHostObjectToScript('printsilent', printsilent)
printwindow.OnEvent("Size", (*) => resizewebwindow(printwindowweb))
printwindow.Hide()



;vpndui
vpngenwindow:=Gui("-Resize","雲端整合")
vpngenwindow.SetFont("s14", "微軟正黑體")
vpngenwindow.Show('x5 y5 w1300 h770')
xx:=5
yy:=5
xx:=680
vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w60 h30 center", "成健:")
xx+=60
vpn_HE_sug:=vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w40 h30 center", "X")
xx+=40
vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w60 h30 center", "BC肝:")
xx+=60
vpn_BC_sug:=vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w40 h30 center", "X")
xx+=40
vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w60 h30 center", "腸篩:")
xx+=60
vpn_FOBT_sug:=vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w40 h30 center", "X")
xx+=40
vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w60 h30 center", "口篩:")
xx+=60
vpn_ORAL_sug:=vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w40 h30 center", "X")
xx+=40
vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w60 h30 center", "子抹:")
xx+=60
vpn_PAP_sug:=vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w40 h30 center", "X")
xx+=40
vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w60 h30 center", "乳攝:")
xx+=60
vpn_MAMO_sug:=vpngenwindow.Add("TEXT","x" . xx . " y" . yy . " w40 h30 center", "X")
xx+=40


vpntab := vpngenwindow.Add("Tab3","x5 y5 w1290 h760 ", ["藥品","檢驗","影像","癌篩"])


vpntab.UseTab("藥品")
xx:=10
yy:=40
drugtype:='date'
vpn_drugtypechange:=vpngenwindow.Add("button", "x" . xx . " y" . yy . " w1280 h30 Center","依日期排序")
vpn_drugtypechange.OnEvent("Click", (*) => vpn_drugtypechange_handle())
vpn_drugtypechange_handle(*){
    global drugtype
    if (drugtype=='date'){
        drugtype:='item'
        vpn_drugbydatetv.Visible:=false
        vpn_drugbyitemtv.Visible:=true
    } else {
        drugtype:='date'
        vpn_drugbydatetv.Visible:=true
        vpn_drugbyitemtv.Visible:=false
    }
}
xx+=880
xx:=10
yy+=30
vpn_drugbydatetv := vpngenwindow.Add("TreeView", "x" . xx . " y" . yy . " w1280 h400 -ReadOnly")
vpn_drugbydatetv.Visible:=true
vpn_drugbyitemtv := vpngenwindow.Add("TreeView", "x" . xx . " y" . yy . " w1280 h400 -ReadOnly")
vpn_drugbyitemtv.Visible:=false
yy+=410
vpn_rediduelv := vpngenwindow.Add("ListView", "x" . xx . " y" . yy . " w1280 h280", ["給藥日",'成分',"到期日","餘藥"])
vpn_rediduelv.ModifyCol(1,"150 center")
vpn_rediduelv.ModifyCol(2,"900")
vpn_rediduelv.ModifyCol(3,"150 center")
vpn_rediduelv.ModifyCol(4,"50 center")
vpntab.UseTab("檢驗")
xx:=10
yy:=40
examtype:="date"
vpn_examtypechange:=vpngenwindow.Add("button", "x" . xx . " y" . yy . " w1280 h30 Center","依日期排序")
vpn_examtypechange.OnEvent("Click", (*) => vpn_examtypechange_handle())
vpn_examtypechange_handle(*){
    global examtype
    if (examtype=='date'){
        examtype:='item'
        vpn_exambydatetv.Visible:=false
        vpn_exambyitemtv.Visible:=true
    } else {
        examtype:='date'
        vpn_exambydatetv.Visible:=true
        vpn_exambyitemtv.Visible:=false
    }
}
yy+=30
xx:=10
vpn_exambydatetv := vpngenwindow.Add("TreeView", "x" . xx . " y" . yy . " w1280 h690 -ReadOnly")
vpn_exambydatetv.Visible:=true

vpn_exambyitemtv := vpngenwindow.Add("TreeView", "x" . xx . " y" . yy . " w1280 h690 -ReadOnly")
vpn_exambyitemtv.Visible:=false
vpntab.UseTab("影像")
xx:=10
yy:=40
vpn_imagelv := vpngenwindow.Add("ListView", "x" . xx . " y" . yy . " w1280 h720 -Multi ", ["檢查日期",'醫令來源',"醫令名稱","結果",'查詢碼'])
vpn_imagelv.ModifyCol(1,"120 center")
vpn_imagelv.ModifyCol(2,"150")
vpn_imagelv.ModifyCol(3,"200")
vpn_imagelv.ModifyCol(4,"750")
vpn_imagelv.ModifyCol(5,"0")
vpn_imagelv.OnEvent("DoubleClick",(*) => vpn_imagelv_doubleclick())
vpn_imagelv.OnEvent("ContextMenu",(*) => vpn_imagelv_rightclick())
vpn_imagelv_rightclick(*){
    sr := vpn_imagelv.GetNext(0)
    ClientDatastr:=vpn_imagelv.GetText(sr,5)
    imagequeryscript:=FileRead("Lib\JS\medvpn2_imagequery.js","UTF-8")
    imagequeryscript:=StrReplace(imagequeryscript,"please_change_me_1",ClientDatastr)
    medvpn2web.CoreWebView2.ExecuteScriptAsync(imagequeryscript)  
}
vpn_imagelv_doubleclick(*){
    sr := vpn_imagelv.GetNext(0)
    i1:=vpn_imagelv.GetText(sr,1)
    i2:=vpn_imagelv.GetText(sr,2)
    i3:=vpn_imagelv.GetText(sr,3)
    i4:=vpn_imagelv.GetText(sr,4)
    A_Clipboard:=i3 . "(" . i1 . '_' . i2 . ')`n' . i4
    MsgBox('複製完成')
}
vpntab.UseTab("癌篩")
xx:=10
yy:=40
vpn_helv := vpngenwindow.Add("ListView", "x" . xx . " y" . yy . " w1280 h100", ["日期",'院所',"血壓","AC",'TC',"TG","HDL","LDL","Cre","eGFR","GOT","GPT","UP"])
vpn_helv_width:=[150,150,150,80,80,80,80,80,80,80,80,80,80]
loop vpn_helv_width.Length
{
    vpn_helv.ModifyCol(A_Index, vpn_helv_width[A_Index] . " center")
}
xx:=10
yy+=110
vpn_othertv := vpngenwindow.Add("TreeView", "x" . xx . " y" . yy . " w1280 h580 -ReadOnly")








preexamwindow:=Gui("-Resize","預開單查詢")
preexamwindow.SetFont("s14", "微軟正黑體")
xx:=5
yy:=5
preexamwindow.Add("Text", "x" . xx . " y" . yy . " w50 h30 center", "姓名:")
xx+=50
preexam_name:=preexamwindow.Add("Edit", "x" . xx . " y" . yy . " w350 h30 ReadOnly", "")
yy+=30
xx:=5
preexamwindow.Add("Text", "x" . xx . " y" . yy . " w50 h30 center", "ID:")
xx+=50
preexam_ID:=preexamwindow.Add("Edit", "x" . xx . " y" . yy . " w350 h30 ReadOnly", "")
yy+=30
xx:=5
preexam_list := preexamwindow.Add("ListView", "x" . xx . " y" . yy . " w400 r5 -Multi", ["編號","開單日","預抽血日","sourceHealthRecordId","sourceRegistrationId"])
;preexam_list.add("","1","11","111","1111","11111")
;preexam_list.add("","2","22","222","2222","22222")
preexam_list.ModifyCol(1,"60 center")
preexam_list.ModifyCol(2,"150 center")
preexam_list.ModifyCol(3,"150 center")
preexam_list.ModifyCol(4,"0 center")
preexam_list.ModifyCol(5,"0 center")
preexam_list.OnEvent("DoubleClick",(*) => preexam_list_doubleclick())
;preexamwindow.Show('w410 h260')

preexam_list_doubleclick(*){
    sr := preexam_list.GetNext(0)
    sourceHealthRecordId:=preexam_list.GetText(sr,4)
    sourceRegistrationId:=preexam_list.GetText(sr,5)
    printpreexamscript:=FileRead("Lib\JS\printpreexam.js","UTF-8")
    printpreexamscript:=StrReplace(printpreexamscript,"please_change_me_1",sourceHealthRecordId)
    printpreexamscript:=StrReplace(printpreexamscript,"please_change_me_2",sourceRegistrationId)
    mainphpciisweb.CoreWebView2.ExecuteScriptAsync(printpreexamscript)  
}
;;niisgui
niiswindow := Gui("-Resize","NIIS查詢結果")
niiswindow.SetFont("s14", "微軟正黑體")
xx:=5
yy:=5
niiswindow.Add("Text", "x" . xx . " y" . yy . " w50 h30 center", "流感:")
xx+=50
flusug:=niiswindow.Add("Edit", "x" . xx . " y" . yy-1 . " w125 h30 ReadOnly", "")
flusug.helpMsg := ''
xx+=125
niiswindow.Add("Text", "x" . xx . " y" . yy . " w50 h30 center", "PPV:")
xx+=50
ppvsug:=niiswindow.Add("Edit", "x" . xx . " y" . yy-1 . " w125 h30 ReadOnly", "")
ppvsug.helpMsg := ''
xx+=125
niiswindow.Add("Text", "x" . xx . " y" . yy . " w50 h30 center", "PCV:")
xx+=50
pcvsug:=niiswindow.Add("Edit", "x" . xx . " y" . yy-1 . " w125 h30 ReadOnly", "")
pcvsug.helpMsg := ''
xx+=125
niiswindow.Add("Text", "x" . xx . " y" . yy . " w50 h30 center", "COV:")
xx+=50
covsug:=niiswindow.Add("Edit", "x" . xx . " y" . yy-1 . " w125 h30 ReadOnly", "")
covsug.helpMsg := ''
xx+=125
xx:=5
yy+=31
NIISLV := niiswindow.Add("ListView", "x" . xx . " y" . yy . " w700 r5 ", ["劑次","日期","批號","地點"])
NIISLV.ModifyCol(1, "180 center")
NIISLV.ModifyCol(2, "100 center")
NIISLV.ModifyCol(3, "195 center")
NIISLV.ModifyCol(4, "195 center")

xx:=5
yy+=180
routineLV := niiswindow.Add("ListView", "x" . xx . " y" . yy . " w700 r5 ", ['常規疫苗','上次接種','檢核','建議接種時間','最小接種時間'])
routineLV.ModifyCol(1, "150 center")
routineLV.ModifyCol(2, "150 center")
routineLV.ModifyCol(3, "50 center")
routineLV.ModifyCol(4, "150 center")
routineLV.ModifyCol(5, "150 center")
xx:=5
yy+=180
routinesug:=niiswindow.Add("Text", "x" . xx . " y" . yy . " w700 h30 ", "1120010(X)")
cleanniiswindow()

OnMessage(WM_MOUSEMOVE  := 0x0200, OnMouseEvent)
OnMessage(WM_MOUSELEAVE := 0x02A3, OnMouseEvent)

OnMouseEvent(wp, lp, msg, hwnd) {
    static TME_LEAVE := 0x2, TRACKMOUSEEVENT := Buffer(8 + A_PtrSize * 2), onButtonHover := false

    if msg = WM_MOUSEMOVE && !onButtonHover && (obj := GuiCtrlFromHwnd(hwnd)).HasProp('helpMsg') {
        NumPut('UInt', TRACKMOUSEEVENT.Size,
               'UInt', TME_LEAVE,
               'Ptr', hwnd,
               'Ptr', 10, TRACKMOUSEEVENT)
        DllCall('TrackMouseEvent', 'Ptr', TRACKMOUSEEVENT)
        onButtonHover := true
        ToolTip obj.helpMsg
    }
    if msg = WM_MOUSELEAVE {
        onButtonHover := false
        ToolTip
    }
}
;
cleanniiswindow(*){
    niiswindow.Title:="NIIS查詢結果"
    NIISLV.Delete()
    routineLV.Delete()
    flusug.Value:=""
    flusug.helpMsg := ''
    ppvsug.Value:=""
    ppvsug.helpMsg := ''
    pcvsug.Value:=""
    pcvsug.helpMsg := ''
    covsug.Value:=""
    covsug.helpMsg := ''
    routinesug.Value:=""
}



;;;;;;開啟網頁

;create_mainphpciis()
if (createphpciisdb(dbpath)){
    phpciisdb_status.Value:='已建立資料庫'
    phpciisdb_status.SetFont("cgreen s14", "微軟正黑體")
}




if (!testmode){
create_subphpciis()
if (subphpciis){
    subphpciis.Hide()
}
create_medvpn()
if (medvpn){
    medvpn.Hide()
}
create_medvpn2()
if (medvpn2){
    medvpn2.Hide()
}
create_niis()
if (niis){
    niis.Hide()
}
}

;;;;;;;呼叫功能
OPD_prevention_handle(*){
    global mainphpciis
    global mainphpciisweb
    global mainphpciiswebgo
    if (mainphpciiswebgo){
        if (StrLen(OPD_id.Value)==10){
            mainphpciiswebgo:=false
            jumpscript:=FileRead("Lib\JS\jump.js","UTF-8")
            jumpscript:=StrReplace(jumpscript,"please_change_me_1",OPD_id.Value)
            mainphpciisweb.CoreWebView2.ExecuteScriptAsync(jumpscript)
            mainphpciiswebgo:=true
        }
    }
}

OPD_medvpn_handle(*){
    global medvpn2
    global medvpn2web
    errmsg:=""
    if (medvpn2==0){
        errmsg:=errmsg . "未開啟雲端2`n"
    }
    if (errmsg==""){
        medvpn2script:=FileRead("Lib\JS\medvpn2.js","UTF-8")
        medvpn2web.CoreWebView2.ExecuteScriptAsync(medvpn2script)
    } else {
        MsgBox(errmsg)
        if (InStr(errmsg,'未開啟雲端2')){
            maintab.Choose("網頁")            
        }
    }
}
OPD_niis_handle(theid,thebir){
    global niis
    global niisweb
    global niiswebgo
    if (niiswebgo){
        niiswebgo:=false
        errmsg:=""
        if (StrLen(theid)!=10){
            errmsg:=errmsg . "身份證字號長度不為10`n"
        }
        if (StrLen(thebir)!=7){
            errmsg:=errmsg . "出生年月日長度不為7`n"
        }
        if (niis==0){
            errmsg:=errmsg . "未開啟NIIS`n"
        }
        if (errmsg==""){
            niisscript:=FileRead("Lib\JS\NIIS.js","UTF-8")
            niisscript:=StrReplace(niisscript,"please_change_me_1",theid)
            niisscript:=StrReplace(niisscript,"please_change_me_2",thebir)
            niisweb.CoreWebView2.ExecuteScriptAsync(niisscript)
        } else {
            MsgBox(errmsg)
            if (InStr(errmsg,'未開啟NIIS')){
                maintab.Choose("網頁")       
            }
        }
        niiswebgo:=true
    } else {
        MsgBox("NIIS忙碌中")
    }
}


OPD_readic_handle(*){
    global mainphpciis
    global mainphpciisweb
    global mainphpciiswebgo
    if (mainphpciiswebgo){
        mainphpciiswebgo:=false
        ret:=hisx.GetHCCardInfoInCS()
        retjson:=Jxon_Load(&ret)
        icid:=retjson['HCCardInfoInCS']['HC'][1]['AS_ID']
        if (icid!=""){
            findguyscript:=FileRead("Lib\JS\findguy.js","UTF-8")
            findguyscript:=StrReplace(findguyscript,"please_change_me_1",icid)
            mainphpciisweb.CoreWebView2.ExecuteScriptAsync(findguyscript)
            mainphpciis.show()
        }
        mainphpciiswebgo:=true
    } else {
        MsgBox('PHPCIIS處理中')
    }
}




;列印
printret(rets){
    global c_personalId
    global c_personalTag
    global mainphpciiswebgo
    jres:=Jxon_Load(&rets)
    rv1d:=jres['rv1d']
    rv2d:=jres['rv2d']
    comment:=jres['comment']
    c_personalTag:=comment
    fastreservescript:=FileRead("Lib\JS\fastreserve.js","UTF-8")
    fastreservescript:=StrReplace(fastreservescript,"please_change_me_1",c_personalInfoId)
    fastreservescript:=StrReplace(fastreservescript,"please_change_me_2",rv1d)
    fastreservescript:=StrReplace(fastreservescript,"please_change_me_3",rv2d)
    fastreservescript:=StrReplace(fastreservescript,"please_change_me_4",comment)
    fastreservescript:=StrReplace(fastreservescript,"please_change_me_5",c_healthRecordId)
    if (mainphpciiswebgo){
        mainphpciiswebgo:=false
        mainphpciisweb.CoreWebView2.ExecuteScriptAsync(fastreservescript)
        newpre:=A_ScriptDir . '\newpre.pdf'
        oldpre:=A_ScriptDir . '\oldpre.pdf'
        if FileExist(newpre)
        {
            FileMove newpre, oldpre , 1
        }
        set:=printwindowweb.CoreWebView2.Environment.CreatePrintSettings()
        set.ShouldPrintHeaderAndFooter:=false
        set.MarginTop:=0.1
        set.MarginBottom:=0.1
        ;set.PageHeight:=11.75
        printwindowweb.CoreWebView2.PrintToPdfAsync(newpre, set)
        
        while !FileExist(newpre)
        {
           sleep(50)
        }
       
        printwindow.Hide()
        newpre:=A_ScriptDir . '\newpre.pdf'
        printer:=printer_prescription_edit.Value
        run '"' . SumatraPDF . '" "-print-to" "' . printer . '" "' . newpre . '"'
        mainphpciiswebgo:=true
    } else {
        MsgBox("PHPCIIS忙碌中")
    }
    printwindow.Hide()
}

printsilent(*){

}
;;NIIS網頁
create_niis(*){
    global niis
    global niisweb
    if (!niis){
        gengui:=generateweb("NIIS","Maximize","https://niis.cdc.gov.tw/Login.aspx")
        niis:=gengui.gui
        niisweb:=gengui.web
        niisweb.CoreWebView2.AddHostObjectToScript('ahkgetNIIS', ahkgetNIIS)
        niis_status.Value:="已開啟"
        niis_status.SetFont("cgreen s14", "微軟正黑體")
        
    } else {
        niis.show()
    }
}
;;抓NIIS
ahkgetNIIS(niisresult){
    if (niisresult=='未登入'){
        niis.show()
        MsgBox("請登入NIIS，登入後即可關閉視窗")
    } else {
        jniis:=Jxon_Load(&niisresult)
        cleanniiswindow()
        niiswindow.Title:="NIIS查詢結果_" . jniis['patientName']
        if (jniis['vaccinesuggestion']['flu']['LD']!=""){
            fluld:=cytomky(jniis['vaccinesuggestion']['flu']['LD'],"")
        } else {
            fluld:="不曾接種"
        }
        flusug.Value:= fluld . "(" . jniis['vaccinesuggestion']['flu']['suggest'] . ")"
        flusug.helpMsg:=jniis['vaccinesuggestion']['flu']['errmsg'] . "`n" . jniis['vaccinesuggestion']['flu']['LDsite']
        if (jniis['vaccinesuggestion']['flu']['suggest']=="O"){
            flusug.SetFont("cblue s14", "微軟正黑體")
        } else {
            flusug.SetFont("cblack s14", "微軟正黑體")
        }

        if (jniis['vaccinesuggestion']['PV']['PPV']['PPVLD']!=""){
            ppvld:=cytomky(jniis['vaccinesuggestion']['PV']['PPV']['PPVLD'],"")
        } else {
            ppvld:="不曾接種"
        }
        ppvsug.Value:= ppvld . "(" . jniis['vaccinesuggestion']['PV']['PPV']['PPVsuggest'] . ")"
        ppvsug.helpMsg:=jniis['vaccinesuggestion']['PV']['PPV']['PPVcomment'] . "`n" . jniis['vaccinesuggestion']['PV']['PPV']['PPVLDS']
        if ( jniis['vaccinesuggestion']['PV']['PPV']['PPVsuggest'] =="O"){
            ppvsug.SetFont("cblue s14", "微軟正黑體")
        } else {
            ppvsug.SetFont("cblack s14", "微軟正黑體")
        }

        if (jniis['vaccinesuggestion']['PV']['PCV']['PCVLD']!=""){
            pcvld:=cytomky(jniis['vaccinesuggestion']['PV']['PCV']['PCVLD'],"")
        } else {
            pcvld:="不曾接種"
        }
        pcvsug.Value:= pcvld . "(" . jniis['vaccinesuggestion']['PV']['PCV']['PCVsuggest'] . ")"
        pcvsug.helpMsg:=jniis['vaccinesuggestion']['PV']['PCV']['PCVcomment'] . "`n" . jniis['vaccinesuggestion']['PV']['PCV']['PCVLDS']
        if ( jniis['vaccinesuggestion']['PV']['PCV']['PCVsuggest'] =="O"){
            pcvsug.SetFont("cblue s14", "微軟正黑體")
        } else {
            pcvsug.SetFont("cblack s14", "微軟正黑體")
        }
        
        if (jniis['vaccinesuggestion']['CoV']['LD']!=""){
            covld:=cytomky(jniis['vaccinesuggestion']['CoV']['LD'],"")
        } else {
            covld:="不曾接種"
        }
        covsug.Value:= covld . "(" . jniis['vaccinesuggestion']['CoV']['suggest'] . ")"
        covsug.helpMsg:=jniis['vaccinesuggestion']['CoV']['LDtype'] . "`n" . jniis['vaccinesuggestion']['CoV']['LDsite']
        if ( jniis['vaccinesuggestion']['CoV']['suggest'] =="O"){
            covsug.SetFont("cblue s14", "微軟正黑體")
        } else {
            covsug.SetFont("cblack s14", "微軟正黑體")
        }
        roumsg:=""
        for key, item in jniis['vaccinesuggestion']['nexttoapply']
        {
            roumsg:=roumsg . key . "(" . cytomky(item['recommandtime'],"") . ")、"
        }
        if (roumsg==""){
            roumsg:="不須再接種常規疫苗"
        } else {
            roumsg:="下次應接種:" . SubStr(roumsg,1,StrLen(roumsg)-1)
        }
        routinesug.Value:=roumsg

        ar := jniis['niisapplylist']['ApplyRecord'].Clone()
        for key, item in ar
        {
            name:=item['SRVC']
            name:=StrReplace(name,"CoV_","",false,,-1)
            name:=StrReplace(name,"ooster","",false,,-1)
            NIISLV.Insert(1,"", name, cytomky(item['ID'],""), item['VB'],item['ON'])
        }
        nta := jniis['vaccinesuggestion']['needtoapply'].Clone()
        for key2, item2 in nta
        {
            cc:=routineLV.Add("", item2['name'], cytomky(item2['LD'],""), item2['allsug'],cytomky(item2['recommandtime'],""),cytomky(item2['leastinterval'],""))
        }
        niiswindow.Show("w710 h430")
    }
    
}
;;打卡網頁
create_eipap(*){
    global eipap
    global eipapweb
    if (!eipap){
        gengui:=generateweb("行政管理系統","Maximize","https://eipap1.chshb.gov.tw/Deltaflow_client/login.aspx")
        eipap:=gengui.gui
        eipapweb:=gengui.web
        eipap_status.Value:="已開啟"
        eipap_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        eipap.show()
        nucode:=naturalcode.Value
        idnum:=idcode.Value
        logcode:=nucode . "," . SubStr(idnum,StrLen(idnum)-3,4)
        logineipap:="(function(){wb=document.URL;if (wb.includes('eipap') && wb.includes('chshb.gov.tw')){if (wb.includes('eipap1.chshb.gov.tw/Deltaflow_client/MyPage/iframe.aspx')){alert('已登入')} else {document.getElementById('tx_username1').value = '" . logcode . "';document.getElementById('bn_login1').click();}} else {window.location.href= 'https://eipap1.chshb.gov.tw/Deltaflow_client/login.aspx';}})();"
        eipapweb.CoreWebView2.ExecuteScriptAsync(logineipap)
    }
}
;;公文網頁
create_gdms(*){
    global gdms
    global gdmsweb
    if (!gdms){
        gengui:=generateweb("公文系統","Maximize","https://gdms.chcg.gov.tw/GDMS_LOGIN.aspx")
        gdms:=gengui.gui
        gdmsweb:=gengui.web
        gdms_status.Value:="已開啟"
        gdms_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        gdms.show()
        logingdms:="(function(){ccc=document.URL;d0='https://gdms.chcg.gov.tw/';d1='https://gdms.chcg.gov.tw/GDMS_LOGIN.aspx';if (ccc==d0 || ccc==d1){document.getElementById('txtPIN').value='790118';document.getElementById('Imagebutton1').click();} else {if (!ccc.includes(d0)){window.location.href=d0;}}})();"
        gdmsweb.CoreWebView2.ExecuteScriptAsync(logingdms)
    }
}
;;公告網頁
create_ssap(*){
    global ssap
    global ssapweb
    if (!ssap){
        gengui:=generateweb("衛生局公佈欄","Maximize","http://ssap.chshb.gov.tw/default.php?f_id=D122491269&f_pw=ab790118")
        ssap:=gengui.gui
        ssapweb:=gengui.web
        ssap_status.Value:="已開啟"
        ssap_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        ssap.show()
        ssapweb.CoreWebView2.Navigate('http://ssap.chshb.gov.tw/default.php?f_id=D122491269&f_pw=ab790118')
    }
}

create_trans(*){
    global trans
    global transweb
    if (!trans){
        gengui:=generateweb("轉診平台","Maximize","https://medvpn.nhi.gov.tw/ipre0000/ipre0000s01.aspx")
        trans:=gengui.gui
        transweb:=gengui.web
        trans_status.Value:="已開啟"
        trans_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        trans.show()
    }
}

create_smoke(*){
    global smoke
    global smokeweb
    if (!smoke){
        gengui:=generateweb("戒菸系統","Maximize","https://vportal.hpa.gov.tw/Web/Notice.aspx")
        smoke:=gengui.gui
        smokeweb:=gengui.web
        smoke_status.Value:="已開啟"
        smoke_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        smoke.show()
    }
}
create_lims(*){
    global lims
    global limsweb
    if (!lims){
        gengui:=generateweb("LIMS","Maximize","https://lims.cdc.gov.tw/")
        lims:=gengui.gui
        limsweb:=gengui.web
        LIMS_status.Value:="已開啟"
        LIMS_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        lims.show()
    }
}

top_check_handle(*){
    global isicc
    if (top_check.Value==1){
        isicc:=false
        SetTimer checkiccard, 10
    } else {
        SetTimer checkiccard, 0
    }
}
checkiccard(*){
    global isicc
    global mainphpciis
    global mainphpciisweb
    global medvpn
    global medvpnweb
    global medvpn2
    global medvpn2web
    global medvpn2webgo
    List := ListViewGetContent("Col2", "SysListView322", "中央健康保險署讀卡機控制軟體(主控台)")
    if (InStr(List,'3')){
        if (!isicc){
            isicc:=true
            errmsg:=""
            if (mainphpciis==0){
                errmsg:=errmsg . "未開啟主PHPCIIS`n"
            } else {
                OPD_readic_handle()
            }
            if (medvpn==0){
                errmsg:=errmsg . "未開啟雲端1`n"
            } else {
                medvpnweb.CoreWebView2.ExecuteScriptAsync('location.href="https://medcloud.nhi.gov.tw/imme0008/IMME0008S01.aspx"')
            }
            if (medvpn2==0){
                errmsg:=errmsg . "未開啟雲端2`n"
            } else {
                sc2:="if (document.getElementsByClassName('login-btn blue2').length>0){document.getElementsByClassName('login-btn blue2')[0].click();} else if (document.getElementsByClassName('green-btn').length>0){	document.getElementsByClassName('green-btn')[0].click();}"
                medvpn2web.CoreWebView2.ExecuteScriptAsync(sc2)
            }
        }
    } else {
        isicc:=false
    }
}
createweb(item,itemweb,title,option,url,show,resize){
    if (!item){
        item := Gui("+Resize",title)
        item.show("w800 h600")
        item.show(option)
        itemweb := WebView2.create(item.Hwnd)
        itemweb.CoreWebView2.Navigate(url)
        item.OnEvent("Size", (*) => resizewebwindow(itemweb))
        if (!show){
            item.Hide()
        }
        if (!resize){
            item.Opt("-Resize")
        }
    } else {
        item.show()
    }
}



create_mainphpciis(*){
    global mainphpciis
    global mainphpciisweb

    if (!mainphpciis){
        gengui:=generateweb("PHPCIIS","Maximize","https://phpcis.chshb.gov.tw/")
        mainphpciis:=gengui.gui
        mainphpciisweb:=gengui.web
        mainphpciisweb.CoreWebView2.AddHostObjectToScript('ahkgeturl', ahkgeturl)
        mainphpciisweb.CoreWebView2.AddHostObjectToScript('ahkgetfetch', ahkgetfetch)
        mainphpciisweb.CoreWebView2.AddHostObjectToScript('ahkgetresult', ahkgetresult)
        mainphpciisweb.CoreWebView2.AddHostObjectToScript('ahkcallfunction', ahkcallfunction)
        mainphpciis_status.Value:="已開啟"
        mainphpciis_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        mainphpciis.show()
    }
}
create_medvpn(*){
    global medvpn
    global medvpnweb
    if (!medvpn){
        gengui:=generateweb("雲端藥歷1.0","x5 y5 W1380 H960","https://medcloud.nhi.gov.tw/imme0008/IMME0008S01.aspx")
        medvpn:=gengui.gui
        medvpnweb:=gengui.web
        vpn1_status.Value:="已開啟"
        vpn1_status.SetFont("cgreen s14", "微軟正黑體")
    }
    medvpn.show()
}
create_medvpn2(*){
    global medvpn2
    global medvpn2web
    if (!medvpn2){
        gengui:=generateweb("雲端藥歷2.0","x0 y0 w1100 h150","https://medcloud2.nhi.gov.tw/imu/IMUE1000/")
        medvpn2:=gengui.gui
        medvpn2web:=gengui.web
        medvpn2web.CoreWebView2.AddHostObjectToScript('ahkgetvpn2', ahkgetvpn2)
        vpn2_status.Value:="已開啟"
        vpn2_status.SetFont("cgreen s14", "微軟正黑體")
    } else {
        medvpn2.show()
    }
}
ahkgetvpn2(vpn2result){
    if (vpn2result=='嘗試換卡'){
        MsgBox(vpn2result)
        global medvpn2
        medvpn2.show()
    } else {
        A_Clipboard:=vpn2result
        MsgBox('json')
        vpngenwindow.Show('x5 y5 w1300 h770')
        cleanvpnwindow()
        jvpn:=Jxon_Load(&vpn2result)
        vpngenwindow.Title:="雲端整合_" . jvpn['name']
        revarr:=[]
        for key in jvpn['drug']['modify']['bydate']
        {
            revarr.InsertAt(1, key)
        }
        for key in revarr
        {
            tvout:=vpn_drugbydatetv.Add(key)
            for num, des in jvpn['drug']['modify']['bydate'][key]
            {
                tvin := vpn_drugbydatetv.Add(des,tvout,'Expand')
            }
        }
        for key in jvpn['drug']['modify']['byitem']
        {
            tvout:=vpn_drugbyitemtv.Add(key)
            for des in jvpn['drug']['modify']['byitem'][key]
            {
                tvin := vpn_drugbyitemtv.Add(des,tvout,'Expand')
            }
        }
        for key, residueitem in jvpn['residue']['robject']
        {
            vpn_rediduelv.add("",residueitem['funcDate'],residueitem['ingredient'],residueitem['edate'],residueitem['pres_med_day'])
        }
        revarr:=[]
        for key in jvpn['exam']['modify']['bydate']
        {
            revarr.InsertAt(1, key)
        }
        for key in revarr
        {
            tvout:=vpn_exambydatetv.Add(key)
            for des in jvpn['exam']['modify']['bydate'][key]
            {
                tvin := vpn_exambydatetv.Add(des,tvout,'Expand')
            }   
        }

        revarr:=[]
        for item in jvpn['image']['robject']
        {
            revarr.InsertAt(1, item)
        }


        for item in revarr
        {
            real_inspect_date:=item['real_inspect_date']
            hosp:=StrSplit(item['hosp'],';')[1]
            order_name:=StrSplit(item['order_name'],';')[1]
            result:=item['inspect_result']
            postdata:=item['ipl_case_seq_no'] . "@" . item['read_pos'] . "@@" . item['file_type'] . "@" . item['file_qty']
            vpn_imagelv.add("",real_inspect_date,hosp,order_name,result,postdata)
        }
        for item in jvpn['he']['robject']['result_data']
        {
            try {
                MsgBox(item['title'])
                date:=StrSplit(item['title'],"，")[1]
                site:=StrSplit(item['title'],"，")[2]
                bp:=item['base_sbp'] . "/" . item['base_ebp'] 
                ac:=item['s_09005c']
                tc:=item['cho']
                tg:=item['blod_tg']
                hdl:=item['hdl']
                ldl:=item['ldl']
                cre:=item['blod_creat']
                egfr:=item['egfr']
                got:=item['sgot']
                gpt:=item['sgpt']
                up:=item['urine_protein']
                vpn_helv.Add("",date,site,bp,ac,tc,tg,hdl,ldl,cre,egfr,got,gpt,up)
            }
        }

    }
}
cleanvpnwindow(*){
    vpngenwindow.Title:="雲端整合"
    vpn_drugbydatetv.Delete()
    vpn_drugbyitemtv.Delete()
    vpn_rediduelv.Delete()
    vpn_exambydatetv.Delete()
    vpn_exambyitemtv.Delete()
    vpn_imagelv.Delete()
    vpn_helv.Delete()
    vpn_othertv.Delete()
    vpn_HE_sug.Value:=''
    vpn_BC_sug.Value:=''
    vpn_FOBT_sug.Value:=''
    vpn_ORAL_sug.Value:=''
    vpn_PAP_sug.Value:=''
    vpn_MAMO_sug.Value:=''


}
ahkcallfunction(funcdetail){
    jres:=Jxon_Load(&funcdetail)
    funcname:=jres['funcname']
    funcdata:=jres['funcdata']
    if (funcname=='callchest'){
        chestv2script:=FileRead("Lib\JS\chestv2.js","UTF-8")
        if (funcdata=='main'){
            mainphpciisweb.CoreWebView2.ExecuteScriptAsync(chestv2script)
        } else if (funcdata=='sub'){
            subphpciisweb.CoreWebView2.ExecuteScriptAsync(chestv2script)
        }
    } else if (funcname=='OPD_INFO'){
        OPD_name.Value:=""
        OPD_id.Value:=""
        OPD_bir.Value:=""
        OPD_remark.Value:=""
        global c_name
        global c_personalId
        global c_personalInfoId
        global c_registrationId
        global c_healthRecordId
        global c_personalTag
        global c_birth
        global hadninput
        c_name:=funcdata['info']['result']['name']
        c_personalId:=funcdata['info']['result']['personalId']
        c_personalInfoId:=funcdata['info']['result']['personalInfoId']
        c_registrationId:=funcdata['info']['result']['registrationId']
        c_healthRecordId:=funcdata['info']['result']['healthRecordId']
        c_personalTag:=funcdata['info']['result']['personalTag']
        c_birth:=funcdata['info']['result']['birthday']
        infotxt:=Jxon_Dump(funcdata['info'])
        infotxt:=removesd(infotxt)
        historytxt:=Jxon_Dump(funcdata['history'])
        historytxt:=removesd(historytxt)
        sql:="SELECT * FROM personalInfo WHERE personalID='" . c_personalId . "'"
        table:=selectdb(dbpath,"SELECT * FROM personalInfo WHERE personalID='" . c_personalId . "'")
        if (table.Length>0){
            hadninput:=false
            OPD_remark.Value:=table[2][4]
            hadninput:=true
            sql:="UPDATE personalInfo SET personalInfoId=" . c_personalInfoId . ", basicinfo='" . infotxt . "', history='" . historytxt . "' WHERE personalID='" . c_personalId . "'"
            if (!execdb(dbpath,sql)){
                MsgBox('更新資料庫失敗')
            }
        } else {
            sql:="INSERT INTO personalInfo (personalID, personalInfoId, name, basicinfo, history) VALUES ('" . c_personalId . "'," . c_personalInfoId . ",'" . c_name . "','" . infotxt . "','" . historytxt . "')"
            if (!execdb(dbpath,sql)){
                A_Clipboard:=sql
                MsgBox('新增資料庫失敗')
            }
        }
        OPD_name.Value:=c_name
        OPD_id.Value:=c_personalId
        OPD_bir.Value:=cytomky(c_birth,"")
        maintab.Choose("看診")
    } else if (funcname=='OPD_HE'){
        ggg:=Jxon_Dump(funcdata)
        MsgBox(ggg)
    } else if (funcname=='OPD_SMOKE'){
        ggg:=Jxon_Dump(funcdata)
        MsgBox(ggg)
    } else if (funcname=='OPD_TRANS'){
        ggg:=Jxon_Dump(funcdata)
        MsgBox(ggg)
    } else if (funcname=='preprint'){
        global c_name
        global c_personalId
        global c_personalInfoId
        global c_registrationId
        global c_healthRecordId
        global c_personalTag
        global c_birth
        
        c_name:=funcdata['name']
        c_personalId:=funcdata['personalId']
        c_personalInfoId:=funcdata['personalInfoId']
        c_registrationId:=funcdata['registrationId']
        c_healthRecordId:=funcdata['healthRecordId']
        c_personalTag:=funcdata['personalTag']
        c_birth:=funcdata['birthday']

        printurl:='https://phpcis.chshb.gov.tw/api/v1/prescriptions/list?healthRecordId=' . c_healthRecordId
        printscript:="fetchData('" . printurl . "','GET','')"
        mainphpciisweb.CoreWebView2.ExecuteScriptAsync(printscript)
    } else if (funcname=='OPD_NIIS'){
        OPD_niis_handle(funcdata['id'],cytomky(funcdata['birth'],""))
    } else if (funcname=='OPD_preexam'){
        preexam_name.Value:=funcdata['result'][1]['name']
        preexam_ID.Value:=funcdata['result'][1]['personalId']
        preexam_list.Delete()
        loop funcdata['result'].Length
        {
            item:=funcdata['result'][A_Index]
            preexam_list.Add("",A_Index,item['treatmentDate'],item['scheduleDate'],item['sourceHealthRecordId'],item['sourceRegistrationId'])
        }
        preexamwindow.Show('w410 h260')
    } else if (funcname=='OPD_label'){
        rrr:=Jxon_Dump(jres['funcdata'])
        reg_json:=funcdata['infodata']
        if (reg_json["result"]["gender"]=="1"){
			thegender:="男"
		} else {
			thegender:="女"
		}
        phName:=reg_json["result"]["name"]
		phID:=reg_json["result"]["personalId"]
		phBIRTH:=reg_json["result"]["birthday"]
		array_bir:=StrSplit(phBIRTH,"-")
		phAge:=A_yyyy-1911-array_bir[1]*1
        phBIR:=cytomky(phBIRTH,"/")
        phCHN:=reg_json["result"]["bureauRecordNo"]
		phGEN:=thegender
		phPHO:=reg_json["result"]["phone1"]
		phCel:=reg_json["result"]["mobile"]
		phADD:=reg_json["result"]["residentAddress"]
        ad1:=SubStr(phADD,1,11)
        ad2:=SubStr(phADD,12,11)
        ad3:=SubStr(phADD,23,11)
        qqq2:="tric," . funcdata['des']
        qqq2:="B9999" . qqq2
		aaa:='QRCODE 20,20,L,3,M,0,M2,S2,"' . qqq2 . '"'
        li0:='和美鎮衛生所(X015)'
		li1:=phName . "(" . phGEN . ")"
		li2:=phID . "," . cytomky(phBIRTH,"")
		li3:=phCel
		li31:=phPHO
		li4:=ad1
		li5:=ad2
		li6:=ad3
        helpmsg:='標籤機:' . printer_label_edit.value . "`n姓名:" . phName . "`n身分證字號:" . phID . "`n生日:" . phBIR . "`n年齡:" . phAge . "`n病歷號:" . phCHN . "`n性別:" . phGEN . "`n電話:" . phPHO . "`n手機:" . phCel . "`n住址:" . phADD . "`n要印幾張?"
        pcount:=InputBox(helpmsg,"列印張數","w500 h330").Value
        if (IsInteger(pcount) and pcount > 0){
            hModule2:=DllCall("LoadLibrary", "Str", tscpath)  
            printer:=printer_label_edit.Value
            dllcall("TSCLIB\openport", "AStr", printer)
			dllcall("TSCLIB\setup", "AStr", "60", "AStr", "30", "AStr", "10", "AStr", "8", "AStr", "0", "AStr", "2.5", "AStr", "0")
			dllcall("TSCLIB\clearbuffer")
			dllcall("TSCLIB\sendcommand", "AStr", aaa)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "5", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li0)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "38", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li1)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "71", "int", "30", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li2)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "104", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li3)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "128", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li31)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "152", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li4)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "176", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li5)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "200", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li6)
			dllcall("TSCLIB\printlabel","AStr",  pcount ,"AStr", "1")
			dllcall("TSCLIB\closeport")
			DllCall("FreeLibrary", "UInt", hModule2) 

        }
        
    } else if (funcname=='OPD_jump'){
        global tempjson
        tempjson:=funcdata
        jumpmenu := Menu()
        for key, item in funcdata
        {
            actionname:=key . ':' . item['preventionServiceCode'] . "_" . item['treatmentDate']
            jumpmenu.Add(actionname,jumptourl)
        }
        jumpmenu.Show()
    } else if (funcname=='print_preexam'){
        print_json:=funcdata['print']
        reg_json:=funcdata['reg']
        qqq:=print_json["result"]["testSeqNo"]
		qqq:="B9999" . qqq
		zzz:='QRCODE 20,20,H,5,M,0,M2,S2,"' . qqq . '"'
		zzzli0:="和美鎮衛生所(X015)"
		zzzli1:=print_json["result"]["name"]
		zzzli2:=print_json["result"]["personalId"]
		zzzli3:=print_json["result"]["bureauRecordNo"]
		zzzli4:=""
		zzzli5:=""
        loop print_json["result"]["testTubeNames"].Length
        {
            if (A_index<4){
                zzzli4:=zzzli4 .  print_json["result"]["testTubeNames"][A_index] . "、"
            } else {
                zzzli5:=zzzli5 .  print_json["result"]["testTubeNames"][A_index] . "、"
            }
        }
        zzzli4:=substr(zzzli4,1,strlen(zzzli4)-1)
        zzzli5:=substr(zzzli5,1,strlen(zzzli5)-1)
        if (reg_json["result"]["gender"]=="1"){
			thegender:="男"
		} else {
			thegender:="女"
		}
        phName:=reg_json["result"]["name"]
		phID:=reg_json["result"]["personalId"]
		phBIRTH:=reg_json["result"]["birthday"]
		array_bir:=StrSplit(phBIRTH,"-")
		phAge:=A_yyyy-1911-array_bir[1]*1
        phBIR:=cytomky(phBIRTH,"/")
        phCHN:=reg_json["result"]["bureauRecordNo"]
		phGEN:=thegender
		phPHO:=reg_json["result"]["phone"]
		phCel:=reg_json["result"]["mobile"]
		phADD:=reg_json["result"]["residentAddress"]
		pcount:=print_json["result"]["testTubeNames"].Length
        ad1:=SubStr(phADD,1,11)
        ad2:=SubStr(phADD,12,11)
        ad3:=SubStr(phADD,23,11)
        qqq2:="tric," . funcdata['des']
        qqq2:="B9999" . qqq2
		aaa:='QRCODE 20,20,L,3,M,0,M2,S2,"' . qqq2 . '"'
        li0:='和美鎮衛生所(X015)'
		li1:=phName . "(" . phGEN . ")"
		li2:=phID . "," . cytomky(phBIRTH,"")
		li3:=phCel
		li31:=phPHO
		li4:=ad1
		li5:=ad2
		li6:=ad3
        confirmtext:=li1 . "`n" . "是否列印QRcode1張及標籤紙" . pcount . "張?"
        if MsgBox(confirmtext,"確認",4100) = "YES"
        {
            hModule2:=DllCall("LoadLibrary", "Str", tscpath)  
            printer:=printer_label_edit.Value
            dllcall("TSCLIB\openport", "AStr", printer)
            dllcall("TSCLIB\setup", "AStr", "60", "AStr", "30", "AStr", "10", "AStr", "8", "AStr", "0", "AStr", "2.5", "AStr", "0")
			dllcall("TSCLIB\clearbuffer")
			dllcall("TSCLIB\sendcommand", "AStr", zzz)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "5", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", zzzli0)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "40", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", zzzli1)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "75", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", zzzli2)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "110", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", zzzli3)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "145", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", zzzli4)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "180", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", zzzli5)
			zzzpcount:=1
			dllcall("TSCLIB\printlabel","AStr",  zzzpcount ,"AStr", "1")
			dllcall("TSCLIB\setup", "AStr", "60", "AStr", "30", "AStr", "10", "AStr", "8", "AStr", "0", "AStr", "2.5", "AStr", "0")
			dllcall("TSCLIB\clearbuffer")
			dllcall("TSCLIB\sendcommand", "AStr", aaa)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "5", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li0)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "38", "int", "35", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li1)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "71", "int", "30", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li2)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "104", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li3)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "128", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li31)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "152", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li4)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "176", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li5)
			dllcall("TSCLIB\windowsfont", "int", "200", "int", "200", "int", "25", "int", "0", "int", "0", "int", "0", "AStr", "微軟正黑體", "AStr", li6)
			dllcall("TSCLIB\printlabel","AStr",  pcount ,"AStr", "1")
			dllcall("TSCLIB\closeport")
			DllCall("FreeLibrary", "UInt", hModule2) 
        }
    }
}

jumptourl(ItemName, ItemPos, MyMenu) {
    global subphpciis
    global subphpciisweb
    global subphpciiswebgo
    if (subphpciiswebgo){
        subphpciiswebgo:=false
        errmsg:=""
        if (subphpciis==0){
            errmsg:=errmsg . "未開啟副PHPCIIS`n"
        }
        if (errmsg==""){
            key:=StrSplit(ItemName,":")[1]
            tourl:=tempjson[key]['UURL']
            subphpciisweb.CoreWebView2.Navigate(tourl)
            subphpciis.show()
        } else {
            MsgBox(errmsg)
            if (InStr(errmsg,'未開啟副PHPCIIS')){
                maintab.Choose("網頁")       
            }
        }
        subphpciiswebgo:=true
    } else {
        MsgBox("subPHPCIIS忙碌中")
    }



}

ahkgeturl(restext){

}
ahkgetfetch(fetchresult){
    global c_name
    global c_personalId
    global c_personalInfoId
    global c_registrationId
    global c_healthRecordId
    global c_personalTag
    global c_birth
    jres:=Jxon_Load(&fetchresult)
    apiurl:=jres['api']
    apiresult:=jres['result']
    if (InStr(apiurl,'https://phpcis.chshb.gov.tw/api/v1/prescriptions/list?healthRecordId=')){
        opdtext:=FileRead(opdpath,'UTF-8')
        newscript:="geneprescription(" . apiresult . ",'" . opdtext . "','" . c_name . "','" . c_personalTag . "')"
        printwindowweb.CoreWebView2.ExecuteScriptAsync(newscript)
        printwindow.show("w850 h1000")
    } 
}
ahkgetresult(result){
    
}

removesd(str){
    str:=StrReplace(str,"'","",false,,-1)
    return str
}
cytomky(cy,split){
    try {
        if (InStr(cy,"T")){
            cy:=StrSplit(cy,'T')[1]
        }
        acy:=StrSplit(cy,'-')
        mky:=acy[1]-1911
        mky:="000" . mky
        mky:=SubStr(mky,StrLen(mky)-2,3)
        res:= mky . split . acy[2] . split . acy[3] 
        return res
    } catch {
        return ""
    }
}

create_subphpciis(*){
    global subphpciis
    global subphpciisweb
    if (!subphpciis){
        gengui:=generateweb("subPHPCIIS","w1600 h900 xcenter ycenter","https://phpcis.chshb.gov.tw/")
        subphpciis:=gengui.gui
        subphpciisweb:=gengui.web
        subphpciisweb.CoreWebView2.AddHostObjectToScript('ahkgeturl', ahkgeturl)
        subphpciisweb.CoreWebView2.AddHostObjectToScript('ahkgetfetch', ahkgetfetch)
        subphpciisweb.CoreWebView2.AddHostObjectToScript('ahkgetresult', ahkgetresult)
        subphpciisweb.CoreWebView2.AddHostObjectToScript('ahkcallfunction', ahkcallfunction)
        subphpciis_status.Value:="已開啟"
        subphpciis_status.SetFont("cgreen s14", "微軟正黑體")
        subphpciis.Opt("-Resize")
    } else {
        subphpciis.show()
    }
}


fastlogin(item,itemweb,type){
    if (!itemweb){
        if (type=='main'){
            create_mainphpciis()
        } else if (type=='sub'){
            create_subphpciis()
        }
        
    } else {
        P_A:=PHPCIIS_account.Value
        P_P:=PHPCIIS_password.Value
        fastloginscript:=FileRead("Lib\JS\fastlogin.js","UTF-8")
        fastloginscript:=StrReplace(fastloginscript,"please_change_me_1",P_A)
        fastloginscript:=StrReplace(fastloginscript,"please_change_me_2",P_P)
        fastloginscript:=StrReplace(fastloginscript,"please_change_me_3",type)
        itemweb.CoreWebView2.ExecuteScriptAsync(fastloginscript)
        item.show()
    }
}

webgoto(str){
    global mainphpciis
    global mainphpciisweb
    global mainphpciiswebgo
    if (mainphpciiswebgo){
        mainphpciiswebgo:=false
        webgotoscript:=FileRead("Lib\JS\go" . str . ".js","UTF-8")
        mainphpciisweb.CoreWebView2.ExecuteScriptAsync(webgotoscript)
        mainphpciis.show()
        mainphpciiswebgo:=true
    } else {
        MsgBox("PHPCIIS忙碌中")
    }
}

;;候診
;;看診
;;掛號
;;設定

nowedit:=""
printer_prescription_button.OnEvent("Click", (*) => printermenushow(printer_prescription_edit))
printer_label_button.OnEvent("Click", (*) => printermenushow(printer_label_edit))
PHPCIIS_account.OnEvent('Change',saveini)
PHPCIIS_password.OnEvent('Change',saveini)
SMOKE_account.OnEvent('Change',saveini)
SMOKE_password.OnEvent('Change',saveini)
naturalcode.OnEvent('Change',saveini)
idcode.OnEvent('Change',saveini)
printer_prescription_edit.OnEvent('Change',saveini)


printer_label_edit.OnEvent('Change',saveini)
saveini(*){
    if (!loadingini){
        IniWrite(PHPCIIS_account.Value,"setting.ini","setting","P_A")
        IniWrite(PHPCIIS_password.Value,"setting.ini","setting","P_P")
        IniWrite(SMOKE_account.Value,"setting.ini","setting","S_A")
        IniWrite(SMOKE_password.Value,"setting.ini","setting","S_P")
        IniWrite(naturalcode.Value,"setting.ini","setting","nuturalcode")
        IniWrite(idcode.Value,"setting.ini","setting","idcode")
        IniWrite(printer_prescription_edit.Value,"setting.ini","setting","printer_prescription")
        IniWrite(printer_label_edit.Value,"setting.ini","setting","printer_label")
    }
}
loadini(*){
    loadingini:=true
    PHPCIIS_account.Value:=IniRead("setting.ini","setting","P_A")
    PHPCIIS_password.Value:=IniRead("setting.ini","setting","P_P")
    SMOKE_account.Value:=IniRead("setting.ini","setting","S_A")
    SMOKE_password.Value:=IniRead("setting.ini","setting","S_P")
    naturalcode.Value:=IniRead("setting.ini","setting","nuturalcode")
    idcode.Value:=IniRead("setting.ini","setting","idcode")
    printer_prescription_edit.Value:=IniRead("setting.ini","setting","printer_prescription")
    printer_label_edit.Value:=IniRead("setting.ini","setting","printer_label")
    loadingini:=false
}



printermenushow(targetitem){
    global nowedit
    nowedit:=targetitem
    printermenu := Menu()
    printerlist:=getprinter()
    for index, item in printerlist
    {
        printermenu.Add(item,selectprinter)
    }
    printermenu.Show()
}

selectprinter(ItemName, ItemPos, MyMenu) {
    nowedit.Value:=ItemName
    saveini()
}

generateweb(windowtitle,size,url){
    retobj:={}
    newwindow := Gui("+Resize",windowtitle)
    newwindow.show("w800 h600")
    newwindow.show(size)
    newweb := WebView2.create(newwindow.Hwnd)
    newweb.CoreWebView2.Navigate(url)
    newwindow.OnEvent("Size", (*) => resizewebwindow(newweb))
    retobj.gui:=newwindow
    retobj.web:=newweb
    return retobj
}
resizewebwindow(web){
    try web.Fill()
}



getprinter(*){
    devicearray:=[]
    loop reg "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Devices"
    {
        devicearray.Push(A_LoopRegName)
    }
    return devicearray
}


readic(*){
    retobj:=Map()
    VarSetStrCapacity(&pBuffer, 72)
    iBufferLen := 72
    hModule := DllCall("LoadLibrary", "str", "csHis.dll", "ptr")
    DllCall("csHis\csOpenCom", "int", 0, "ptr")
    errcode := DllCall("csHis\hisGetBasicData", "str", pBuffer, "int*", iBufferLen, "int")
    
    if (errcode = 0) {
        pBuffer:= StrGet(StrPtr(pBuffer), "CP0")
        ddd := StrPut(pBuffer, "CP0") - 1 - StrLen(pBuffer)
        retobj["name"] := Trim(SubStr(pBuffer, 13, 20 - ddd))
        retobj["id"] := trim(substr(pBuffer,33-ddd,10))
        retobj["bir"] := trim(substr(pBuffer,43-ddd,7))
    } else {
        return false
    }
    DllCall("csHis\csCloseCom", "Int", 0, "CDecl")
    DllCall("FreeLibrary", "UInt", hModule, "ptr")
    return retobj
}


loadnum(*){
    nownum:=iniread("\\172.18.3.229\serverclient\option.ini","call","num")
    Gnownum:="000" . nownum
    Gnownum:=SubStr(Gnownum,StrLen(Gnownum)-2,3)
    callman.Value:=Gnownum
}



;;;;;DB


createphpciisdb(dbpath){
    result:=connectdb(dbpath)
    if (result.code!=0){
        return false
    } 
    dbpointer:=result.dbpointer
    dberrmsg:=0
    result:=_execdb(dbpointer,'CREATE TABLE IF NOT EXISTS personalInfo (personalID TEXT PRIMARY KEY, name TEXT, personalInfoId INTEGER, remark TEXT, basicinfo TEXT, history TEXT);')
    if (result.code!=0){
        return false
    }
    
    result:=closedb(dbpointer)
    if (result.code!=0){
        return false
    } 
    return true

}
selectdb(dbpath,sql){
    result:=connectdb(dbpath)
    if (result.code!=0){
        return false
    } 
    dbpointer:=result.dbpointer
    dberrmsg:=0
    result:=getdb(dbpointer,sql)
    if (result.code!=0){
        return false
    }  
    res:=result.table
    result:=closedb(dbpointer)
    if (result.code!=0){
        return false
    } 
    return res
}
execdb(dbpath,sql){
    result:=connectdb(dbpath)
    if (result.code!=0){
        return false
    } 
    dbpointer:=result.dbpointer
    dberrmsg:=0
    result:=_execdb(dbpointer,sql)
    if (result.code!=0){
        return false
    }  
    result:=closedb(dbpointer)
    if (result.code!=0){
        return false
    } 
    return true
}


toutf8(string){
	buf := Buffer(StrPut(string, 'utf-8'))
	StrPut(string, buf, 'utf-8')
	return buf
}
connectdb(dbpath){
    dbpointer:=0
	hModule := DllCall("LoadLibrary", "Str", sqlpath, "Ptr") 
	ptrdb := toutf8(dbpath)
	result := DllCall("sqlite3.dll\sqlite3_open", "ptr", ptrdb, "Ptr*", &dbpointer, "CDecl Int")
	retobj:={
		code:result,
        dbpointer:dbpointer,
		msg:"",
	}
	return retobj
}
closedb(dbpointer){
	result:=DllCall("sqlite3.dll\sqlite3_close", "Ptr", dbpointer, "CDecl Int")
	retobj:={
		code:result,
		msg:"",
	}
	return retobj
}
_execdb(dbpointer,sql){
	ptrsql:= toutf8(sql)
	dberrmsg:=0
	result := DllCall("sqlite3.dll\sqlite3_exec", "Ptr", dbpointer, "Ptr", ptrsql, "Ptr", 0, "Ptr", 0, "Ptr*", &dberrmsg, "CDecl Int")
	if (result!=0){
		msg:=StrGet(dberrmsg,'UTF-8')
	} else {
		msg:=""
	}
	retobj:={
		code:result,
		msg:msg,
	}
	return retobj
}
getdb(dbpointer,sql){
	dberrmsg:=0
	dbtable:=0
	dbrow := 0
	dbcol := 0
	ptrsql:= toutf8(sql)
	result := DllCall("sqlite3.dll\sqlite3_get_table", "Ptr", dbPointer, "Ptr", ptrsql, "Ptr*", &dbtable, "Ptr*", &dbrow , "Ptr*", &dbcol , "Ptr*", &dberrmsg , "CDecl Int")
	table:=[]

	if (dbrow>0 && dbcol>0){
		loop dbrow+1
		{
			line:=[]
			cr:=A_Index
			loop dbcol
			{
				cc:=A_Index
				offset := ((cr-1) * dbcol + (cc-1)) * A_PtrSize
				address:=NumGet(dbtable,offset,'Ptr')
                try {
                    cellData := StrGet(address,'UTF-8')
                } catch {
                    cellData:=""
                }
				line.Push(cellData)
			}
			table.Push(line)
		}
	} 
	if (result!=0){
		msg:=StrGet(dberrmsg,'UTF-8')
	} else {
		msg:=""
	}
	retobj:={
		code:result,
		msg:msg,
		table:table,
	}
	return retobj
	
}


;;;hotkey
NumpadAdd::
{
    WinActivate(programtitle)
    Cnum:=callman.Value+1
    Gnownum:="000" . Cnum
    Gnownum:=SubStr(Gnownum,StrLen(Gnownum)-2,3)
    callman.Value:=Gnownum
    callman.Focus()
}


#HotIf WinActive(programtitle)
NumpadSub::
{
    Cnum:=callman.Value-1
    Gnownum:="000" . Cnum
    Gnownum:=SubStr(Gnownum,StrLen(Gnownum)-2,3)
    callman.Value:=Gnownum
    callman.Focus()
}

NumpadEnter::
{
    Cnum:=callman.Value*1
    Gnownum:="000" . Cnum
    Gnownum:=SubStr(Gnownum,StrLen(Gnownum)-2,3)
    nownum:=iniread("\\172.18.3.229\serverclient\option.ini","call","num")
    if Cnum is integer
    {
        if (Cnum==nownum){
            if (Cnum<200){
                IniWrite(1,"\\172.18.3.229\serverclient\option.ini","call","same")
            }
        }
        IniWrite(Gnownum,"\\172.18.3.229\serverclient\option.ini","call","num")
    }
    else
    {
        msgbox("非正整數")
        loadnum()
    }
}