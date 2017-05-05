//*********************************** classe Univers hexa **************************

	function UniversHexa(nbCo,nbLi,nbBombe){
		
		/*********************  Espace concernant le tableau des cellules   ********************************/
		
		//Propriétés concernant la map
		this.abscisseSourisCanvas =0;
		this.ordonneeSourisCanvas =0;
		this.abscisseSouris=0;
		this.ordonneeSouris=0;					
		
		
		this.vivant = 1;														// Variable pour savoir si le joueur a perdu
		this.seconde = 0;							  
		// Variable pour le score, augmente de 1 chaque seconde grâce à la fonction chrono, puis retourne à 0 quand seconde atteint 59
		this.minute = 0;
		// Variable pour le score, augmente de 1 chaque minute grâce à la fonction chrono quand 59
		this.score = 0;
		// Augment de 1 chaque seconde
		
		
		this.xOrigineHexa =100;
		this.yOrigineHexa = 100;
		this.r = 30;
		this.Rcercle = 5;
		this.nbColonneHexa = Math.abs(nbCo)+4;							 		 // Nombre de colonne total (nbCo visibles et 2 non visibles)
		this.nbLigneHexa = Math.abs(nbLi)+4;									 // Nombre de ligne total (nbLi visibles et 2 non visibles)
		this.nbBombes = Math.abs(nbBombe);
		this.nbCelSansBombe =(this.nbLigneHexa-4)*(this.nbColonneHexa-4)-this.nbBombes;
		this.caseRevele =0;
		
		
		this.celHexa = new Array();
		for(i=0;i<=this.nbLigneHexa;i++){				  //Creation des lignes
		  this.celHexa[i] = new Array();				  //Creation du tableau pour les colonnes
		  	for(j=0;j<=this.nbColonneHexa;j++){			  //Creation des colonnes
		    	this.celHexa[i][j] = new ClasseCellule();	  //Creation des objets cellules
		  	}
		}
		
	
		for(j=0;j<=this.nbColonneHexa;j++){	//Attribution de l'état spectateur de la 1ère ligne (non visible)		  
		  this.celHexa[0][j].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbColonneHexa;j++){	//Attribution de l'état spectateur de la 2ème ligne (non visible)		  
		  this.celHexa[1][j].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbColonneHexa;j++){	//Attribution de l'état spectateur de la dernière ligne (non visible)			  
		  this.celHexa[this.nbLigneHexa][j].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbColonneHexa;j++){	//Attribution de l'état spectateur de l'avant dernière ligne (non visible)			  
		  this.celHexa[this.nbLigneHexa-1][j].spec = 1;
		} //Fin for j
		
		
		
		for(j=0;j<=this.nbLigneHexa;j++){		//Attribution de l'état spectateur de la 1ère colonne (non visible)			  
		  this.celHexa[j][0].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbLigneHexa;j++){		//Attribution de l'état spectateur de la 2èmee colonne (non visible)			  
		  this.celHexa[j][1].spec = 1;
		} //Fin for j
		
		for(j=0;j<=this.nbLigneHexa;j++){	//Attribution de l'état spectateur de l'avant dernière colonne (non visible)			  
		  this.celHexa[j][this.nbColonneHexa-1].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbLigneHexa;j++){	//Attribution de l'état spectateur de la dernière colonne (non visible)			  
		  this.celHexa[j][this.nbColonneHexa].spec = 1;
		} //Fin for j
		
	
		/********************* Fin espace concernant le tableau des cellules   ********************************/

		
		
		/********************* Espace Winner  *****************************************************************/
		
		this.endGame = function()
		{
		  if(this.nbCelSansBombe<=this.caseRevele)
		  {
		     this.vivant=0; 
		     alert('(づ｡◕‿‿◕｡)づ  Vous avez gagné  (づ｡◕‿‿◕｡)づ ');
			 document.getElementById("SendChronos").hidden = false;
			 document.getElementById("partieWin").value = 1;
			 		  
	      } // Fin du if
			
		} // Fin function endGame
		
		/******************** Fin espace Winner  **************************************************************/

		
		this.chrono = function(){
			this.seconde++; 														// Augmente de 1 chaque seconde, revient à 0 quand atteint 59
			this.score++;															// Augmente de 1 chaque seconde
			if(this.seconde==59){this.minute++;this.seconde =0;}					// Remet à 0 les secondes quand atteint 59 + augmente de 1 les minutes
			document.getElementById("chrono").value = this.minute+":"+this.seconde; // Affiche le temps du joueur dans le champ indique
			document.getElementById("score").value = this.score;					// Affiche le score du joueur dans le champ indique
			
		} // Fin function Chrono
		
		
		

		/********************* Espace concernant rÃ©partitions bombe alÃ©atoire   ********************************/
		
		this.bombeAlea = function()
		
		{
	      for(i=0; i<this.nbBombes; i++)
		  { // Boucle pour l'ajout de bombe															 
			var xBombe = Math.floor(Math.random()*(this.nbLigneHexa-4  )  +2);
			var yBombe = Math.floor(Math.random()*(this.nbColonneHexa-4)  +2);  	    		 //Emplacement x et y de la bombe redÃ©finis Ã  chaque boucle
			if(this.celHexa[xBombe][yBombe].bombe==0){this.celHexa[xBombe][yBombe].bombe = 1;}   //Test si il n'y a pas de bombe placÃ©e Ã  la cel[x][y], si test=true alors place une bombe
			else{i--;} 																		     //Si test=false alors decremente le compteur de bombe de 1 pour replacer la bombe                          
		  }		//Fin du for i
		}//Fin function bombeAlea
		
		/********************* Fin espace concernant rÃ©partitions bombe alÃ©atoire   ********************************/
		
		
		
		
		
		
        /********************* Espace concernant le spawn des chiffres  ********************************************/
		
		this.chiffreSpawn = function()
		{
			
		  for (i=2;i<=this.nbColonneHexa-2 ;i++){   // Les colonnes 
			for (j=2;j<=this.nbLigneHexa-2;j++){	// Les lignes			  
		      if(this.celHexa[j][i].bombe ==1){		// Regarde à l'emplacement de la cel[j][i] si il y a une bombe
			  //Fais apparaître des nombres dans les cases autours de la bombe
			    if(i%2==0){ 
										  this.celHexa[j-1][i].nombre++;
				  this.celHexa[j-1][i-1].nombre++;   		           this.celHexa[j-1][i+1].nombre++;
											      /*Cellule Touche*/
			      this.celHexa[j][i-1].nombre++;                     this.celHexa[j][i+1].nombre++;
										  this.celHexa[j+1][i].nombre++;	
				}// Fin du if
				else { 
										  this.celHexa[j-1][i].nombre++;
				  this.celHexa[j][i-1].nombre++;   		           this.celHexa[j][i+1].nombre++;
											      /*Cellule Touche*/
			      this.celHexa[j+1][i-1].nombre++;                     this.celHexa[j+1][i+1].nombre++;
										  this.celHexa[j+1][i].nombre++;	
				}
				
			  }//Fin if
		    } //Fin for j
		  } //Fin for i
		}//Fin fonction chiffreSpawn
		
		/********************* Fin espace concernant le spawn des chiffres  ********************************************/
		
		
		
		/********************* Espace détection avec souris  ****************************************************************/
		
		this.detectSouris = function(){
				
			this.x = this.xOrigineHexa;
			
			for(i=2;i<this.nbColonneHexa-2;i=i+1)
			{
			  if(i%2==0){this.y=this.yOrigineHexa;}						
		      else {this.y=this.yOrigineHexa+30;} 	 
			  
			  for (j=2;j<this.nbLigneHexa-2;j=j+1)
			  {
				if ((Math.pow((this.abscisseSourisCanvas - this.x),2) +Math.pow((this.ordonneeSourisCanvas - this.y),2))<= Math.pow(this.r,2))
				  {
					  this.ordonneeSouris=j;
					  this.abscisseSouris=i;

				  }
				this.y = this.y+2*this.r; //				
				} // Fin for j
		      this.x=this.x+50; //
		    } // Fin for i
		}//Fin function detecSouris
		
		/********************* Fin espace détection souris  ****************************************************************/
		
		
		
		
		
		
		/******************** Espace drapeau *******************************************************************/
		
		this.placerFlag = function(yFlag,xFlag){
			console.log("Ligne xFlag: "+xFlag+" Colonne: "+yFlag);
			console.log("Ligne this: "+this.ordonneeSouris+" Colonne: "+this.abscisseSouris);
			console.log("this.celHexa["+xFlag+"]["+yFlag+"]");
			console.log("this.celHexa["+this.ordonneeSouris+"]["+this.abscisseSouris+"]");
						
		  if(this.celHexa[yFlag][xFlag].flag ==0 && this.celHexa[yFlag][xFlag].cache==1) // Fin condition
		  {	
			this.celHexa[yFlag][xFlag].flag =1;
		  } // Fin if
		  else {this.celHexa[yFlag][xFlag].flag =0;}
	    }// Fin function placerFlag
		
		
		
		/******************** Fin espace drapeau *******************************************************************/
		
		
		
		/******************** Espace en quarantaine *******************************************************************/
		
		
		this.infection = function(xInfecte,yInfecte){
			
		  
			          
		  /*
		  infection  : enleve le cache de la cellule infecté + le cache des cellules adjacentes + lance l'infection sur les 4 cases adjacentes + etat infecté = 1
																									
		  Si le nombre de la cellule de coordonnée (xInfecte;yInfecte) est == 0								
		  &&
		  si la cellule n'a pas de drapeau						
		  &&
		  si la cellule n'est pas spectatrice (colonne et ligne invisible, bordure)							
		  &&
		  si la cellule de coordonnée (xInfecte;yInfecte) ne possède pas de bombe
		  &&																									(Correspond au if de chaque case)
		  si xInfecte atteint et/ou au dessus de la dernière ligne visible
		  &&																							
		  si yInfecte atteint et/ou à gauche de la dernière colonne visible
		  &&
		  si xInfecte atteint et/ou au dessous de la première ligne visible
		  &&
		  si yInfecte atteint et/ou à droite de la première colonne visible
		  
		  alors : 			(Correspond à l'intérieur du if, exécution)
		  
		    Enlève le cache de la cellule infectée + enlève le cache des cellules adjacentes
		    Etat infecte = 1  de la case ciblé
			Test :
			  Si les cases adjacentes n'ont pas déjà subit une infection (donc etat infecte ==0)
			  &&
			  si les cases adjacentes ne sont pas spectatrice
			  
			  alors :
			    Lance une infection sur la case adjacente
				
				
			Sinon :
			Si la cellule ciblé est un nombre, dévoile juste le nombre (else pour les 5 méthodes)	
		  
		  
		  
		  */
		  
		 /*j= 1+(this.ordonneeSourisCanvas - this.xDepartRectCel)/(this.largHaut + this.espaceCellule); // j est alors le numero de la (ligne + espaceCellule)
		 i=1+ (this.abscisseSourisCanvas - this.xDepartRectCel)/(this.largHaut + this.espaceCellule); // i est alors le numero de la (colonne + espaceCellule)
		  
		  if (i-Math.floor(i)< (this.largHaut)/(this.largHaut + this.espaceCellule) 
				&&(i-Math.floor(i))< (this.largHaut)/(this.largHaut + this.espaceCellule) //prend les decimals et compare avec taille cellule
				&& this.ordonneeSourisCanvas >= this.xDepartRectCel // et souris dedans canvas
				&& this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel
				&& this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel 
				&& this.abscisseSourisCanvas>= (this.xDepartRectCel))
				{
		  
		  
		   
		      if(this.cel[xInfecte][yInfecte].nombre == 0 && this.cel[xInfecte][yInfecte].flag == 0 && this.cel[xInfecte][yInfecte].spec == 0 && this.cel[xInfecte][yInfecte].bombe == 0 && xInfecte<=this.nbLigne-2 && yInfecte<=this.nbColonne-2 && xInfecte>=1 && yInfecte>=1  && this.ordonneeSourisCanvas >= this.xDepartRectCel && this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel&& this.abscisseSourisCanvas >= this.xDepartRectCel  && this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel)
			  {
			     this.cel[xInfecte][yInfecte].cache =0;
			     this.cel[xInfecte-1][yInfecte].cache=0;
			     this.cel[xInfecte+1][yInfecte].cache=0;
			     this.cel[xInfecte][yInfecte-1].cache=0;
			     this.cel[xInfecte][yInfecte+1].cache=0;
				 this.cel[xInfecte][yInfecte].infecte=1;
				 this.caseRevele++; 
				 if(this.cel[xInfecte-1][yInfecte].infecte==0 && this.cel[xInfecte-1][yInfecte].spec == 0){this.infection(xInfecte-1,yInfecte);}
			     if(this.cel[xInfecte][yInfecte+1].infecte==0 && this.cel[xInfecte][yInfecte+1].spec == 0){this.infection(xInfecte,yInfecte+1);}
			     if(this.cel[xInfecte+1][yInfecte].infecte==0 && this.cel[xInfecte+1][yInfecte].spec == 0){this.infection(xInfecte+1,yInfecte);}
			     if(this.cel[xInfecte][yInfecte-1].infecte==0 && this.cel[xInfecte][yInfecte-1].spec == 0){this.infection(xInfecte,yInfecte-1);}
			  }
			  else if(this.cel[xInfecte][yInfecte].flag == 0 && this.cel[xInfecte][yInfecte].nombre>0 && this.ordonneeSourisCanvas >= this.xDepartRectCel && this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel&& this.abscisseSourisCanvas >= this.xDepartRectCel  && this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel){this.cel[xInfecte][yInfecte].cache =0;this.cel[xInfecte][yInfecte].infecte=1;this.caseRevele++;}
			  if(this.cel[xInfecte][yInfecte].flag == 0 && this.cel[xInfecte][yInfecte].bombe == 1 && this.ordonneeSourisCanvas >= this.xDepartRectCel && this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel&& this.abscisseSourisCanvas >= this.xDepartRectCel  && this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel){alert("(づ￣ ³￣)づ Vous avez perdu (づ￣ ³￣)づ ");this.vivant=0;}
				}
			*/
		}//Fin function infection
		
		/******************** Fin quarantaine *******************************************************************/
		
		
		
		
		
		
		
		
		
		/********* Zone artiste  *********************************************************/
		this.dessiner = function(context){
			
			
			// on régénère l'arière plan			
			context.rect(this.xOrigineHexa-30,this.yOrigineHexa-30,this.xOrigineHexa+(this.nbColonneHexa-4)*this.r+10,this.yOrigineHexa+(this.nbLigneHexa-4)*this.r+80);
			context.fillStyle = "#fff"; 
			context.fill();

			
			/******************* Partie du dessin de la cellule *******************************/
			
			
			
			l = this.largHaut;  // variable locale pour simplifier l'ecriture
			
			/********************  Dessin du fond de la cellule hexagonal *******************************/

			this.x = this.xOrigineHexa;
			
			for(i=2;i<this.nbColonneHexa-2;i=i+1)
			{
			  if(i%2==0){this.y=this.yOrigineHexa;}	// Permet le décalage					
		      else {this.y=this.yOrigineHexa+30;} 	
			  for (j=2;j<this.nbLigneHexa-2;j=j+1){
					  // Si elle est sélectionnée
					  context.beginPath();
					  context.fillStyle = "#0f0"; //Couleur du fond de la cellule
					  context.moveTo(this.x+this.r,this.y);
					  context.lineTo(this.x+(this.r*Math.cos(Math.PI/3)),this.y+(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x-(this.r*Math.cos(Math.PI/3)),this.y+(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x-this.r,this.y);
					  context.lineTo(this.x-(this.r*Math.cos(Math.PI/3)),this.y-(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x+(this.r*Math.cos(Math.PI/3)),this.y-(this.r*Math.sin(Math.PI/3)));
					  context.closePath();
					  context.fill();
				this.y = this.y+2*this.r; //				
				} // Fin for j
		      this.x=this.x+50; //
		    } // Fin for i

			
			/******************** Fin dessin du fond de la cellule hexagonal*******************************/
				
				
			/********* Dessin bombe ******************************************/				

			this.x = this.xOrigineHexa;
			for(i=2;i<this.nbColonneHexa-2;i=i+1){
				
			  if(i%2==0){this.y=this.yOrigineHexa;}
			  else {this.y=this.yOrigineHexa+30;}
			  
			  for (j=2;j<this.nbLigneHexa-2;j=j+1){
				if(this.celHexa[j][i].bombe == 1 ) {
				  context.fillStyle = "#ff0000"; 
				  context.beginPath(); // debut du chemin 
				  context.arc(this.x, this.y, 13,0,Math.PI/3); // dessin du premier arc de cercle qui va de 0 a PI/3
				  context.moveTo(this.x,this.y); 
				  context.lineTo(this.x+13*Math.cos(0),this.y+13*Math.sin(0)); 
				  context.lineTo(this.x+13*Math.cos(Math.PI/3),this.y+13*Math.sin(Math.PI/3));
				  context.lineTo(this.x,this.y);
				  context.arc(this.x,this.y, 13,2*Math.PI/3,Math.PI); // dessin du deuxieme arc de cercle qui va de 2*PI/3 a PI
				  context.moveTo(this.x,this.y);
				  context.lineTo(this.x+13*Math.cos(2*Math.PI/3),this.y+13*Math.sin(2*Math.PI/3));
				  context.lineTo(this.x+13*Math.cos(Math.PI),this.y+13*Math.sin(Math.PI));
				  context.lineTo(this.x,this.y);
				  context.arc(this.x,this.y, 13,4*Math.PI/3,5*Math.PI/3); // dessin du troisieme arc de cercle qui va de 4*PI/3 a 5*PI/3
				  context.moveTo(this.x,this.y);
				  context.lineTo(this.x+13*Math.cos(4*Math.PI/3),this.y+13*Math.sin(4*Math.PI/3));
				  context.lineTo(this.x+13*Math.cos(5*Math.PI/3),this.y+13*Math.sin(5*Math.PI/3));
				  context.lineTo(this.x,this.y);
				  context.closePath(); // fin du chemin 
				  context.fill();	// remplissage des arc de cercles 
				} // Fin if
				this.y = this.y+2*this.r;
			  } // Fin for j
			  this.x=this.x+50;
			} // Fin for i
			// Les angles vont a l inverse du sens trigo (sens horaire)
				
			/******************** Fin dessin des bombes ********************************/
			
			
			/******************** Dessin des nombres  **********************************/
			this.x = this.xOrigineHexa;
			for (i=2;i<=this.nbColonneHexa-3;i++){//Dessine les colonnes 
				
			  if(i%2==0){this.y=this.yOrigineHexa;}	//					
		      else {this.y=this.yOrigineHexa+30;} 	//
			   				
			  for (j=2;j<=this.nbLigneHexa-3;j++){	//Dessine les lignes
			    if(this.celHexa[j][i].bombe == 0){  //Ne dessine pas si il y a une bombe dans cellule[j][i]
			      switch(this.celHexa[j][i].nombre){  //Test pour savoir le nombre présent dans la cellule[j][i]
					
					case 1 :
					// Si this.celHexa[j][i].nombre == 1 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("1",this.x,this.y);
					context.fillStyle ="#00f";
					break;
					case 2 :
					// Si this.celcelHexa[j][i].nombre == 2 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("2",this.x,this.y);
					context.fillStyle ="#00f";
					break;
					case 3 :
					// Si this.celcelHexa[j][i].nombre == 3 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("3",this.x,this.y);
					context.fillStyle ="#00f";
					break;
					case 4 :
					// Si this.celcelHexa[j][i].nombre == 4 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("4",this.x,this.y);
					context.fillStyle ="#00f";
					break;
					case 5 :
					// Si this.celcelHexa[j][i].nombre == 5 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("5",this.x,this.y);
					context.fillStyle ="#00f";
					break;
					case 6 :
					// Si this.celcelHexa[j][i].nombre == 6 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("6",this.x,this.y);
					context.fillStyle ="#00f";
					break;
						  
			      } // Fin switch
				} // Fin if
				this.y = this.y+2*this.r; //
			  } // fin du for j
			  this.x=this.x+50; //
			} // fin du for i
			
			
			/******************** Fin dessin des nombres  **********************************************/
			
			
			
			
			
			/********************  Dessin du fond de la cellule hexagonal *******************************/

			this.x = this.xOrigineHexa;
			
			for(i=2;i<this.nbColonneHexa-2;i=i+1)
			{
			  if(i%2==0){this.y=this.yOrigineHexa;}						
		      else {this.y=this.yOrigineHexa+30;} 	 
			  
			  for (j=2;j<this.nbLigneHexa-2;j=j+1)
			  {
				if ((Math.pow((this.abscisseSourisCanvas - this.x),2) +Math.pow((this.ordonneeSourisCanvas - this.y),2))<= Math.pow(this.r,2))
					  {
					  // Si elle est sélectionnée
					  context.beginPath();
					  context.fillStyle = "#f00"; //Couleur du fond de la cellule
					  context.moveTo(this.x+this.r,this.y);
					  context.lineTo(this.x+(this.r*Math.cos(Math.PI/3)),this.y+(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x-(this.r*Math.cos(Math.PI/3)),this.y+(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x-this.r,this.y);
					  context.lineTo(this.x-(this.r*Math.cos(Math.PI/3)),this.y-(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x+(this.r*Math.cos(Math.PI/3)),this.y-(this.r*Math.sin(Math.PI/3)));
					  context.closePath();
					  context.fill();
					  } // Fin du if 
				else
					  { 
					  // Par défaut
					  context.beginPath();
					  context.fillStyle = "#000"; //Couleur du fond de la cellule
					  context.moveTo(this.x+this.r,this.y);
					  context.lineTo(this.x+(this.r*Math.cos(Math.PI/3)),this.y+(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x-(this.r*Math.cos(Math.PI/3)),this.y+(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x-this.r,this.y);
					  context.lineTo(this.x-(this.r*Math.cos(Math.PI/3)),this.y-(this.r*Math.sin(Math.PI/3)));
					  context.lineTo(this.x+(this.r*Math.cos(Math.PI/3)),this.y-(this.r*Math.sin(Math.PI/3)));
					  context.closePath();
					  context.fill();
					  } // Fin du else
				this.y = this.y+2*this.r; //				
				} // Fin for j
		      this.x=this.x+50; //
		    } // Fin for i
			/******************** Fin dessin du cache de la cellule *******************************/
			
			/******************** debut dessin des drapeau *********************************************/
			
			this.x = this.xOrigineHexa;
			for(i=2;i<this.nbColonneHexa-2;i=i+1)
			{
			  if(i%2==0){this.y=this.yOrigineHexa;}
			  else {this.y=this.yOrigineHexa+30;}
			  for (j=2;j<this.nbLigneHexa-2;j=j+1)
			  {
		   		if(this.celHexa[j][i].flag == 1 )
				{
				context.fillStyle = "#fff"; 
				context.beginPath(); // debut du chemin
				context.moveTo(this.x,this.y); 
				context.lineTo(this.x+13*Math.cos(5*Math.PI/6),+this.y+13*Math.sin(5*Math.PI/6)); 
				context.lineTo(this.x+13*Math.cos(7*Math.PI/6),+this.y+13*Math.sin(7*Math.PI/6));
				context.lineTo(this.x,this.y);
				context.closePath(); // fin du chemin 
				context.fill();	// remplissage des arc de cercles
				this.y = this.y+2*this.r;
			    } // Fin if
			  }
			   this.x=this.x+50;
			  }
			/******************** Fin dessin des drapeaux ***********************************************/
			
			
			
		/******************** Fin partie du dessin de la cellule  *******************************/
      
	  
	    }//Fin de la fonction dessin


	
		this.fonctionTest = function(){
		
		//this.celHexa[2][6].bombe=1;		  
		/*for(k=2;k<=this.nbLigneHexa;k++){
		this.celHexa[k][this.nbColonneHexa-3].bombe=1;	
		}*/
		
	  }
			
    }//Fin du constructeur Univers hexa









//*********************************** Fin classe Univers hexa **************************/ 