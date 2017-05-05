<?PHP 
	    session_start(); // Demarre la session
		
		$link = mysql_connect('mollaretnlisn.mysql.db', 'mollaretnlisn','isnTS2016'); //Connexion au serveur
		$db = mysql_select_db('mollaretnlisn', $link);	 //Connexion à la base de donnée
		if(!$link){  die('Connexion impossible : ' . mysql_error());} //Check la connexion, si il n'y a pas connexion indique connexion impossible + erreur
		else {echo '<p class="infoConnexion">Connecté correctement SQL</p>';} //Si il y a connexion echo Connecté
	
	/***********************************  Zone inscription  *************************************/
		
	    if(isset($_POST['inscrire']) && !empty($_POST['login']) && !empty($_POST['password'])){
		  // Si l'utilisateur appui sur inscrire et que les champs ne sont pas vides alors : 
		  
		  $login = $_POST['login'];
		  $motDePasse = $_POST['password'];
		  // Récupère le login et le mot de passe des champs
		    
		  $login = stripslashes($login);
		  $motDePasse = stripslashes($motDePasse);
		  $login = mysql_real_escape_string($login);
		  $motDePasse = mysql_real_escape_string($motDePasse); 
		  // Protège des injections
		       
		  $sql = " SELECT username FROM BenjaminVerdantDemineur WHERE username ='".$login."'"; // La requete pour voir les pseudos
		  $req = mysql_query($sql,$link) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); // La demande de la requete au serveur
		  $data = mysql_fetch_assoc($req); // Crée un tableau associatif, $data['pseudo dans la base de données']='pseudo dans la base de données'
		  if($data['username'] != $login) { // Si il n'y a pas de même pseudo déja existant dans la bd, alors fait une inscription
			$sqlInscription = 'INSERT INTO BenjaminVerdantDemineur (username,password)  VALUES ("'.$login.'","'.$motDePasse.'") '; // La requete d'inscription
			mysql_query($sqlInscription,$link); // La demande de la requete d'inscription au serveur
		  }
		  else {
			echo '<p class="infoConnexion"> Utilisateur déjà existant</p> ';	// Si utilisateur déja existant, affiche <--		
		  }
		}
		elseif(isset($_POST['inscrire']) && empty($_POST['login']) || empty($_POST['password']) && isset($_POST['inscrire'])) { 
		// Si un des champs est vide et que l'utilisateur appui, affiche :
		
			echo '<p class="infoConnexion">Vous avez oublié de remplir un champ</p>';
		}

	/*********************************** Fin zone inscription  *************************************/
	
	/*********************************** Zone connexion  *******************************************/
	
	 if(isset($_POST['connecter']) && !empty($_POST['login']) && !empty($_POST['password'])){
		 // Si l'utilisateur appui sur connexion et que les champs ne sont pas vides alors :
		 
		  $login = $_POST['login'];
		  $motDePasse = $_POST['password']; 
		  // Récupère le login et le mot de passe des champs 
		  
		  $login = stripslashes($login);
		  $motDePasse = stripslashes($motDePasse);
		  $login = mysql_real_escape_string($login);
		  $motDePasse = mysql_real_escape_string($motDePasse); 
		  // Protège des injections
		        
		  $sql = " SELECT password FROM BenjaminVerdantDemineur WHERE username ='".$login."'"; 
		  // La requete pour voir le mot de passe correspondant au login entrée
		  
		  $req = mysql_query($sql,$link) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); // La demande de la requete au serveur
		  $data = mysql_fetch_assoc($req); // Crée un tableau associatif, $data['pseudo dans la base de données']='pseudo dans la base de données'
		  if($data['password'] != $motDePasse) {  //si le mot de passe ne correspond pas au login alors :
			echo '<p class="infoConnexion"> Wrong username or password</p> ';
		  }
		  else { 
		  // Si le mot de passe correspond au login, alors démarre une session avec le login et envoi sur la page du démineur
    		$_SESSION['loginUser'] = $login;
			header('location: demineurPerso.php');
					
		  }
	 }
	 elseif(isset($_POST['connecter']) && empty($_POST['login']) || empty($_POST['password']) && isset($_POST['connecter'])) {
		 // Si l'utilisateur appui sur connexion et que l'un des champs est vide alors :
			echo '<p class="infoConnexion">Vous avez oublié de remplir un champ</p>';
	 }
	/*********************************** Fin zone connexion  *************************************/

	
		
	mysql_close($link); // Ferme la connexion à la db

	
?>

<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <script language="Javascript" src="demineurPerso.js">  
	  </script>
      <style type="text/css" src="demineurPersostyle.css"></style>
      <link href="demineurPersostyle.css" rel="stylesheet" type="text/css">
      <link href="login.php" >
      <title>Demineur</title>

      
  
      
      
  </head>
  <body class="bodyClass">
    <form name="logs" id"logs" method="POST">
	  <input type="text" name="login" id="login" class="pseudo" value="Login"><br>
	  <input type="password" name="password" id="password" class="pseudo" value="Password"><br>
	  <input type="submit" name="connecter" class="seConnecter" value="Se connecter"> <input type="submit" name="inscrire" id="inscrire" class="seConnecter" value="S'inscrire" >
	</form>
	
    
  </body>

</html>




      
      

    
    


