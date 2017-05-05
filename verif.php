<?
$link = mysql_connect('mollaretnlisn.mysql.db', 'mollaretnlisn','isnTS2016'); //Connexion au serveur
$db = mysql_select_db('mollaretnlisn', $link);									  //Connexion à la base de donnée
session_start();
$user_check=$_SESSION['loginUser'];
$sql = " SELECT username FROM BenjaminVerdantDemineur WHERE username ='".$user_check."'";
$req = mysql_query($sql,$link);
$data = mysql_fetch_assoc($req);
$login_session =$data['username'];
if(!isset($login_session)){
mysql_close($link); 
header('location: login.php');
}
?> 