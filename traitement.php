<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Document sans titre</title>
</head>

<body>
<?
  session_start();
  if(isset($_POST['inscrire'])){
	$login = $_POST['login'];
	$motDePasse = $_POST['password'];
	try { $bdd = new PDO('mysql:host=mollaretnlisn.mysql.db;dbname=mollaretnlisn;charset=utf8;', 'mollaretnlisn', 'isnTS2016'); }//Connexion
		catch(Exception $e) { die('Erreur : '.$e->getMessage()); }// Réponse en cas d'erreur
		
	$bdd->exec("INSERT INTO `mollaretnlisn`.`BenjaminVerdantDemineur` (`username`, `password`) VALUES ('$login','$motDePasse')");
  }
	else {
	  $login ="";
	  $motDePasse="";
  }
?>
</body>
</html>