<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<script language="JavaScript" type="text/javascript">
	function suite()
	{
		var s = document.getElementById('champ').value;
		var n = 1;
		var c = 1/Math.sqrt(n);
		
		while(c<=s)
		{
			n++;
			c = c + Math.sqrt(n);
		}
		
		document.getElementById("resultat").innerHTML=c;
		document.getElementById("resultat2").innerHTML=n;
	}
</script>

<style type="text/css">
@import url("ARCADECLASSIC/stylesheet.css");


	.bouton
	{
	position: absolute;
	top : 100px;
	font-size: 36px;
	color: #30C;
	background-color: #000000;
	left: 40%;
	font-family: ARCADECLASSIC;
	width: 289px;
	}
	.champ
	{
	position: absolute;
	top : 23px;
	font-size: 36px;
	color: #30C;
	background-color:;
	left: 40%;
	font-family: ARCADECLASSIC;
	width: 280px;
	background-color: #000000;
	color:#CF0
	
	}
	.resultat2
	{
	position: absolute;
	top : 188px;
	font-size: 36px;
	color: #30C;
	left: 40%;
	font-family: ARCADECLASSIC;
	width: 280px;
	background-color: #000000;
	color: #0FF;
	text-align: center;
	}
	.resultat1
	{
	position: absolute;
	font-size: 36px;
	color: #30C;
	left: 40%;
	font-family: ARCADECLASSIC;
	width: 280px;
	background-color: #000000;
	color: #F0F;
	top: 241px;
	text-align: center;
	}

</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Rienmann</title>
</head>

<body style="background-color:#000">


<form>
<input name="champ" type="text" class="champ" id="champ"/>
</form>
<input name="Bouton" type="button" class="bouton" id="button" onClick="suite();" value="Lancez la suite"/>

<div id="resultat" class="resultat1"> </div>
<div id="resultat2"class="resultat2"> </div>
</body>
</html>
