<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=shift_jis">
<title>Brillia東大前 thanks page</title>
<link href="../include/css/import.css" rel="stylesheet" type="text/css" media="screen,print">
<style type="text/css">
<!--
body,td {font-size:12px;line-height:16px;}
.color_white {color:#000000;}
.style1 {
	color: #FF0000;
	font-weight: bold;
}
-->
</style>
</head>
<body text="#000000" link="#0000ff" vlink="#5d0000" alink="#444444">
<center>
  <br>
  <table width="600" border="0" cellpadding="1" cellspacing="0" bgcolor="#333333">
    <tr>
     <td align="center" valign="top">
        <table width="100%"  border="0" cellspacing="0" cellpadding="0">
        	<tr>
         	     <td height="51" align="center" bgcolor="#FFFFFF" class="color_white">
         	     <div align="center">
         	     <br>
			    この度は、資料請求いただきまして、誠にありがとうございます。<br>
				今後、「<span class="style1">Brillia東大前</span>」の最新情報を、ホームページなどにてご案内させていただきます。<br>
				どうぞよろしくお願いいたします。<br>
				<br><br>
				【最新情報はこちらから】<br>
				<a href="http://www.bt4.jp/" style="color: #333333;">http://www.bt4.jp/</a><br>
				<br>
				<a href="javascript:window.close()"style="color: #333333;">【閉じる】</a>
	            <br><br>
         	     </div></td>
        	</tr>
     	</table>
     </td>
    </tr>
 </table>
</center>

<?
$email = htmlspecialchars($_GET['email']);
$productID = htmlspecialchars($_GET['productID']);
?>

<!--adplan-->
<SCRIPT LANGUAGE="JavaScript">
var adp_header = "http" , adp_counter_domain = "c.p-advg.com" , adp_aid = "4496", adp_sid = "1", adp_pnm = "", adp_arbit="&email=<?=$email?>&productID=<?=$productID?>";
</SCRIPT>
<SCRIPT LANGUAGE="JavaScript" src="http://c.p-advg.com/adpCnt/js/createSubmitTag.js"></script>
<NOSCRIPT>
<img src="http://c.p-advg.com/adpCnt/s?aid=4496&sid=1&pnm=&nos=1&email=<?=$email?>&productID=<?=$productID?>" width="1" height="1" >
</NOSCRIPT>
<!--adplan-->

<!--新adplan-->
<script language="JavaScript" type="text/javascript" src="http://o.advg.jp/ojs?aid=1519&pid=6&ot-sales=&ot-email=<?=$email?>&ot-property=<?=$productID?>&ot-usrid=****&ot-shonin=****" charset="UTF-8">
</script>
<noscript>
<iframe src="http://o.advg.jp/oif?aid=1519&pid=6&ot-sales=&ot-email=<?=$email?>&ot-property=<?=$productID?>&ot-usrid=****&ot-shonin=****" width="1" height="1">
</iframe>
</noscript>
<!--新adplan-->

<!--20110524start-->
<script type='text/javascript' src='https://formassist.jp/FormAssist_tag.js?user=tatemono3&num=999'></script>
<!--20110524end-->

</body>
</html>