<!--  
var ratioDeTaille=0.7;
//*********************************** classe pacman **************************
	// function constructeur d'objet pacMan
	function ClassePM(li,co,or){
		this.vivant = 1;
		this.orientation  =or; 
		this.ligne = li;
		this.colonne = co;
		this.score= 0;
		this.liSouhaite = li;
		this.coSouhaite = co ;
		this.ouverture = 0;
		this.compteur = 0;
		this.couleurOrientation = "";
		
	
	
		//---- afficher les propriété dans des champs de formulaire
		this.afficherPropriete= function(champ1, champ2, champ3, champ4){	
			champ1.value=this.score;
			champ2.value=this.colonne;
			champ3.value=this.orientation;
			champ4.value=this.ligne;
		}
		this.dessiner = function(context,echelle){
			
			var x = 	(this.colonne-1)*echelle +echelle/2;     ///abcsisse du centre
			var y =     (this.ligne-1)*echelle  +echelle/2 ;	/// ordonnée du centre
		   
		   
			if(this.orientation==1){this.couleurOrientation = "rgb(255,0,0)";}
			else if(this.orientation==2){this.couleurOrientation = "rgb(0,255,255)";} 
			else if(this.orientation==3){this.couleurOrientation = "rgb(255,255,0)";}
			else if(this.orientation==4){this.couleurOrientation = "rgb(255,0,255)";}
			
		   
			context.fillStyle = this.couleurOrientation; 
			
			context.beginPath();
			context.arc(x, y, 13*ratioDeTaille, Math.PI*(2.15-(0.5*(this.orientation-1)))-this.ouverture/2, Math.PI*(1.85-(0.5*(this.orientation-1)))+this.ouverture/2);
			context.lineTo(x,y);
			context.closePath();
			if(this.vivant==1){context.fill();}
			else{alert("Pacman has been slayed");}	
			
			/*context.fillStyle = "rgb(255,0,0)";
			context.beginPath();
			context.arc(x, y, 8, Math.PI*(2.15-(0.5*(this.orientation-1)))-this.ouverture, Math.PI*(1.85-(0.5*(this.orientation-1))))-this.ouverture;
			context.lineTo(x,y);
			context.closePath();
			context.fill();	
		 */
			

		}
		
		this.claquerLesDents = function(ouverture,compteur){
			this.compteur++;
			
			
				
					this.ouverture = Math.PI*0.15*(Math.cos(this.compteur/2)+1);
				
					
				
			
		}
				
		
	}
//****************************** fin de la classe pacman *************************************

/********************************************************************************************
******************************** Début classe Ghost 1 ***************************************
*********************************************************************************************/
	function ClasseG(g,li,co,or,mod){
		this.vivant = 1;
		this.orientation  =or; 
		this.ligne = li;
		this.colonne = co;
		this.score= 0;
		this.liSouhaite = li;
		this.coSouhaite = co ;
		this.ouverture = 0;
		this.compteur = 0;
		
	
		this.dessiner = function(context,echelle){
			
			var x = 	(this.colonne-1)*echelle +echelle/2; //abcsisse du centre
			var y =     (this.ligne-1)*echelle  +echelle/2 ;	// ordonnée du centre
		   
		   

			
		   
			context.fillStyle = ("#ff0000"); 
			
			context.beginPath();
			context.arc(x, y, 13*ratioDeTaille, Math.PI*1, Math.PI*0 );
			context.lineTo(x+13*ratioDeTaille,y+13*ratioDeTaille);
			context.lineTo(x+7.5*ratioDeTaille,y);
			context.lineTo(x,y+13*ratioDeTaille);
			context.lineTo(x-7.5*ratioDeTaille,y);
			context.lineTo(x-13*ratioDeTaille,y+13*ratioDeTaille);
			context.closePath();
			context.fill();	
			
		
			

		}
		
	
	}

/*************************************************************************************************
******************************** Fin Classe Ghost 1 **********************************************
*************************************************************************************************/


