<? include ('verif.php'); ?>
<!doctype html>
<html><head>
  	<audio src="Music/demineurBackground.mp3"  loop type="audio/mpeg" controls id="backgroundMusic" ></audio>  <!-- Musique avec controleurs en haut -->
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    
      <script language="Javascript" src="demineurScriptCarre.js">  
	  </script><!-- Script concernant l'univers carre -->
      <script language="Javascript" src="demineurScriptHexa.js">  
	  </script><!-- Script concernant l'univers hexa  -->
      <script language="Javascript" src="demineurScriptCel.js">  
	  </script><!-- Script concernant l'objet cellule -->
      <script language="Javascript" src="demineurScriptPage.js">  
	  </script><!-- Script concernant la page  		  -->
      
      <style type="text/css" src="demineurPersostyle.css"></style>
      
      <link href="demineurPersostyle.css" rel="stylesheet" type="text/css">
      <link href="login.php"  >
      <link href="logout.php" >
     
      <title>Demineur</title>

      
   
  </head>
  <body>
    <div>  
    <b id="logout"><a href="logout.php">Log Out</a></b>
    </div>
    <div><? include ('score.php'); ?></div>
    <div style="cursor:url(cursor/cursorShiro.png)" id="pageJeu">
     
        <canvas id="demineurId" width="800" height="800" name="monCanevas" class="demineurClass">
	    Texte si navigateur ne supporte pas la balise Canvas
        </canvas>
        <input value="Gēmu o hajimeru" type="button" onClick="demarrage();" id="start" class="start" ><br>
        <p class="texte" id="textCo">Nombre de colonne :</p>  <input type="number" value="5" id="nbColonne" class="selecteur" ><br>
        <p class="texte" id="textLi">Nombre de ligne :	</p>  <input type="number" value="5" id="nbLigne"   class="selecteur" ><br>
        <p class="texte" id="textBo">Nombre de bombe :	</p>  <input type="number" value="0" id="nbBombe"   class="selecteur" ><br>
        <form>
	  		<p class="selecteurJeu" id="TextCarre"> Jeu carre </p></br>
      		<input value="jeu carre" 	 id="ChoixCarre" 	name="ChoixJeu" type="radio"  class="selecteurJeu" checked></br>
            <p class="selecteurJeu" id="TextHexa"> Jeu hexagonal </p></br>
      		<input value="jeu hexagonal" id="ChoixHexa" 	name="ChoixJeu" type="radio"  class="selecteurJeu"		  ></br>
	 	</form>
      </p>  
    </div>  
    <p class="beta">Beta Testeur : Gaspard Michelland :3</p>
	
    
  </body>

</html>

