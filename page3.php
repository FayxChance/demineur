<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript" src="page3script.js">
			</script>
			
			
			<meta charset="UTF-8" />
			<title>『Graphique』</title>
	    <link href="stylesheet.css" rel="stylesheet" type="text/css">
		</head>
		<body style="background-color:#2C2C2C;"> 
		<h1 align="center" class="Titre" style="color: #09C; font-weight: bolder; font-family: ARCADECLASSIC;" >『Graphique』</h1><br><br>
            <input type="text" id="champ1" value="0" >
            <input type="text" id="champ2" value="0" > <br> <br>
            <input type="button" id="button1" onClick="demarrercomptage(); compteur(); " value="Lancer compteur">
            <input type="button" id="button2" onClick="arretercomptage(); arret();" value="Arreter"> 
            <input type="button" id="button3" onClick="Reset();" value="Reset">
            <input type="button" id="button4" onClick="chrono();" value="Horloge buguée mais stylée">                    
			<h3 class="soustitre" style="color: orange; font-family: ARCADECLASSIC;" >Realise avec l'aide de mon frere :3 (pour la partie fonction) </h3>
			<p>
			  <canvas id="canevas1" width="1000" height="1000" style="background-color:rgba(0,0,0,1)" onclick="dessinertraits(); evoluer();" name="canvas">
             
			Le navigateur ne gère pas la balise CANVAS ...
			</canvas>
            <!--<canvas id="canevas2" width="600" height="600" style="background-color: rgba(0,0,0,1); position: absolute; top: auto;"  name="canvas2" >
             Le navigateur ne gère pas la balise CANVAS ...
            </canvas> -->
            <canvas id="canevas3" width="600" height="600" style="background-color: rgba(0,0,0,1); position: absolute;left: 1008px; top: auto; width: 350px; height: 350px;"  name="canvas3" >
            Le navigateur ne gère pas la balise CANVAS ...
            </canvas>  
        </p>
       
		</body>
	</html>	