//****************************** classe Univers **************************************************
	// function constructeur d'objet de la classe ClasseUnivers
	function ClasseUnivers(){
		this.largHaut= 45*ratioDeTaille ; // largeur et hauteur d'une cellule
		this.coulFond  = "#000000" ; //couleur du fonf : gris très clair
		this.coulMur = "rgb(0,0,200)";     // couleur des murs : noir.
		this.coulFromage = "rgb(255,255,0)";     // couleur des fromage : bleu.
		this.coulPoint = "rgb(255,200,0";     // couleur des point : cyan.
		this.nbLigne = 15;
		this.nbColonne = 15;
		//construction du tableau des cellules du jeu 
		this.cel = new Array();
		this.cel[0] = new Array(); 
		this.cel[1] = new Array();    
		this.cel[2] = new Array();    
		this.cel[3] = new Array();
		this.cel[4] = new Array();    
		this.cel[5] = new Array();
		this.cel[6] = new Array();
		this.cel[7] = new Array(); 
		this.cel[8] = new Array();
		this.cel[9] = new Array();
		this.cel[10] = new Array();
		this.cel[11] = new Array();
		this.cel[12] = new Array();
		this.cel[13] = new Array(); 
		this.cel[14] = new Array();
		this.cel[15] = new Array();
		
this.cel[1][1] = 3;	this.cel[1][2] = 3;	this.cel[1][3] = 3;	this.cel[1][4] = 3;	this.cel[1][5] = 3;	this.cel[1][6] = 3;	this.cel[1][7] = 3;	this.cel[1][8] = 3;	this.cel[1][9] = 3;	this.cel[1][10] = 3;	this.cel[1][11] = 3;	this.cel[1][12] = 3;	this.cel[1][13] = 3;	this.cel[1][14] = 3;	this.cel[1][15] = 3;
this.cel[2][1] = 3;	this.cel[2][2] = 1;	this.cel[2][3] = 3;	this.cel[2][4] = 1;	this.cel[2][5] = 1;	this.cel[2][6] = 1;	this.cel[2][7] = 3;	this.cel[2][8] = 1;	this.cel[2][9] = 1;	this.cel[2][10] = 1;	this.cel[2][11] = 1;	this.cel[2][12] = 1;	this.cel[2][13] = 1;	this.cel[2][14] = 1;	this.cel[2][15] = 3;
this.cel[3][1] = 3;	this.cel[3][2] = 1;	this.cel[3][3] = 1;	this.cel[3][4] = 1;	this.cel[3][5] = 3;	this.cel[3][6] = 1;	this.cel[3][7] = 3;	this.cel[3][8] = 3;	this.cel[3][9] = 3;	this.cel[3][10] = 1;	this.cel[3][11] = 1;	this.cel[3][12] = 1;	this.cel[3][13] = 3;	this.cel[3][14] = 3;	this.cel[3][15] = 3;
this.cel[4][1] = 3;	this.cel[4][2] = 1;	this.cel[4][3] = 3;	this.cel[4][4] = 1;	this.cel[4][5] = 1;	this.cel[4][6] = 1;	this.cel[4][7] = 1;	this.cel[4][8] = 1;	this.cel[4][9] = 3;	this.cel[4][10] = 3;	this.cel[4][11] = 3;	this.cel[4][12] = 1;	this.cel[4][13] = 1;	this.cel[4][14] = 1;	this.cel[4][15] = 3;
this.cel[5][1] = 3;	this.cel[5][2] = 1;	this.cel[5][3] = 3;	this.cel[5][4] = 1;	this.cel[5][5] = 3;	this.cel[5][6] = 1;	this.cel[5][7] = 3;	this.cel[5][8] = 1;	this.cel[5][9] = 3;	this.cel[5][10] = 1;	this.cel[5][11] = 3;	this.cel[5][12] = 1;	this.cel[5][13] = 1;	this.cel[5][14] = 1;	this.cel[5][15] = 3;
this.cel[6][1] = 3;	this.cel[6][2] = 1;	this.cel[6][3] = 3;	this.cel[6][4] = 1;	this.cel[6][5] = 1;	this.cel[6][6] = 1;	this.cel[6][7] = 3;	this.cel[6][8] = 1;	this.cel[6][9] = 3;	this.cel[6][10] = 1;	this.cel[6][11] = 3;	this.cel[6][12] = 3;	this.cel[6][13] = 3;	this.cel[6][14] = 1;	this.cel[6][15] = 3;
this.cel[7][1] = 3;	this.cel[7][2] = 1;	this.cel[7][3] = 3;	this.cel[7][4] = 3;	this.cel[7][5] = 3;	this.cel[7][6] = 1;	this.cel[7][7] = 1;	this.cel[7][8] = 1;	this.cel[7][9] = 1;	this.cel[7][10] = 1;	this.cel[7][11] = 3;	this.cel[7][12] = 1;	this.cel[7][13] = 3;	this.cel[7][14] = 1;	this.cel[7][15] = 3;
this.cel[8][1] = 3;	this.cel[8][2] = 1;	this.cel[8][3] = 1;	this.cel[8][4] = 1;	this.cel[8][5] = 1;	this.cel[8][6] = 3;	this.cel[8][7] = 1;	this.cel[8][8] = 1;	this.cel[8][9] = 1;	this.cel[8][10] = 1;	this.cel[8][11] = 1;	this.cel[8][12] = 1;	this.cel[8][13] = 1;	this.cel[8][14] = 1;	this.cel[8][15] = 3;
this.cel[9][1] = 3;	this.cel[9][2] = 1;	this.cel[9][3] = 3;	this.cel[9][4] = 1;	this.cel[9][5] = 3;	this.cel[9][6] = 3;	this.cel[9][7] = 1;	this.cel[9][8] = 3;	this.cel[9][9] = 3;	this.cel[9][10] = 1;	this.cel[9][11] = 3;	this.cel[9][12] = 1;	this.cel[9][13] = 3;	this.cel[9][14] = 1;	this.cel[9][15] = 3;
this.cel[10][1] = 3;	this.cel[10][2] = 1;	this.cel[10][3] = 3;	this.cel[10][4] = 1;	this.cel[10][5] = 1;	this.cel[10][6] = 3;	this.cel[10][7] = 1;	this.cel[10][8] = 1;	this.cel[10][9] = 1;	this.cel[10][10] = 1;	this.cel[10][11] = 3;	this.cel[10][12] = 1;	this.cel[10][13] = 3;	this.cel[10][14] = 1;	this.cel[10][15] = 3;
this.cel[11][1] = 3;	this.cel[11][2] = 1;	this.cel[11][3] = 3;	this.cel[11][4] = 1;	this.cel[11][5] = 3;	this.cel[11][6] = 3;	this.cel[11][7] = 1;	this.cel[11][8] = 3;	this.cel[11][9] = 3;	this.cel[11][10] = 1;	this.cel[11][11] = 3;	this.cel[11][12] = 3;	this.cel[11][13] = 3;	this.cel[11][14] = 1;	this.cel[11][15] = 3;
this.cel[12][1] = 3;	this.cel[12][2] = 1;	this.cel[12][3] = 1;	this.cel[12][4] = 1;	this.cel[12][5] = 1;	this.cel[12][6] = 1;	this.cel[12][7] = 1;	this.cel[12][8] = 1;	this.cel[12][9] = 1;	this.cel[12][10] = 1;	this.cel[12][11] = 1;	this.cel[12][12] = 1;	this.cel[12][13] = 1;	this.cel[12][14] = 1;	this.cel[12][15] = 3;
this.cel[13][1] = 3;	this.cel[13][2] = 1;	this.cel[13][3] = 3;	this.cel[13][4] = 1;	this.cel[13][5] = 3;	this.cel[13][6] = 1;	this.cel[13][7] = 3;	this.cel[13][8] = 1;	this.cel[13][9] = 3;	this.cel[13][10] = 1;	this.cel[13][11] = 3;	this.cel[13][12] = 3;	this.cel[13][13] = 1;	this.cel[13][14] = 1;	this.cel[13][15] = 3;
this.cel[14][1] = 3;	this.cel[14][2] = 1;	this.cel[14][3] = 1;	this.cel[14][4] = 1;	this.cel[14][5] = 1;	this.cel[14][6] = 1;	this.cel[14][7] = 3;	this.cel[14][8] = 1;	this.cel[14][9] = 1;	this.cel[14][10] = 1;	this.cel[14][11] = 3;	this.cel[14][12] = 1;	this.cel[14][13] = 1;	this.cel[14][14] = 1;	this.cel[14][15] = 3;
this.cel[15][1] = 3;	this.cel[15][2] = 3;	this.cel[15][3] = 3;	this.cel[15][4] = 3;	this.cel[15][5] = 3;	this.cel[15][6] = 3;	this.cel[15][7] = 3;	this.cel[15][8] = 3;	this.cel[15][9] = 3;	this.cel[15][10] = 3;	this.cel[15][11] = 3;	this.cel[15][12] = 3;	this.cel[15][13] = 3;	this.cel[15][14] = 3;	this.cel[15][15] = 3;

		
/*		//  affichage de la matrice:
		for (j=1;j<=this.nbLigne ;j++){
			monMessage="";
			for (i=1;i<=this.nbColonne ;i++){	
			  monMessage=monMessage+this.cel[j][i]+",";
			}	
			console.log(monMessage);	 	
		}*/
		
		
/**************************************************************************************************************************
**************************************************************************************************************************
**************************************************************************************************************************
***********************************           HEAT MAP         ***********************************************************
**************************************************************************************************************************
**************************************************************************************************************************
**************************************************************************************************************************/
	
		this.calcHeatMap = function(xx,yy){
			
			// 1ère étape : Attribution des valeurs 0 au murs
			for (j=1; j<=8; j++){
				for(i=1; i<=9; i++){
					
				}
			}
			
		}
		
		
		
		
		this.dessiner = function(context){
		 // dessin des cellules
	        l = this.largHaut;  // variable locale pour simplifier l'ecriture
	        lS2 =  l/2;   // demi largeur
			for (i=1;i<=15;i++){
			 for (j=1;j<=15;j++){	
				// definition de la couleur de fond
		      if (this.cel[j][i]<3 ){	 
	            context.fillStyle = this.coulFond; 
	          }
	          if (this.cel[j][i]==3 ){	 
	            context.fillStyle = this.coulMur; 
			  }
	          // dessin du fond des cellules
	          context.beginPath();
              context.fillRect ((i-1)*l, (j-1)*l, l, l);
              context.fill();
              // dessin des points :
              if (this.cel[j][i]==1 ){
			    context.fillStyle = this.coulPoint; 
			    context.beginPath();
			    context.arc((i-1)*l+lS2, (j-1)*l+lS2-4*ratioDeTaille, 3, 0, Math.PI*2);
			    context.fill();
		      }
		      // dessin des fromages:
              if (this.cel[j][i]==2 ){
			    context.fillStyle = this.coulFromage; 
			    context.beginPath();
			    context.arc((i-1)*l+lS2, (j-1)*l+lS2-4*ratioDeTaille, 10, 0, Math.PI*2);
			    context.fill();
		      }
          
			 } 	  // fin du for j
			}	 // fin du for i

		}// fin desssiner univers

	}
