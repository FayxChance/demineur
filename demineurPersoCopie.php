<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <script language="Javascript" src="demineurPerso.js">  
	  </script>
      <style type="text/css" src="demineurPersostyle.css"></style>
      <link href="demineurPersostyle.css" rel="stylesheet" type="text/css">
      <title>Demineur</title>
      
      
  </head>
  <body class="bodyClass">
    <?PHP
	
	
	/***********************************  Zone inscription  *************************************/
	    if(isset($_POST['inscrire'])){
	      $login = $_POST['login'];
		  $motDePasse = $_POST['password'];
		  //$login= mysql_real_escape_string($login);
		  //$motDePasse= mysql_real_escape_string($motDePasse);
          //Evite l'injection de code malveillant
		
		  $pattern =  '/^[0-9A-Za-zÁ-Úá-úàÀÜü]+$/';//integers & letters
		  //if (preg_match($pattern, $login) == 1 and preg_match($pattern, $motDePasse == 1)){
			  
			  
 		    try { $bdd = new PDO('mysql:host=mollaretnlisn.mysql.db;dbname=mollaretnlisn;charset=utf8;', 'mollaretnlisn', 'isnTS2016'); }//Connexion
		    catch(Exception $e) { die('Erreur : '.$e->getMessage()); }// Réponse en cas d'erreur
			
			
			$query = $bdd->query('SELECT username FROM BenjaminVerdantDemineur WHERE username=\'$login\''); 
			$reponse = mysql_fetch_array($query);
			//Cherche dans colonne username, le pseudo present dans le champ login
			
			if(count($reponse)>=1)
			  {	  
			}
			else 
			  {
			  $bdd->exec("INSERT INTO BenjaminVerdantDemineur(username, password) VALUES (\"$login\",\"$motDePasse\")" );
			  // Ecriture dans la base de donnée du pseudo + password 
	
			}
			
			
			mysql_close();
			
			
			
			
		  } // Fin du if(preg...) check si dans les champs, il n'y a que des caratères normaux (pas de code php)
		 /* else {
    	  echo 'Don\'t try to hack my site :3';
		  }*/  
	    //}
	    else {
		  $login ="Login";
		  $motDePasse="Password";
	    }
	/*********************************** Fin zone inscription  *************************************/	
	
	
	/***********************************  Zone connexion  *************************************/
		
		if(isset($_POST['connecter'])){
	      $login = $_POST['login'];
		  $motDePasse = $_POST['password'];
		  $pattern =  '/^[0-9A-Za-zÁ-Úá-úàÀÜü]+$/';  //integers & letters
		  //if (preg_match($pattern, $login) == 1 and preg_match($pattern, $motDePasse == 1)){
 		    try { $bdd = new PDO('mysql:host=mollaretnlisn.mysql.db;dbname=mollaretnlisn;charset=utf8;', 'mollaretnlisn', 'isnTS2016'); }//Connexion
		    catch(Exception $e) { die('Erreur : '.$e->getMessage()); }// Réponse en cas d'erreur
		    $requete = $bdd->query('SELECT username FROM BenjaminVerdantDemineur ');
			$requete->closeCursor();
		    if($requete == $login){  // Regarde si le joueur existe dans la base de données
				include('demineur.php');
				
			}
			else {
			  echo 'Wrong password or username. Try again.';
			  $login ="";
		      $motDePasse="";
			}
		    
		  } // Fin du if(preg...) check si dans les champs, il n'y a que des caratères normaux (pas de code php)
		  /*else {
    	  echo 'Don\'t try to hack my site :3';
		  }  
	    }*/
	    else {
		  $login ="";
		  $motDePasse="";
	    }
		
	/*********************************** Fin zone connexion  *************************************/	
    ?>
    <form name="logs" id"logs" method="POST" action="demineurPerso.php">
	  <input type="text" name="login" id="login" class="pseudo" value="<?PHP print $login ; ?>"><br>
	  <input type="text" name="password" id="password" class="pseudo" value="<?PHP print $motDePasse; ?>"><br>
	  <input type="submit" name="connecter" class="seConnecter" value="Se connecter"> <input type="submit" name="inscrire" id="inscrire" class="inscription" value="S'inscrire">
	</form>
    <!--- <div style="cursor:url(cursor/cursorShiro.png)">
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
	--->
    
  </body>

</html>

