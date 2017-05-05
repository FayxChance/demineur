<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <script type="text/javascript" src="indexjs.js">
    </script>
    <style type="text/css" src="stylesheet.css">
    </style>
    <link href="stylesheet.css" rel="stylesheet" type="text/css">
    <title> 『A Certain Magical Index』 </title>
    
  </head>
  <body >
	<?PHP
	  $bgAlea=mt_rand(3,3);
	  
	  echo '
		<script type="text/javascript">
		window.onload=function(){
		
		  
		  switch('.$bgAlea.'){
			  
			  case 1:
			  stylebg="font-family:ARCADECLASSIC;background:fixed;background-repeat: no-repeat; background-size:cover; background-image:url(images/background/647118.jpg);";
			  mal="font-family:ARCADECLASSIC;left:70%;top:100px;position:absolute;font-size:24px;color:#0ff;" ;
			  demiPerso="font-family:ARCADECLASSIC;left:70%;top:170px;position:absolute;font-size:24px;color:#0ff;";
			  NGNLZopPage1="position:absolute;left:10%;top:15;";
			  break;
			  
			  case 2:
			  stylebg="font-family:ARCADECLASSIC;background:fixed;background-repeat: no-repeat; background-size:cover; background-image:url(images/background/NEPV2-Steam-Wallpaper-1920x1080_5.jpg);";
  			  mal="font-family:ARCADECLASSIC;left:5%;top:75px;position:absolute;font-size:24px;color:#09c;"; 
			  demiPerso="font-family:ARCADECLASSIC;left:5%;top:140px;position:absolute;font-size:24px;color:#09c;";
			  MDN7OpPage2="position:absolute;left:60%;top:15%;";
			  break;
			  
			  case 3:
			  stylebg="font-family:ARCADECLASSIC;background:fixed;background-repeat: no-repeat; background-size:cover; background-image:url(images/background/NEPV2-Steam-Wallpaper-1920x1080_4.jpg);";
			  mal="font-family:ARCADECLASSIC;left:80%;top:75px;position:absolute;font-size:24px;color:#09c;" ;
			  demiPerso="font-family:ARCADECLASSIC;left:80%;top:140px;position:absolute;font-size:24px;color:#09c;";
			  MDN7OpPage2="position:absolute;left:10%;top:25%;";
			  break;
			  
			  case 4:
			  stylebg="font-family:ARCADECLASSIC;background:fixed;background-repeat: no-repeat; background-size:cover; background-image:url(images/background/NEPV2-Steam-Wallpaper-1920x1080_3.jpg);";
			  mal="font-family:ARCADECLASSIC;left:5%;top:100px;position:absolute;font-size:24px;color:#0ff;";
			  demiPerso="font-family:ARCADECLASSIC;left:5%;top:170px;position:absolute;font-size:24px;color:#0ff;";
			  break;
			  
			  case 5:
			  stylebg="font-family:ARCADECLASSIC;background:fixed;background-repeat: no-repeat; background-size:cover; background-image:url(images/background/658737.jpg);";
			  mal="font-family:ARCADECLASSIC;left:5%;top:100px;position:absolute;font-size:24px;color:#09c;";
			  demiPerso="font-family:ARCADECLASSIC;left:5%;top:170px;position:absolute;font-size:24px;color:#09c;";
			  break;
			  
			  case 6:
			  stylebg="font-family:ARCADECLASSIC;background:fixed;background-repeat: no-repeat; background-size:cover; background-image:url(images/background/519522.jpg);";
			  mal="font-family:ARCADECLASSIC;left:5%;top:100px;position:absolute;font-size:24px;color:#09c;";
			  demiPerso="font-family:ARCADECLASSIC;left:5%;top:170px;position:absolute;font-size:24px;color:#09c;";
			  break;

		  }
		  document.body.setAttribute("style",stylebg);
		  document.getElementById("mal").setAttribute("style",mal);
		  document.getElementById("demiPerso").setAttribute("style",demiPerso);
		  document.getElementById("MDN7OpPage2").setAttribute("style",MDN7OpPage2);
		  //document.getElementById("MDN7OpPage3").setAttribute("style",MDN7OpPage3);
//		  document.getElementById("MDN7OpPage4").setAttribute("style",MDN7OpPage4);
		}
		</script>
		
	  ';
	  
	  
	 
    ?>
 
  <div id="div" style="cursor:url(images/cursor/cursorShiro.png)">
    <span id="mal"> MAL : <br>
      <a href="https://myanimelist.net/animelist/ChanceTom?status=7"  target="_blank" > Here </a>
      
    </span><br>
    <span id="demiPerso"> Demineur Perso : <br>
      <a href="demineurPerso.php"  target="_blank" > Here </a>
    </span>
    <span><?
	switch($bgAlea){
		  
		  case 1:echo'
		  <span id="NGNLZopPage1">
		  <iframe width="350" height="200" src="https://www.youtube.com/embed/r0X2SHEiPAg" frameborder="0" allowfullscreen>
		  </iframe>
		  </span>
		  ';
		  break;
		  case 2:
		  echo'<span id="MDN7OpPage2">
		  <iframe  src="https://www.youtube.com/embed/ANwyPAhAZ_Q?control=0"  allowfullscreen width="500px" height="350px" >
		  </iframe>
		  </span>';
		  break;
		  case 3:
		  echo'<span id="MDN7OpPage2">
		  <iframe width="500" height="350" src="https://www.youtube.com/embed/ANwyPAhAZ_Q?control=0" frameborder="0" allowfullscreen  id="MDN7OpPage3">
		  </iframe>
		  </span>';
		  break;
		  case 4:
		  echo'<span id="MDN7OpPage2">
		  <iframe width="700" height="500" src="https://www.youtube.com/embed/ANwyPAhAZ_Q?control=0" frameborder="0" allowfullscreen  id="MDN7OpPage4">
		  </iframe>
		  <span id="MDN7OpPage2">';
		  break;
		  case 5:;
		  break;
		  case 6:;
		  break;
		 
	  }
	?>
	</span>
  </div>
  </body>
</html>