//********************************** fin de la classe Univers************************************

//****************************  classe jeu *************************
    //constructeur de la classe Classejeu 
    function ClasseJeu(){
		this.univ = new ClasseUnivers();
		this.pm = new ClassePM(10,10,1);
		this.g1 = new ClasseG(1,4,4,4,1);                   // Emplacement des entités (ligne,colonne,orientation)
		this.g2 = new ClasseG(2,13,13,4,2);          
		
		
		//------- deplacer à gauche --------------------
		this.allerGauche =	function(){
			this.pm.orientation = 3; 			
			this.pm.coSouhaite = this.pm.colonne -1;
			this.pm.liSouhaite = this.pm.ligne;
						
			if ((this.univ.cel[this.pm.liSouhaite][this.pm.coSouhaite]<3) && (this.pm.vivant ==1) &&(this.pm.coSouhaite>=1))
			{
				this.pm.colonne = this.pm.colonne-1;
				this.pm.score = this.pm.score + this.univ.cel[this.pm.ligne][this.pm.colonne];
				this.univ.cel[this.pm.ligne][this.pm.colonne] = 0;
			}	
			
		}	
		//-------- déplacer à droite
		this.allerDroit = function(){				
			this.pm.orientation = 1;
			this.pm.liSouhaite = this.pm.ligne;
			this.pm.coSouhaite =this.pm.colonne +1;
			if ((this.univ.cel[this.pm.liSouhaite][this.pm.coSouhaite]<3) && (this.pm.vivant ==1) &&(this.pm.coSouhaite<=15	))
			{
				this.pm.colonne = this.pm.colonne +1;
				this.pm.score = this.pm.score + this.univ.cel[this.pm.ligne][this.pm.colonne];
				this.univ.cel[this.pm.ligne][this.pm.colonne] = 0;
			}
		
		}
		
		//-------- Déplacer en haut
		this.allerHaut = function()
		{
			this.pm.orientation = 2;
			this.pm.liSouhaite = this.pm.ligne -1;
			this.pm.coSouhaite =this.pm.colonne;
			
			if ((this.univ.cel[this.pm.liSouhaite][this.pm.coSouhaite]<3) && (this.pm.vivant == 1) && (this.pm.liSouhaite>=1))
			{
				this.pm.ligne = this.pm.ligne-1;
				this.pm.score = this.pm.score + this.univ.cel[this.pm.ligne][this.pm.colonne];
				this.univ.cel[this.pm.ligne][this.pm.colonne] = 0;
			}
			
		}
		
		//-------- Déplacer en Bas
		this.allerBas = function()
		{
			this.pm.orientation = 4;
			this.pm.liSouhaite = this.pm.ligne +1;
			this.pm.coSouhaite =this.pm.colonne;
			
			if ((this.univ.cel[this.pm.liSouhaite][this.pm.coSouhaite]<3) && (this.pm.vivant == 1) && (this.pm.liSouhaite<=15))
			{
				this.pm.ligne = this.pm.ligne+1;
				this.pm.score = this.pm.score + this.univ.cel[this.pm.ligne][this.pm.colonne];
				this.univ.cel[this.pm.ligne][this.pm.colonne] = 0;
			}
			
		}
		
			
		this.dessiner =function(context){
			// dessin de l'univers
	        this.univ.dessiner(context);
			// dessin de pacMan			
	        this.pm.dessiner(context,this.univ.largHaut);
			//dessin de g1
	        this.g1.dessiner(context,this.univ.largHaut);
			//dessin de g2
			this.g2.dessiner(context,this.univ.largHaut);
			
		}	
		
		// Manger
		this.manger = function(g){ 
		  if((this.pm.colonne == g.colonne) && (this.pm.ligne == g.ligne))//||(this.pm.colonne == this.g.colonne) && (this.pm.ligne == this.g2.ligne))
		  { 
			  this.pm.vivant=0;
		  }
		}
		
		/********************************************************************************************
		************************ DEPLACER MANHATTAN************************************************** 
		********************************************************************************************/
		this.deplacerManhattan = function(g)
		{
			
			
			man = Math.abs(this.pm.colonne-g.colonne)+ Math.abs(this.pm.ligne-g.ligne);
			
			if((Math.abs(this.pm.colonne-(g.colonne+1))+ Math.abs(this.pm.ligne-g.ligne)< man)&&(g.colonne<=15) && (this.univ.cel[g.ligne][g.colonne+1]<3)){g.colonne++;}// à droite
			else if ((Math.abs(this.pm.colonne-(g.colonne-1))+ Math.abs(this.pm.ligne-g.ligne)< man)&&(g.colonne>=1) && (this.univ.cel[g.ligne][g.colonne-1]<3)){g.colonne--;}//a gauche
			else if ((Math.abs(this.pm.colonne-g.colonne)+ Math.abs(this.pm.ligne-(g.ligne-1))< man)&&(g.ligne>=1) && (this.univ.cel[g.ligne-1][g.colonne]<3)){g.ligne--;}//bas
			else if ((Math.abs(this.pm.colonne-g.colonne)+ Math.abs(this.pm.ligne-(g.ligne+1))< man)&&(g.ligne<=15) && (this.univ.cel[g.ligne+1][g.colonne]<3)){g.ligne++;}//haut
			
			
			console.log('manh');
		
			
		}
		
		/********************************************************************************************
		************************ DEPLACER AlEATOIRE**************************************************
		********************************************************************************************/
		
		
		
		this.deplacerAleatoire = function(g)
		{
			
			g.compteur++;
			if(g.compteur>10){
			
			switch(parseInt(4*Math.random()))
			{
			case 0 : g.liSouhaite = g.ligne - 1, g.coSouhaite = g.colonne;//Déplacement en haut sur la colonne
			break; 			
			case 1 : g.liSouhaite = g.ligne, g.coSouhaite = g.colonne + 1;//Déplacement à droite sur la ligne
			break;			
			case 2 : g.liSouhaite = g.ligne, g.coSouhaite = g.colonne - 1;//Déplacement à gauche sur la ligne
			break;			
			case 3 : g.liSouhaite = g.ligne + 1, g.coSouhaite = g.colonne; //Déplacement en bas sur la colonne
			break;
			}
			//Avancement du ghost
			if(
			(this.univ.cel[g.liSouhaite][g.coSouhaite]<3) //Test d'un mur
			&&
			(g.liSouhaite<=15) //Test dépasse la ligne max (en bas)
			&&
			(g.liSouhaite>=1) //Test dépasse la ligne min (en haut)
			&&
			(g.coSouhaite>=1) // Test dépasse la colonne min (à gauche)
			&&
			(g.coSouhaite<=15)// Test dépasse la colonne max (à droite)
			) 
				{
				g.ligne = g.liSouhaite;
				g.colonne = g.coSouhaite;
				}
				
			
			g.compteur = 0;	
			}
		}
		
		
	}	
