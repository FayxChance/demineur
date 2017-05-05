
<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <script language="Javascript" src="demineur.js">  
	  </script>
      <style type="text/css" src="demineurPersostyle.css"></style>
      <link href="demineurstyle.css" rel="stylesheet" type="text/css">
      <link href="login.php" ><link href="logout.php" >
      <title>Demineur</title>

      
   
      
      
  </head>
  <body class="bodyClass">
    <div>  
	
    <b id="logout"><a href="logout.php">Log Out</a></b>
    </div>
    <div></div>
    <div style="cursor:url(cursor/cursorShiro.png)">
     
        <canvas id="demineurId" width="800" height="800" name="monCanevas" class="demineurClass">
	    Texte si navigateur ne supporte pas la balise Canvas
        </canvas>
        <input value="Gēmu o hajimeru" type="button" onClick="demarrage();" id="start" class="start" ><br>
        <p class="texte" id="textCo">Nombre de colonne :</p>  <input type="number" id="nbColonne" class="selecteur" ><br>
        <p class="texte" id="textLi">Nombre de ligne :</p>    <input type="number" id="nbLigne"   class="selecteur" ><br>
        <p class="texte" id="textBo">Nombre de bombe :</p>    <input type="number" id="nbBombe"   class="selecteur" ><br>
        <form>
          Jeu hexagonal </br>
          <input value="jeu hexagonal" id="ChoixHexa" name="ChoixJeu" type="radio"></br>
          Jeu Carre </br>
          <input value="jeu carre" id="ChoixCarre" name="ChoixJeu" type="radio" checked></br>
          <input value="Valider" id="Valider" type="button" onclick="selectJeu();">
	  	</form>
      	 
      </p>  
    </div>  
    <p class="beta">Beta Testeur : Gaspard Michelland :3</p>
	
    
  </body>

</html>

