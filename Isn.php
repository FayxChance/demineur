<!DOCTYPE html>
<html>
    <head>
    
    
   		<script type="text/javascript">
			<!--
			var nombre1 = 0;
           	var nombre2 = 0;
           	var somme = 0;
			var questiontotale = 0;
			var bonneReponse = 0;
			var pourcentageReussit = "4";
            
           function question()
            
           {
           nombre1 =parseInt(51*Math.random());
           nombre2 = parseInt(51*Math.random());
		   var plus = " + ";
		   var egale = " = ?";
		   
           document.getElementById("section").innerHTML = nombre1 + plus + nombre2 +egale ;
           }
		   
		   function reponse()
		   {
			var nombreProp = parseInt(document.getElementById('champ').value);
			somme = nombre1+nombre2;
			var b = "Bonne reponse :3";
			var m = "Mauvaise reponse :c";
			var pourcentage = 100;
			var afficher = "";
			
			
			
						
			if(nombreProp == somme)
			{ 
			document.getElementById('section').innerHTML = b;
			bonneReponse++;
			questionTotale++;
			}
			else
			{
			document.getElementById('section').innerHTML = m;
			questionTotale++;
			}
			//pourcentageReussit = bonneReponse*100/questiontotale;
			
			document.getElementById("section2").innerHTML = pourcentageReussit;
			

		   }
		   
			
			-->
		</script>
        
        <meta  charset="utf-8" />
        <title>ISN-DS1-BEnjaminVerdant</title>
        <style>
        @import url("ARCADECLASSIC/stylesheet.css");

		.champ 
		{
	position: absolute;
	left: 634px;
	top: 150px;
	font-size: 18px;
	font-family: ARCADECLASSIC;
	color: #093;
	width: 262px;
	overflow: auto;
		}
		
		.button1
		{
	position: absolute;
	left: 30%;
	top: 180px;
	font-size: 18px;
	font-family: ARCADECLASSIC;
	color: #093;
	width: 227px;
	border-color: #FFF;
	background-color: #033;
		}
		
		.button2
		{
	position: absolute;
	left: 52%;
	top: 180px;
	font-size: 18px;
	font-family: ARCADECLASSIC;
	color: #093;
	width: 227px;
	border-color: #FFF;
	background-color: #033;
	
		}
		
		.Titre {
	text-align: center;
	font-family: ARCADECLASSIC;
	font-size: 36px;
	color: #330;
}

		.background
		{
	background-color: #000;			
		}
		
		.text
		{
	font-family: ARCADECLASSIC;
	color: #FFF;
	text-align: center;
	top:100px;
		}
        </style>

        
    </head>
    
    <body class="background">
    
        <h1 class="Titre"> Exerciseur</h1> 
        <div class="text" id="section" > Cliquer sur le bouton pour commencer. </div></br>
    <div class="text" id="section2" >zd </div>
        
        <form></br>
         	<input name="champ"type="text"  class="champ" id="champ" style="color: rgb(0,0,0); background-color: White; position: absolute;" value="">
        
        	<input  class="button1" type="button" id="bouton1"  onClick="question();" value="Proposer une addition"							/>
        
       	  <input  class="button2" type="button" id="bouton2"  onClick="reponse();"  value="Proposer une reponse"							/>
    </form>
    </body>
    
</html>