//****************************  fin  classe jeu *************************
                 



window.onload = function()
{   
	//*************************** zoe de définition des fonctions **************
	

	
	function clickDroit(){
	    j.allerDroit();
		
	}	
	function clickGauche(){
		j.allerGauche();		
	}	
	
	function clickHaut()
	{
		j.allerHaut();
	}
	function clickBas()
	{
		j.allerBas();
	}
	
  // la fonction évoluer n'est pas appelé immédiatement lors du chargement mais seulement par le timer	
  
  function evoluer()
    {    
        // pour l'instant la fonction evoluer ne fait que dessiner le jeu, afficher les propriété de pm, + animations des dents
		j.deplacerAleatoire(j.g1);//j.deplacerAleatoire(j.g2);
		j.dessiner(context);
		j.pm.afficherPropriete(document.getElementById("score"),document.getElementById("colonne"),document.getElementById("orientation"),document.getElementById("ligne"));
		j.pm.claquerLesDents();
		j.manger(j.g1);
		j.manger(j.g2);
		

		}
  function evoluer2()
  {
	  j.deplacerManhattan(j.g2);
  }
  //******************* fin definition des fonctions**************  
  //************************************************************** 
  //	debutdu code exécuté au chargement de la page
  //**************************************************************
  
  var monCanevas = document.getElementById("canvasId");
  // tout est mis dans un if getContext de monCanevas afin d'éviter les plantage si canvas n'est pas géré par le navigateur
  if (monCanevas.getContext){

    var context= monCanevas.getContext("2d"); 
 
     
    // instancie(construit) un jeu  nommé  j
    var j = new ClasseJeu();
    
    
    // definition du timer en ms et de la fonction appellée par le timer
    // ATTENTION : pas de parenthèses pour la fonction appelée
    // le jeu est redessiné toutes les 30 ms
    var myInterval   = setInterval(evoluer,   30);
	var Invertal1sec = setInterval(evoluer2, 750);

    
    
    // Gestion des évènements
    // les événements appellent des fonctions
	
	window.onkeydown=key;

/********************************************************************
******************** Controle ***************************************
********************************************************************/
	
       function key(event){
		
		event = event || window.event; // autres navigateurs vs Internet Explorer
		  var code = event.which || event.keyCode; // idem
		  console.log(event.keyCode)
		  switch(code){
		  case 90 : j.allerHaut();
		  break;					//Allez en haut avec z ou fleche du haut
		  case 38 : j.allerHaut();
		  break;
		  case 81 : j.allerGauche();
		  break;					// Allez a gauche avec q et fleche de gauche
		  case 37 : j.allerGauche();
		  break;
		  case 83 : j.allerBas(); 
		  break;					// Allez en bas avec s ou fleche de bas
		  case 40 : j.allerBas();
		  break;
		  case 68 : j.allerDroit();
		  break;					//Allez a droite avec d ou fleche de droite
		  case 39 : j.allerDroit();
		  break;
		  }
	}
    

    
  }     // fin de   if (monCanevas.getContext)
   
   //   fin de window.onload = function()
}


-->    