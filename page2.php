<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript">
			<!--
				function calculertermesuite()
				{
				
				var uzero=1000;
				var n = parseInt(document.getElementById("champ1").value);
				var sommesuite =uzero;
				
				for(var i=1;i<=n;i++)
				{
				uzero=(uzero*0.99)+1;
				sommesuite = (uzero+sommesuite);
				}
				document.getElementById("champ2").value = uzero;
				document.getElementById("champ3").value = sommesuite;
				}
				
				function verdant()
				{
				var motOrigine= document.getElementById("champ1").value;
				var longueurMot = motOrigine.length;
				var i =0;
				var motFinal="";
				var lettre="";
				while(i<=longueurMot)
					{
					lettre=motOrigine.charAt(longueurMot-i);
					motFinal= motFinal+lettre;
					i++;
					}
				document.getElementById("champ2").value=motFinal;
				
				}
			
				function compteroccurence()
				{
				var mot= document.getElementById("champ1").value;
				var lettre= document.getElementById("champ2").value;
				var repetionlettre = 0;
				var taillemot = mot.length;
				var compteurtaille = 0;
				while(compteurtaille<=taillemot)
					{
					if(lettre==mot.charAt(compteurtaille))
						{
						repetionlettre++;
						}
					compteurtaille++;
					document.getElementById("champ3").value=repetionlettre;
					}

				}
			
			-->
			</script>
			<meta charset="UTF-8" />
			<title>『Suite』</title>
	    <link href="ARCADECLASSIC/stylesheet.css" rel="stylesheet" type="text/css">
		</head>
		<body style="background-color:#030">
			<h1 style="color: #6C6; text-align: center; font-family: ARCADECLASSIC;" > 『Suite』</h1>
            <br /> 			
              
            <input name="champ2" type="text"	class="champ2" id="champ2" value=""					/>
            <input type="text" id="champ3" value=""	class="champ3"									/>
            <br />  			
            <input type="button" value="Verdant" onClick="verdant();"								/>
            <br />			
            
            <input type="button" value="Compter la lettre" onclick="compteroccurence();"			/>
            <input name="champ1" type="text" class="champ1" id="champ1" value=""					/>
            <br />

            <input class="suitebouton" type="button" value="Suite" onClick="calculertermesuite();"	/>

		        
		</body>
  </html>