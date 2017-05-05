<!-- 


var ratioDeTaille=0.75;
var gameStart = 0;   
	
	/******************************** Classe Cellule ******************************/
	
	function ClasseCellule(){
		
		this.bombe = 0;
		this.cache = 1;
		this.nombre = 0;
		this.flag = 0;
		this.infecte = 0;
		this.spec = 0;
		this.survol = 0;
	
	}
		
	 
	
	
	/******************************** Fin classe Cellule **************************/

//*********************************** classe Univers **************************
	// function constructeur d'objet Univers
	function Univers(nbCo,nbLi,nbBombe){
	
		/*********************  Espace concernant le tableau des cellules   ********************************/
		
		//Propriétés concernant la map
		this.largHaut= 45*ratioDeTaille ;             // largeur et hauteur d'une cellule * le ratio de taille
		this.espaceCellule = 5;		                  //Espace entre les cellules lors du dessin
		this.nbColonne = Math.abs(nbCo)+2;							  //Nombre de colonne total (7 visibles et 2 non visibles)
		this.nbLigne = Math.abs(nbLi)+2;							  //Nombre de ligne total   (10 visibles et 2 non visibles)
		this.coulFondCel = "rgb(0,255,0)";			  //Couleur de fond des cellules
		this.coulCacheCel = "rgb(0,0,0)";			  //Couleur du cache des cellules
		this.xDepartRectCel = 5;					  //Décalage du dessin en x 10 px par rapport aux à l'origine du canvas
		this.yDepartRectCel = 5;					  //Décalage du dessin en y 10 px par rapport aux à l'origine du canvas
		this.abscisseSourisCanvas =0;
		this.ordonneeSourisCanvas =0;
		this.abscisseSouris=0;
		this.ordonneeSouris=0;
		this.vivant = 1;
		this.seconde = 0;
		this.minute = 0;
		this.score = 0;
		this.nbBombes = Math.abs(nbBombe);
		this.nbCelSansBombe =(this.nbLigne-2)*(this.nbColonne-2)-this.nbBombes;
		this.vivant=1;
		this.caseRevele = 0;
		
		//construction du tableau des cellules du jeu
		this.cel = new Array();						  //Creation du tableau pour les lignes
		for(i=0;i<=this.nbLigne;i++){				  //Creation des lignes
		  this.cel[i] = new Array();				  //Creation du tableau pour les colonnes
		  for(j=0;j<=this.nbColonne;j++){			  //Creation des colonnes
		    this.cel[i][j] = new ClasseCellule(); //Creation des objets cellules
		  } //Fin for j
		} //Fin for i
	    //Fin creation tableau des cellules
		
		
				  				  
		for(j=0;j<=this.nbColonne;j++){	//Attribution de l'état spectateur de la 1ère ligne (non visible)		  
		  this.cel[0][j].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbColonne;j++){	//Attribution de l'état spectateur de la dernière ligne (non visible)			  
		  this.cel[this.nbLigne][j].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbLigne;j++){		//Attribution de l'état spectateur de la 1ère colonne (non visible)			  
		  this.cel[j][0].spec = 1;
		} //Fin for j
		for(j=0;j<=this.nbLigne;j++){	//Attribution de l'état spectateur de la dernière ligne (non visible)			  
		  this.cel[j][this.nbColonne].spec = 1;
		} //Fin for j
	
		/********************* Fin espace concernant le tableau des cellules   ********************************/

		
		
		/********************* Espace Winner  *****************************************************************/
		
		this.endGame = function()
		{
		  if(this.nbCelSansBombe<=this.caseRevele){
		     this.vivant=0;
		     alert('(づ｡◕‿‿◕｡)づ  Vous avez gagné  (づ｡◕‿‿◕｡)づ ');
		     console.log(this.vivant);	
			  
	       }
			
		}
		
		/******************** Fin espace Winner  **************************************************************/
		



		/********************* Espace concernant répartitions bombe aléatoire   ********************************/
		
		this.bombeAlea = function()
		
		{
	      for(i=0; i<this.nbBombes; i++){																 //Ajoute nb.bombe
			var xBombe = Math.floor(Math.random()*(this.nbLigne-2) + 1);
			var yBombe = Math.floor(Math.random()*(this.nbColonne-2) + 1);  	    			 //Emplacement x et y de la bombe redéfinis à chaque boucle
			if(this.cel[xBombe][yBombe].bombe==0){this.cel[xBombe][yBombe].bombe = 1;}         //Test si il n'y a pas de bombe placée à la cel[x][y], si test=true alors place une bombe
			else{i--;} 																		 //Si test=false alors decremente le compteur de bombe de 1 pour replacer la bombe                          
			}		//Fin du for i
		}//Fin function bombeAlea
		
		/********************* Fin espace concernant répartitions bombe aléatoire   ********************************/
		
		
		
		
		
		/********************* Espace concernant le spawn des chiffres  ********************************************/
		
		this.chiffreSpawn = function()
		{
			
		  for (i=1;i<=this.nbColonne-2 ;i++){ //Dessine les colonnes 
			for (j=1;j<=this.nbLigne-2;j++){	//Dessine les lignes			  
		      if(this.cel[j][i].bombe ==1){		//Regarde à l'emplacement de la cel[i][j] si il y a une bombe
			  //Fais apparaître des nombres dans les cases autours de la bombe
			  this.cel[j-1][i-1].nombre++;this.cel[j-1][i].nombre++;this.cel[j-1][i+1].nombre++;	//      1   1   1	
			  this.cel[j][i-1].nombre++;							this.cel[j][i+1].nombre++;      //      1   0   1
			  this.cel[j+1][i-1].nombre++;this.cel[j+1][i].nombre++;this.cel[j+1][i+1].nombre++;	//      1   1   1		  
			  }//Fin if
		    } //Fin for j
		  } //Fin for i
		}//Fin fonction chiffreSpawn
		
		/********************* Fin espace concernant le spawn des chiffres  ********************************************/
		
		
		
		
		/********************* Espace destruction avec souris  ****************************************************************/
		
		this.detectSouris = function(){
			/*
		  for(i=1;i<this.nbColonne-1;i++){
			if(this.abscisseSourisCanvas>=(i-1)*this.largHaut+this.espaceCellule*(i-1)+this.xDepartRectCel && this.abscisseSourisCanvas<=(i)*this.largHaut+this.espaceCellule*(i-1)+this.xDepartRectCel && this.ordonneeSourisCanvas >= this.xDepartRectCel && this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel  ){
			  this.abscisseSouris =i;
			}//Fin if
		  }//Fin for i
		  for(j=1;j<this.nbLigne-1;j++){
			if(this.ordonneeSourisCanvas>=(j-1)*this.largHaut+this.espaceCellule*(j-1)+this.xDepartRectCel && this.ordonneeSourisCanvas<=(j)*this.largHaut+this.espaceCellule*(j-1)+this.xDepartRectCel && this.abscisseSourisCanvas >= this.xDepartRectCel  && this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel){
			  this.ordonneeSouris =j;
			}//Fin if
		  }//Fin for i*/
	
		  
		  i=1+ (this.abscisseSourisCanvas - this.xDepartRectCel)/(this.largHaut + this.espaceCellule); // i est alors le numero de la (colonne + espaceCellule)
			if (i-Math.floor(i)< (this.largHaut)/(this.largHaut + this.espaceCellule) //prend les decimals et compare avec taille cellule
				&& this.ordonneeSourisCanvas >= this.xDepartRectCel // et souris dedans canvas
				&& this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel
				&& this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel 
				&& this.abscisseSourisCanvas>= this.xDepartRectCel){ 
			this.abscisseSouris =Math.floor(i);}  // entier de i est alors son numero de colonne
			
			
			
			j= 1+(this.ordonneeSourisCanvas - this.xDepartRectCel)/(this.largHaut + this.espaceCellule); //  est alors le numero de la (ligne + espaceCellule)
			if (j-Math.floor(j)< (this.largHaut)/(this.largHaut + this.espaceCellule)	//prend les decimals et compare avec taille cellule			
				&& this.ordonneeSourisCanvas >= this.xDepartRectCel // et souris dedans canvas
				&& this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel 
				&& this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel 
				&& this.abscisseSourisCanvas>= this.xDepartRectCel){ 
			this.ordonneeSouris =Math.floor(j);} // l'entier de j est alors le numero de ligne
			
			if (this.ordonneeSourisCanvas >= this.xDepartRectCel // et souris dedans canvas
				&& this.ordonneeSourisCanvas<= (this.nbLigne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel //...
				&& this.abscisseSourisCanvas<= (this.nbColonne-2)*(this.largHaut+this.espaceCellule) + this.xDepartRectCel //...
				&& this.abscisseSourisCanvas>= this.xDepartRectCel)//...
			{
				for (k=1;k<=this.nbColonne-2 ;k++){ //balayer toute les cases
					for (h=1;h<=this.nbLigne-2;h++){ //...
						if (this.cel[h][k].cache==1){
					this.cel[h][k].survol=0;} //mettre tout les cases en noir 
					} // fin du for h
				} // fin du for k
				this.cel[this.ordonneeSouris][this.abscisseSouris].survol=1; //remettre cellule survolé en rouge			
			}
			
			else //si la souris est hors de canvas 
				{for (k=1;k<=this.nbColonne-2 ;k++){  //balayer toute les cases
						for (h=1;h<=this.nbLigne-2;h++){ //...
						this.cel[h][k].survol=0; //retirer le surlignage rouge
						} // fin du for h
					} // fin du for k
				}
		}//Fin function detecSouris
		
		/********************* Fin espace détection souris  ****************************************************************/




		/******************** Espace drapeau *******************************************************************/
		
		this.placerFlag = function(xFlag,yFlag){
		  /*if(this.cel[xFlag][yFlag].flag ==0){	
			this.cel[xFlag][yFlag].flag =1;
		  }
		  else{this.cel[xFlag][yFlag].flag =0;}
			console.log(this.cel[xFlag][yFlag]);*/
			
			
			if(this.cel[xFlag][yFlag].flag ==0
		  && this.cel[xFlag][yFlag].cache==1
		  )
		  {	
			this.cel[xFlag][yFlag].flag =1;
		  }
		  else{this.cel[xFlag][yFlag].flag =0;}
			console.log(this.cel[xFlag][yFlag]);
		}
		
		
		
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
		  
		  alors : (Méthode général voir les modes de propagations pour l'expansion)								(Correspond à l'intérieur du if, exécution)
		  
		    Enlève le cache de la cellule infectée + enlève le cache des cellules adjacentes
		    Etat infecte = 1  de la case ciblé
			Test :
			  Si les cases adjacentes n'ont pas déjà subit une infection (donc etat infecte ==0)
			  &&
			  si les cases adjacentes ne sont pas spectatrice
			  
			  alors :
			    Lance une infection sur la case adjacente
				
				
		  Si la cellule ciblé est un nombre, dévoile juste le nombre (else pour les 5 méthodes)	
		  
		  
		  
		  */
		  
		 j= 1+(this.ordonneeSourisCanvas - this.xDepartRectCel)/(this.largHaut + this.espaceCellule); // j est alors le numero de la (ligne + espaceCellule)
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
		
			  	 
			/*break;
			case 1:
		      if(this.cel[xInfecte][yInfecte].nombre == 0 && this.cel[xInfecte][yInfecte].spec == 0 && this.cel[xInfecte][yInfecte].bombe == 0 && xInfecte<=this.nbLigne-2 && yInfecte<=this.nbColonne-2 &&xInfecte>=1 && yInfecte>=1)
			  {
				 this.cel[xInfecte][yInfecte].cache =0;
			     this.cel[xInfecte-1][yInfecte].cache=0;
			     this.cel[xInfecte+1][yInfecte].cache=0;
			     this.cel[xInfecte][yInfecte-1].cache=0;
			     this.cel[xInfecte][yInfecte+1].cache=0;
				 this.cel[xInfecte][yInfecte].infecte++;
			     this.cel[xInfecte-1][yInfecte].infecte++;
			     this.cel[xInfecte+1][yInfecte].infecte++;
			     this.cel[xInfecte][yInfecte-1].infecte++;
			     this.cel[xInfecte][yInfecte+1].infecte++;
			     if(this.cel[xInfecte-1][yInfecte].infecte<=1 && this.cel[xInfecte-1][yInfecte].spec == 0){this.infection(xInfecte-1,yInfecte,1);}
			     if(this.cel[xInfecte][yInfecte+1].infecte<=1 && this.cel[xInfecte][yInfecte+1].spec == 0){this.infection(xInfecte,yInfecte+1,2);}
			     if(this.cel[xInfecte][yInfecte-1].infecte<=1 && this.cel[xInfecte][yInfecte-1].spec == 0){this.infection(xInfecte,yInfecte-1,4);}
			  }
			  else{this.cel[xInfecte][yInfecte].cache =0;this.cel[xInfecte-1][yInfecte].infecte=1;}
			break;
			case 2: 
		      if(this.cel[xInfecte][yInfecte].nombre == 0 && this.cel[xInfecte][yInfecte].spec == 0 && this.cel[xInfecte][yInfecte].bombe == 0  && xInfecte<=this.nbLigne-2 && yInfecte<=this.nbColonne-2 && xInfecte>=1 && yInfecte>=1)
			  {
			     this.cel[xInfecte][yInfecte].cache =0;
			     this.cel[xInfecte-1][yInfecte].cache=0;
			     this.cel[xInfecte+1][yInfecte].cache=0;
			     this.cel[xInfecte][yInfecte-1].cache=0;
			     this.cel[xInfecte][yInfecte+1].cache=0;
				 this.cel[xInfecte][yInfecte].infecte++;
			     this.cel[xInfecte-1][yInfecte].infecte++;
			     this.cel[xInfecte+1][yInfecte].infecte++;
			     this.cel[xInfecte][yInfecte-1].infecte++;
			     this.cel[xInfecte][yInfecte+1].infecte++;
				 if(this.cel[xInfecte-1][yInfecte].infecte<=1 && this.cel[xInfecte-1][yInfecte].spec == 0){this.infection(xInfecte-1,yInfecte,1);}
			     if(this.cel[xInfecte][yInfecte+1].infecte<=1 && this.cel[xInfecte][yInfecte+1].spec == 0){this.infection(xInfecte,yInfecte+1,2);}
			     if(this.cel[xInfecte+1][yInfecte].infecte<=1 && this.cel[xInfecte+1][yInfecte].spec == 0){this.infection(xInfecte+1,yInfecte,3);}
			  }
			  else{this.cel[xInfecte][yInfecte].cache =0;this.cel[xInfecte-1][yInfecte].infecte=1;}	 
			break;
			case 3: 
		      if(this.cel[xInfecte][yInfecte].nombre == 0 && this.cel[xInfecte][yInfecte].spec == 0 && this.cel[xInfecte][yInfecte].bombe == 0 &&  xInfecte<=this.nbLigne-2 && yInfecte<=this.nbColonne-2 && xInfecte>=1 && yInfecte>=1)
			  {
			     this.cel[xInfecte][yInfecte].cache =0;
			     this.cel[xInfecte-1][yInfecte].cache=0;
			     this.cel[xInfecte+1][yInfecte].cache=0;
			     this.cel[xInfecte][yInfecte-1].cache=0;
			     this.cel[xInfecte][yInfecte+1].cache=0;
				 this.cel[xInfecte][yInfecte].infecte++;
			     this.cel[xInfecte-1][yInfecte].infecte++;
			     this.cel[xInfecte+1][yInfecte].infecte++;
			     this.cel[xInfecte][yInfecte-1].infecte++;
			     this.cel[xInfecte][yInfecte+1].infecte++;
			     if(this.cel[xInfecte][yInfecte+1].infecte<=1 && this.cel[xInfecte][yInfecte+1].spec == 0){this.infection(xInfecte,yInfecte+1,2);}
			     if(this.cel[xInfecte+1][yInfecte].infecte<=1 && this.cel[xInfecte+1][yInfecte].spec == 0){this.infection(xInfecte+1,yInfecte,3);}
			     if(this.cel[xInfecte][yInfecte-1].infecte<=1 && this.cel[xInfecte][yInfecte-1].spec == 0){this.infection(xInfecte,yInfecte-1,4);}
			  }
			  else{this.cel[xInfecte][yInfecte].cache =0;this.cel[xInfecte-1][yInfecte].infecte=1;}	 
			break;
			case 4: 
		      if(this.cel[xInfecte][yInfecte].nombre == 0 && this.cel[xInfecte][yInfecte].spec == 0 && this.cel[xInfecte][yInfecte].bombe == 0 && xInfecte<=this.nbLigne-2 && yInfecte<=this.nbColonne-2 && xInfecte>=1 && yInfecte>=1)
			  {
			     this.cel[xInfecte][yInfecte].cache =0;
			     this.cel[xInfecte-1][yInfecte].cache=0;
			     this.cel[xInfecte+1][yInfecte].cache=0;
			     this.cel[xInfecte][yInfecte-1].cache=0;
			     this.cel[xInfecte][yInfecte+1].cache=0;
				 this.cel[xInfecte][yInfecte].infecte++;
			     this.cel[xInfecte-1][yInfecte].infecte++;
			     this.cel[xInfecte+1][yInfecte].infecte++;
			     this.cel[xInfecte][yInfecte-1].infecte++;
			     this.cel[xInfecte][yInfecte+1].infecte++;
				 if(this.cel[xInfecte-1][yInfecte].infecte<=1 && this.cel[xInfecte-1][yInfecte].spec == 0){this.infection(xInfecte-1,yInfecte,1);}
			     if(this.cel[xInfecte+1][yInfecte].infecte<=1 && this.cel[xInfecte+1][yInfecte].spec == 0){this.infection(xInfecte+1,yInfecte,3);}
			     if(this.cel[xInfecte][yInfecte-1].infecte<=1 && this.cel[xInfecte][yInfecte-1].spec == 0){this.infection(xInfecte,yInfecte-1,4);}
			  }
			  else{this.cel[xInfecte][yInfecte].cache =0;this.cel[xInfecte-1][yInfecte].infecte=1;}	 
			break; 
	      }//Fin switch*/
		}//Fin function 
		
		/******************** Fin quarantaine *******************************************************************/
		
		
		
		
		/******************* 24 heures chrono ******************************************************************/
		
		this.chrono = function(){
			this.seconde++;
			this.score++;
			if(this.seconde==59){this.minute++;this.seconde =0;}
			document.getElementById("chrono").value = this.minute+":"+this.seconde;
			document.getElementById("score").value = this.score;
			
		}
		
		
		/******************* 24 heures chrono ******************************************************************/
		
		
		
		
		/******************* Zone artiste  ********************************************************************/
		
        this.dessiner = function(context){
			l = this.largHaut;  // variable locale pour simplifier l'ecriture
		    // on régénère l'arière plan			
			context.rect(0,0,((this.nbColonne-2)*l+this.espaceCellule*(this.nbColonne-2))+this.xDepartRectCel,((this.nbLigne-2)*l+this.espaceCellule*(this.nbLigne-2))+this.yDepartRectCel);
			context.fillStyle = "#fff"; 
			context.fill();
			

			/******************* Partie du dessin de la cellule *******************************/
			
			
			
			
			
			/********************  Dessin du fond de la cellule *******************************/
			
			for (i=1;i<=this.nbColonne-2 ;i++){ //Dessine les colonnes 
			  for (j=1;j<=this.nbLigne-2;j++){	//Dessine les lignes
	            context.beginPath();
				context.fillStyle = "rgb(0,255,0)"; //Couleur du fond de la cellule
                context.fillRect ((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel, (j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel, l, l); // Dessin du rectangle de largeur l avec un espace entre les rectangles de espaceCellule 
                context.fill();
			  }// fin du for j
			}	 // fin du for i
			
			/******************** Fin dessin du fond de la cellule *******************************/
			
			
			
			
			/******************** Dessin de la bombe *********************************************/
			
			for (i=1;i<=this.nbColonne-2 ;i++){ 
			  for (j=1;j<=this.nbLigne-2;j++){
		   		if(this.cel[j][i].bombe == 1 ){
				context.fillStyle = "#ff0000"; 
				context.beginPath(); // debut du chemin 
				context.arc((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2, 13,0,Math.PI/3); // dessin du premier arc de cercle qui va de 0 a PI/3
				context.moveTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2); 
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2+13*Math.cos(0),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(0)); 
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2+13*Math.cos(Math.PI/3),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(Math.PI/3));
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
				context.arc((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2, (j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2, 13,2*Math.PI/3,Math.PI); // dessin du deuxieme arc de cercle qui va de 2*PI/3 a PI
				context.moveTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2+13*Math.cos(2*Math.PI/3),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(2*Math.PI/3));
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2+13*Math.cos(Math.PI),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(Math.PI));
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
				context.arc((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2, (j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2, 13,4*Math.PI/3,5*Math.PI/3); // dessin du troisieme arc de cercle qui va de 4*PI/3 a 5*PI/3
				context.moveTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2+13*Math.cos(4*Math.PI/3),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(4*Math.PI/3));
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2+13*Math.cos(5*Math.PI/3),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(5*Math.PI/3));
				context.lineTo((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
				context.closePath(); // fin du chemin 
				context.fill();	// remplissage des arc de cercles 
			    }//Fin if
			  }//Fin for j
			}//Fin for i
		
		        // Les angles vont a l inverse du sens trigo (sens horaire)
			
			/******************** Fin dessin des bombes ********************************/
			
			
			
			
			/******************** Dessin des nombres  **********************************/
			
			for (i=1;i<=this.nbColonne-2 ;i++){ //Dessine les colonnes 
			  for (j=1;j<=this.nbLigne-2;j++){	//Dessine les lignes
			    if(this.cel[j][i].bombe == 0){  //Ne dessine pas si il y a une bombe dans cellule[j][i]
			      switch(this.cel[j][i].nombre){  //Test pour savoir le nombre présent dans la cellule[j][i]
					
					case 1 :// Si this.cel[j][i].nombre == 1 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("1",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;
					case 2 :// Si this.cel[j][i].nombre == 2 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("2",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;
					case 3 :// Si this.cel[j][i].nombre == 3 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("3",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;
					case 4 :// Si this.cel[j][i].nombre == 4 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("4",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;
					case 5 :// Si this.cel[j][i].nombre == 5 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("5",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;
					case 6 :// Si this.cel[j][i].nombre == 6 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("6",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;
					case 7 :// Si this.cel[j][i].nombre == 7 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("7",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;
					case 8 :// Si this.cel[j][i].nombre == 8 alors dessine dans la cellule[j][i] le chiffre de police 15, font Arial et de couleur bleu
					context.font  =  "15px Arial";
					context.fillText("8",(i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2,(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
					context.fillStyle ="#00f";
					break;	  
			      } // Fin switch
				} // Fin if
			  } // fin du for j
			} // fin du for i
			
			
			/******************** Fin dessin des nombres  **********************************/
			
			
			
			
			/********************  Dessin du cache de la cellule *******************************/
			/*
			for (i=1;i<=this.nbColonne-2 ;i++){ //Dessine les colonnes 
			  for (j=1;j<=this.nbLigne-2;j++){	//Dessine les lignes
			    if(this.cel[j][i].cache == 1){    //Vérifie si l'état de cache de cellule est == 1, si elle est cache, donc ==1, elle dessine un rectangle noir qui recouvre la cellule.
	              context.beginPath();
				  context.fillStyle = "rgb(0,0,0)"; //Couleur du cache de la cellule
                  context.fillRect ((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel, (j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel, l, l); // Dessin du rectangle de largeur l avec un espace entre les rectangles de espaceCellule 
                  context.fill();
				} // Fin if
			  } // fin du for j
			} // fin du for i*/
			
			
			for (i=1;i<=this.nbColonne-2 ;i++){ //Dessine les colonnes 
			  for (j=1;j<=this.nbLigne-2;j++){	//Dessine les lignes
				if(this.cel[j][i].survol==1
				&& this.cel[j][i].cache==1
				)
				{    //Vérifie si l'état de cache de cellule est == 1, si elle est cache, donc ==1, elle dessine un rectangle noir qui recouvre la cellule.
				  context.beginPath();
				  context.fillStyle = "rgb(250,0,0)"; //Couleur du surlignage de la cellule
				  context.fillRect ((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel, (j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel, l, l); // Dessin du rectangle de largeur l avec un espace entre les rectangles de espaceCellule 
				  context.fill();
				}
				else {
				  if(this.cel[j][i].cache==1 && this.cel[j][i].survol==0){
					context.beginPath();
					context.fillStyle = "rgb(0,0,0)"; //Couleur du cache de la cellule
					context.fillRect ((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel, (j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel, l, l); // Dessin du rectangle de largeur l avec un espace entre les rectangles de espaceCellule 
					context.fill();
				  }
				}// Fin else
			  }// fin du for j
			}// fin du for i
			
			
			/******************** Fin dessin du cache de la cellule *******************************/
			
			
			
			
			/******************** Dessin drapeau *************************************************/
			
			for (i=1;i<=this.nbColonne-2 ;i++){ //Dessine les colonnes 
			  for (j=1;j<=this.nbLigne-2;j++){	//Dessine les lignes
			    if(this.cel[j][i].flag == 1){  //Vérifie si il y a un drapeau sur la cellule
	              context.fillStyle = "#0000ff"; 
				  context.beginPath(); // debut du chemin
				  context.moveTo(((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2); 
				  context.lineTo(((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2)+13*Math.cos(5*Math.PI/6),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(5*Math.PI/6)); 
				  context.lineTo(((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2)+13*Math.cos(7*Math.PI/6),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2+13*Math.sin(7*Math.PI/6));
				  context.lineTo(((i-1)*l+this.espaceCellule*(i-1)+this.xDepartRectCel+l/2),(j-1)*l+this.espaceCellule*(j-1)+this.yDepartRectCel+l/2);
				  context.closePath(); // fin du chemin 
				  context.fill();	// remplissage des arc de cercles
				} // Fin if
			  } // fin du for j
			} // fin du for i

			/******************** Fin dessin drapeau **********************************************/
			 
			
	
			
			
		/******************** Fin partie du dessin de la cellule  *******************************/
      
	  
	  
	  
	    }/*****************************   Fin de la zone artiste *******************************/




		/**********************************Partie test *********************************************/
	
		
	  this.fonctionTest = function(){
		  
		  
	  }
			
		/********************************** Fin Partie test *********************************************/	
	
			
			
			
    }//Fin du constructeur Univers
//------------------------------fin de la classe Univers --------------------------------


function demarrage()
{   

	gameStart++; // Permets de lancer le jeu une seule fois
	
	/**************************** Zone détection souris ************************/

	
	  window.onmousemove=function(event) // Exécution lorsque la souris bouge.
        { 
		if(univ.vivant==1){
        /* univ.abscisseSourisCanvas=event.clientX-window.demineurId.getBoundingClientRect().left;  // lecture dans event des abscisse de la sourie
         univ.ordonneeSourisCanvas=event.clientY-window.demineurId.getBoundingClientRect().top;  // lecture dans event des ordonnee de la sourie
		 univ.detectSouris();*/
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
		   
		   if(clavier==100||clavier==68){univ.placerFlag(univ.ordonneeSouris,univ.abscisseSouris);}
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
		  if(univ.vivant==1){
		    univ.infection(univ.ordonneeSouris,univ.abscisseSouris);
			}
	  } // Fin window.onmousedown
	
	/****************************  Fin zone détection clic souris ************************/
	
	
	
	 // definition du timer en ms et de la fonction appellée par le timer
     // le jeu est redessiné toutes les 50 ms
	
	  var myInterval = setInterval(evoluer, 50);
	  var chrono = setInterval(timer,1000) //Appele la fonction timer
	  var finGame = setInterval(checkEnd,1000) 
	  
	  function timer(){if(univ.vivant==1){univ.chrono();}}
  
      function checkEnd(){univ.endGame();}
  
      function evoluer()
        {    
          if(univ.vivant==1){univ.dessiner(context)};
        } // Fin evoluer
	  
	
	
	  if(gameStart == 1){
		
        var monCanevas = document.getElementById("demineurId");
	 
        // tout est mis dans un if getContext de monCanevas afin d'éviter les plantage si canvas n'est pas géré par le navigateur
        if (monCanevas.getContext){
	      var context= monCanevas.getContext("2d");
	      var univ = new Univers(Math.abs(document.getElementById("nbColonne").value),Math.abs(document.getElementById("nbLigne").value),Math.abs(document.getElementById("nbBombe").value)); // instancie un univers nommé univ où l'on peut choisir le nb de colonne et de ligne ainsi que le nombre de bombe
	     //Création du canvas avec comme paramètre le nb de colonne, le nb de ligne, et le nombre de bombe correspondant aux champs respectifs
	    } // fin de if (monCanevas.getContext)
	    document.getElementById("start").hidden = true;
	    document.getElementById("textCo").hidden = true;
	    document.getElementById("textLi").hidden = true;
	    document.getElementById("textBo").hidden = true;
	    document.getElementById("nbColonne").hidden = true;				// Cache le menu
	    document.getElementById("nbLigne").hidden = true;
	    document.getElementById("nbBombe").hidden = true;
	    document.getElementById("chrono").hidden = false;
		document.getElementById("SendChronos").hidden = false;
		 document.getElementById("score").hidden = false;
       
	  } // Fin du if(gameStart)
 
	
	 
	 univ.bombeAlea();
     univ.chiffreSpawn(); //Génération des chiffres aléatoires
     univ.fonctionTest();
	 
 
}    //   fin du demarrage

function cache(){
	 document.getElementById("pseudo").hidden = true;
	 document.getElementById("submitPseudo").hidden = true;
	
}


-->    