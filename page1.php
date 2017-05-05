<!DOCTYPE html>
  <html>
    <head>
	
		<script type="text/javascript">
		<!--
		
		function permuter()
			{
			var y= document.getElementById("champ1").value;
			var z= document.getElementById("champ2").value;
			document.getElementById("champ2").value=y;
			document.getElementById("champ1").value=z;
			}
			
		function clic()
			{
			alert("Vous avez cliqué sur le bouton !");
			}
			
		function copiercoller()
			{
			var x=document.getElementById("champ1").value;
			document.getElementById("champ2").value=x;
			}
			
		function concatener()
			{
			var champ1add = document.getElementById("champ1").value;
			var champ2add = document.getElementById("champ2").value;
			var champ3add = champ1add + champ2add;
			document.getElementById("champ3").value=champ3add;
			document.getElementById("champ3").size=champ3add.length;
			}
			
		function ajouterentiers()
			{
			var entier1 = document.getElementById("champ1").value;
			var entier2 = document.getElementById("champ2").value;
			var sommeEntier = parseInt(entier1) + parseInt(entier2);
			document.getElementById("champ3").value= sommeEntier; 
			}
			
		function ajouterreels()
			{
			var reel1 = document.getElementById("champ1").value;
			var reel2 = document.getElementById("champ2").value;
			var sommeReel = parseFloat(reel1) + parseFloat(reel2);
			document.getElementById("champ3").value= sommeReel;
			}	
		function extraire()
			{
			var motaExtraire = document.getElementById("champ1").value;
			var lettreaExtraire = document.getElementById("champ2").value;
			var motFinale = motaExtraire.charAt(lettreaExtraire);
			document.getElementById("champ3").value= motFinale;
			}
			
		function calculervaleurs()
			{ 
			var debutTableau = parseInt(document.getElementById("champ1").value);
			var finTableau = parseInt(document.getElementById("champ2").value);
			var pasTableau = parseFloat(document.getElementById("champ3").value);
			var tableau=new Array(); 
			var affichage="";
			
			for (var i=debutTableau ; i <= finTableau ; i=i+pasTableau) 
				{ tableau[i]= ((Math.exp(1/i)*(1+(1/i))+1)/(Math.pow((1+Math.exp(1/i))),2))};
					
			for (var j = debutTableau ; j < tableau.length ; j = j + pasTableau) 
					{ affichage = affichage + "La racine carrée de " + j + " vaut environ " + tableau[j] + "<br />"; }
					
			document.getElementById("section1").innerHTML=affichage;
			}			
           
		function remplirTableau()
		
			{
			var mot = document.getElementById("champ1").value;
			var longueurMot = mot.length;
			var tableau = new Array();
			var affichage = "";
			var nombre = "";
			var compteurTableau = 0;
			var premiereLettre = 1;
			var compteurLongueurMot = 0;
			var compteurEspace = 0;
			var checkEspaceDebut = 0;

			if(checkEspaceDebut == 0)
				{
				while(mot.charAt(compteurEspace)== " ")
					{
					compteurLongueurMot++;
					checkEspaceDebut = 1;
					compteurEspace++;
					}
				}
			
			

			for(compteurLongueurMot; compteurLongueurMot <= longueurMot ; compteurLongueurMot++) 		
					{
					nombre = nombre + mot.charAt(compteurLongueurMot);										//Ajoute les chiffres entre eux pour former un nombre


					if(mot.charAt(compteurLongueurMot) != " ")												//Test si le charactere est different un espace
						{
						tableau[compteurTableau] = nombre;
						}												//Si oui rentre dans le tableau a la case n le nombre
					else 																					//Autrement
						{
						if(mot.charAt(compteurLongueurMot+1) == " ")
							{
							compteurTableau--;
							}
						compteurTableau++;
						nombre = "";
						}																					//Change de ligne de tableau donc n+1 (passe a la 2 ligne)
					
					
					}
			for( var j = 0 ; j < tableau.length ; j = j + 1 )												//Ecrit les nombres sur chaque ligne
					{ affichage = affichage +  tableau[j] + "<br />";}
			
			document.getElementById("section1").innerHTML = affichage;
			
			}
		
		function minimumtableau()
		
		{
		var mot = document.getElementById("champ1").value;
		var longueurMot = mot.length;
		var tableau = new Array();
		var affichage = "";
		var nombre = "";
		var compteurTableau = 0;
		var nombreaChercher = 0;
		var nombreaAfficher = ""
		
		for(var compteurLongueurMot = 0; compteurLongueurMot <= longueurMot ; compteurLongueurMot++) 		
					{
					nombre = nombre + mot.charAt(compteurLongueurMot);				//Ajoute les chiffres entre eux pour former un nombre
					
					if(mot.charAt(compteurLongueurMot) != " ")						//Test si le charactere est different un espace
						{
						tableau[compteurTableau] = nombre;
						}						//Si oui rentre dans le tableau a la case n le nombre
					else 															//Autrement
						{
						compteurTableau++;
						nombre = "";
						}										//Change de ligne de tableau donc n+1 (passe a la 2 ligne)
					
					
					}
		for( var j = 0 ; j <= tableau.length ; j++  )						//Ecrit les nombres sur chaque ligne
					{
						nombreaChercher = Math.min(tableau[j] + ", " + nombreaChercher);
						}
			
			document.getElementById("section1").innerHTML =nombreaChercher;
		  }
  

		
		/* Ceci est un commentaire Javascript. */  

		-->
		</script>

		<meta charset="UTF-8" />
		<title>『Premier script』</title>
    <style type="text/css">
    @import url("ARCADECLASSIC/stylesheet.css");

    .Titre {
	font-size: 70px;
	font-family: ARCADECLASSIC;					
	text-align: center;
	color: #0C0;
	text-shadow: 4px 4px 4px #060;
			}
    .SousTitre {
	color: #FFF;
}
    .SousTitre {
	color: White;
}
    </style>
    </head>
    <body
	style=
	"background-color: rgb(17,0,50); color: #01A6FE; font-family: ARCADECLASSIC; font-size: 18px;"
    >
		
		<h1
		style=						
		"color: #F0F; font-family: ARCADECLASSIC; font-weight: bold; font-size: 36px; text-align: center;"><img src="images/pieceechec.png" width="20" height="54">		
                        
                        							<!--Modification css-->          <span class="Titre">Premiers Scripts</span> <img src="images/pieceechec.png" width="20" height="54">
 
		</h1>
   	<h2 class="SousTitre"
		style =
		"color: #FFF; text-align: center; text-shadow: 4px 2px 2px #CCC;"> EZ game Ez life </h2>
   	<form>
   	  <p>
   	    <input type="text" id="champ1" style="color:rgb(0,255,0); background-color:black;" value="">
   	    <br /> 			
   	    <!-- Champs-->
   	    <input style="color:rgb(0,255,0); background-color:black;" type="text" id="champ2" value="" 																	/><br />			<!-- Champs-->
   	    <input style="color:rgb(0,255,0); background-color:black;" type="text" id="champ3" value=""																		/>
   	  </p>
   	  <p><br />			
   	    <!-- Champs-->
   	    <input style="color: rgb(0,102,153); background-color: #033; font-family: ARCADECLASSIC;" type="button" value="Cliquer ici pour faire pop vous ..." onclick="clic();"							/>
   	    <br /> 			<!-- Pour faire pop vous avez ... BOUTON -->
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Cliquer ici pour permuter." onClick="permuter();"								/>
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Cliquer ici pour faire l'addition chelou." onClick="concatener();"				/>
   	    <br /> 			
   	    <!-- Pour permuter BOUTON	-->
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Cliquer ici pour additionner 2 réels." onClick="ajouterreels();"				/>
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Cliquer ici pour additionner 2 entiers." onClick="ajouterentiers();"			/>
   	    <br /> 			
   	    <!-- Pour faire l'addition chelou BOUTON -->
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Cliquer ici pour savoir le caractere i à l'emplacement x" onClick="extraire();"	/>
   	    <br />			
   	    <!--Addition 2 entiers Bouton-->
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Calculer valeur" onClick="calculervaleurs();"									/>
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Ecrire nombre sur chaque ligne" onClick="remplirTableau();"						/>
   	    <input style="color: rgb(0,102,153); background-color: #003333; font-family: ARCADECLASSIC;" type="button" value="Trouver le minimum" onClick="minimumtableau();"									/>
   	    <br />			
      <!--Addition 2 reels Bouton--></p>
    </form>
	<div style="color:rgb(255,255,255);" id="section1">																								</div>
  </body>
</html>