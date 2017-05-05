 
<p class="score"> 
  <?PHP
  
    session_start();
    
    
    $link = mysql_connect('mollaretnlisn.mysql.db', 'mollaretnlisn','isnTS2016'); //Connexion au serveur
    $db = mysql_select_db('mollaretnlisn', $link);//Connexion à la base de donnée
    if(!$link){  die('Connexion impossible : ' . mysql_error());}	//Check la connexion, si il n'y a pas connexion indique connexion impossible + erreur
   // else {echo '<p class="infoConnexion">Connecté correctement SQL</p>';}//Si il y a connexion echo Connecté 
   
   	echo 'Votre score précédent: '.$valeurScore.'<br><br>';
	echo 'Vous êtes connecté, bienvenue '.$_SESSION['loginUser'].'<br><br>';
	
	if(isset($_POST['SendChronos'])){ // Si le button envoyé score est appuyé alors :
	
	  $valeurScore = $_POST['champsScore']; // Prends la valeur du score dans le champs
	  
	  
	  $sqlBestScore = 'SELECT bestScore FROM BenjaminVerdantDemineur WHERE username="'.$_SESSION['loginUser'].'"';
	  $reqBestScore =mysql_query($sqlBestScore,$link);
	  $tableauBestScore = mysql_fetch_array($reqBestScore, MYSQL_BOTH);
	  $sqlScore = 'SELECT score,bestScore,username,partieTotale,partieGagnee FROM BenjaminVerdantDemineur ORDER BY score ASC';// Prend le score, l'username, partieTotale, partieGagnee et tri par les scores croissant plus petit au plus haut
      $reqScore=mysql_query($sqlScore,$link);// Accède à la colonne score de la table BenjaminVerdantDemineur


	  
	  if($_POST['champsPartieWin']==1){
		
		if($valeurScore<=$tableauBestScore[0]){// Si il a un meilleur score
	      $sqlUpdateScore = 'UPDATE BenjaminVerdantDemineur SET score='.$valeurScore.', bestScore='.$valeurScore.', partieTotale=partieTotale+1, partieGagnee=partieGagnee+1 WHERE username="'.$_SESSION['loginUser'].'"';
	      //  changement de score où la session correspond au login
	    } // Fin du if valeur<reqBestScore
		else{$sqlUpdateScore = 'UPDATE BenjaminVerdantDemineur SET score='.$valeurScore.', partieTotale=partieTotale+1, partieGagnee=partieGagnee+1 WHERE username="'.$_SESSION['loginUser'].'"';}
	  } // Fin if du $_POST['champsPartieWin']==1
	  else{$sqlUpdateScore = 'UPDATE BenjaminVerdantDemineur SET score='.$valeurScore.', partieTotale=partieTotale+1 WHERE username="'.$_SESSION['loginUser'].'"';}
	  
	  if(mysql_query($sqlUpdateScore,$link)){echo 'Update Reussi. Veuillez rafraichir la page pour voir votre classement';}// Requete de changement de score
	  else {echo "Error updating record: " . mysql_error($link);}
	} // Fin isset sendChronos 
	
	echo'<table>';
	
	  echo'<caption> Tableau des meilleurs joueurs</caption>';
	  echo'<thead>';
	  	echo'<tr>';
	      echo'<th>Pseudo :   </th>';
		  echo'<th> Meilleur score :   </th>';
		  echo'<th>Score :   </th>';	
		  echo'<th>Partie Totale :   </th>';	
		  echo'<th>Partie Gagnée :   </th>';	
		echo'</tr>';	  
	  echo'</thead>';
	  echo'<tbody>';
	    for($i=1; $i<=5;$i++)// Affiche les 5 scores
	    {
		  $tableauScore= mysql_fetch_assoc($reqScore); // Crée un tableau avec les scores et les usernames
		  if($tableauScore!='' && $tableauScore['score']!=0 ){ // Si la ligne est vide n'affiche rien
		    echo'<tr>';
			  echo '<td>   '.$tableauScore['username'].'   </td>';
			  echo '<td>   '.$tableauScore['bestScore'].'   </td>';
			  echo '<td>   '.$tableauScore['score'].'   </td>';
			  echo '<td>   '.$tableauScore['partieTotale'].'   </td>';
			  echo '<td>   '.$tableauScore['partieGagnee'].'   </td>';
			echo'</tr>';
			//echo $tableauScore['username'].' : '.$tableauScore['score'].'<br>';
			// echo l'username et le score correspondant	
		  } // Fin if  
	    } // Fin for	  
	  echo'</tbody>';
	echo'</table>';

	

	
	mysql_close($link);
      

    ?>
</p>
<p>
  <form name="champscore" id"score"  method="POST" action="demineurPerso.php">
    <input type="text"    id="chrono" 							  class="chronoArmy" hidden="true" ><br>
    <input type="text"    id="score"       name="champsScore"     class="chronoLambda" hidden="true" >
    <input type="text"    id="partieWin"   name="champsPartieWin" class="chrono" hidden="true" >
    <input type="submit"  id="SendChronos" name='SendChronos'                    hidden="true" value="Envoyez score et recommencez !">
  </form>
</p>
