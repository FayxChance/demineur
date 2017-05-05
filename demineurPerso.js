var ratioDeTaille=0.75;
var gameStart = 0;   


function demarrage()
{   
	var pause=0;
	gameStart++; // Permets de lancer le jeu une seule fois
	
	/**************************** Zone détection souris ************************/

	
	  window.onmousemove=function(event) // Exécution lorsque la souris bouge.
        { 
		if(univ.vivant==1){
		 univ.abscisseSourisCanvas=event.clientX-window.demineurId.getBoundingClientRect().left;  // lecture dans event des abscisse de la sourie
         univ.ordonneeSourisCanvas=event.clientY-window.demineurId.getBoundingClientRect().top;  // lecture dans event des ordonnee de la sourie
		 univ.detectSouris();
		 }
      }
	
	/**************************** Fin zone détection souris ************************/
	
	
	/**************************** Zone détection clavier ************************/
	
	
	  window.onkeydown=function(event) // Exécution lorsque la souris bouge.
        {
	     if(univ.vivant==1){
           /*var code = event.which
		   if(code == 90){univ.placerFlag(univ.ordonneeSouris,univ.abscisseSouris);} // Detection touche z, quand appuyé place un drapeau sur la cellule ciblée*/
		   clavier=event.which;
		   
		   if(clavier==100 && pause==0||clavier==68 && pause==0){univ.placerFlag(univ.ordonneeSouris,univ.abscisseSouris);}
		   if(clavier==112||clavier==80){
		     if(pause==0){pause=1;}
		     else{pause=0;}
		     console.log(pause);
		   }// Fin if (clavier==112)
		
		 }//Fin if univ
      } // Fin window.onkeydown
	
	/**************************** Fin zone détection clavier ************************/
	
	
	/**************************** Zone détection clic souris ************************/
	
	  window.onmousedown=function() // Lance l'infection lors du clic de la souris avec pour paramètres : l'ordonné de la souris et l'abscisse dans le canvas
	    {
		  if(univ.vivant==1 && pause==0){
		    univ.infection(univ.ordonneeSouris,univ.abscisseSouris);
			}
	  } // Fin window.onmousedown
	
	/****************************  Fin zone détection clic souris ************************/
	
	
	
	 // definition du timer en ms et de la fonction appellée par le timer
     // le jeu est redessiné toutes les 50 ms
	
	  var myInterval = setInterval(evoluer, 50);
	  var chrono = setInterval(timer,1000) //Appele la fonction timer
	  var finGame = setInterval(checkEnd,1000) 
	  
	  function timer(){if(univ.vivant==1 && pause==0 ){univ.chrono();}}
  
      function checkEnd(){univ.endGame();}
  
      function evoluer()
        {    
          if(pause==0){univ.dessiner(context)};
        } // Fin evoluer
	  
	
	 
	  if(gameStart == 1){ 
		
        var monCanevas = document.getElementById("demineurId");
	 
        // tout est mis dans un if getContext de monCanevas afin d'éviter les plantage si canvas n'est pas géré par le navigateur
        if (monCanevas.getContext){
	      var context= monCanevas.getContext("2d");
		  
		  if (document.getElementById("ChoixCarre").checked){ // Si le button radio choixCarre est coché
			var univ = new UniversCarre(Math.abs(document.getElementById("nbColonne").value),Math.abs(document.getElementById("nbLigne").value),Math.abs(document.getElementById("nbBombe").value));
		  }
		  else {
			var univ = new UniversHexa(Math.abs(document.getElementById("nbColonne").value),Math.abs(document.getElementById("nbLigne").value),Math.abs(document.getElementById("nbBombe").value));
		  }
	     //Création du canvas avec comme paramètre le nb de colonne, le nb de ligne, et le nombre de bombe correspondant aux champs respectifs
	    } // fin de if (monCanevas.getContext)
	    
		univ.fonctionTest();
     	univ.bombeAlea();		// Génération des bombes aléatoires
     	univ.chiffreSpawn();	// Génération des chiffres autour des bombes
     	
		document.getElementById("start").hidden = true;
	    document.getElementById("textCo").hidden = true;
	    document.getElementById("textLi").hidden = true;
	    document.getElementById("textBo").hidden = true;
	    document.getElementById("nbColonne").hidden = true;				// Cache le menu
	    document.getElementById("nbLigne").hidden = true;
	    document.getElementById("nbBombe").hidden = true;
	    document.getElementById("chrono").hidden = false;
		document.getElementById("score").hidden = false;
		document.getElementById("TextHexa").hidden = true;
		document.getElementById("TextCarre").hidden = true;
		document.getElementById("ChoixCarre").hidden = true;
		document.getElementById("ChoixHexa").hidden = true;
		
	  } // Fin du if(gameStart)
 
	
	 

	 
 
}    //   fin du demarrage

window.onload = function(){
backgroundMusic.volume = 0.5;
document.getElementById("partieWin").value =null; 
	
}
   