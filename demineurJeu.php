<?php
include('session.php');
?>
<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <script language="Javascript" src="demineurPerso.js">  
	  </script>
      <style type="text/css" src="demineurPersostyle.css"></style>
      <link href="demineurPersostyle.css" rel="stylesheet" type="text/css">
      <title>Demineur</title>
      
      
  </head>>
  <body class="bodyClass">
    <div style="cursor:url(cursor/cursorShiro.png)">
      <p>
        <p class="score"> 
          
          <form name="testForm" id="testForm"  method="POST" >
          <input type="text" name="champPseudo" id="pseudo" class="pseudo" value="Entrez votre pseudo ici!"><br>
          <input type="submit" id="submitPseudo" onClick="return true;" class="submitPseudo" value="Submit !"><br>
		  
		  
		  
		  <?/*
          $pseudo = $_POST['champPseudo']; 		  
		  
	 	    try { $bdd = new PDO('mysql:host=mollaretnlisn.mysql.db;dbname=mollaretnlisn;charset=utf8;', 'mollaretnlisn', 'isnTS2016'); }//Connexion
		    catch(Exception $e) { die('Erreur : '.$e->getMessage()); }// Réponse en cas d'erreur

		    $reponse = $bdd->query('SELECT * FROM BenjaminVerdantDemineur ORDER BY score DESC');// Accède à la colonne score de la table BenjaminVerdantDemineur
			$bdd->exec('INSERT INTO BenjaminVerdantDemineur(username) VALUES ('.$pseudo.')');
		    for($x=1; $x<=5;$x++)// Affiche les 5 scores
		    {
		      $donnees = $reponse->fetch();
			  if($donnees!=''){
			    echo $donnees['username'].' : '.$donnees['score'].'<br />';
			  }
			  
			} // Affiche les noms et les scores à la suite
		
		    $reponse->closeCursor();
			
			
			
			*/
	      ?><br>  
          </form>
          </p>
      </p>
        <canvas id="demineurId" width="800" height="800" name="monCanevas" class="demineurClass">
	    Texte si navigateur ne supporte pas la balise Canvas
        </canvas>
        <input value="Gēmu o hajimeru" type="button" onClick="demarrage();" id="start" class="start" ><br>
        <p class="texte" id="textCo">Nombre de colonne :</p>  <input type="number" id="nbColonne" class="selecteur" ><br>
        <p class="texte" id="textLi">Nombre de ligne :</p>    <input type="number" id="nbLigne"   class="selecteur" ><br>
        <p class="texte" id="textBo">Nombre de bombe :</p>    <input type="number" id="nbBombe"   class="selecteur" ><br>
        <p><input type="text" id="chrono"   class="chrono" hidden="true" ></p>
      </p>
    </div>  
	
    </body>

</html>

