<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html >


  <head>
  
  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script language="Javascript" src="probabilite.js">  
	</script>
    <style type="text/css" src="probabilite.css"></style>
    <link href="probabilite.css" rel="stylesheet" type="text/css">

    <title>Probabilité</title>
    
    
  </head>
  5
  <body style="background:#000">
  	<p >
      Nombre de lancer total : <input type="number" id="nbLancer" class="champ"><br />
      Nombre de succes total : <input type="number" id="nbSucces"class="champ"><br />
      Probabilite : <input type="text" id="proba" class="champ"/><br />
      <input type="button" id="btLancer"  value="Lancer !"  class="champ" onclick="simu();"/><br />
      
      <p id="resultat">
          
      </p>
    </p>
   
  
  
  
  
  </body>
</html>