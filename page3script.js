
			var compteurPoint = 0;
			var cpt;
			var cpt2;
			var cpt4;
			var cpt3;
			var etat_compteur = 1;
			var etat_arret = 0;
			var reset_point;
		
			
				function dessinerrectangles()
				{
					
					var cnv=document.getElementById("canevas1");
					if (! cnv) { alert("Impossible de récupérer le canevas ...");return; }
					var ctx=cnv.getContext("2d");
					if (! ctx) { alert("Impossible de récupérer le contexte 2D ...");return; }

					ctx.beginPath();
					ctx.rect(0,0,1000,1000);
					ctx.fillStyle="rgba(0,0,0,1)";
					ctx.fill();
					ctx.closePath(); 
			
					
				}
			
			
			function dessinertraits()
				{
					
					var cnv=document.getElementById("canevas1");
					if (! cnv) { alert("Impossible de récupérer le canevas ...");return; }
					var ctx=cnv.getContext("2d");
					if (! ctx) { alert("Impossible de récupérer le contexte 2D ...");return; }
					/***************************************************************************************************
					************   Repere    ***************************************************************************
					***************************************************************************************************/
					ctx.beginPath();
					ctx.moveTo(0,500);
					ctx.lineTo(1000,500);
					ctx.lineWidth=1;
					ctx.strokeStyle="rgba(255,255,255,1)";
					ctx.stroke();
					ctx.closePath(); 
					
					ctx.beginPath();
					ctx.moveTo(500,0);
					ctx.lineTo(500,1000);
					ctx.lineWidth=1;
					ctx.strokeStyle="rgba(255,255,255,1)";
					ctx.stroke();
					ctx.closePath(); 
					
					/***************************************************************************************************
					************   GRADUATION    ***************************************************************************
					***************************************************************************************************/

					var espaceGraduation = 100;
					var nombreGraduation = 10;
					var positionGraduationXX = 0;
					var positionGraduationXY = 500;
					var comptageGraduation = 0;
					var newGraduationX = 0;
					var newGraduationY = 0;
					
					
					for(comptageGraduation; comptageGraduation < nombreGraduation; comptageGraduation++)
					{
						ctx.beginPath();
						ctx.moveTo(newGraduationX,495);
						ctx.lineTo(newGraduationX,505);
						ctx.lineWidth=1;
						ctx.strokeStyle="rgba(255,255,255,1)";
						ctx.stroke();
						ctx.closePath();
						
						newGraduationX = newGraduationX + espaceGraduation;
						
						ctx.beginPath();
						ctx.moveTo(495,newGraduationY);
						ctx.lineTo(505,newGraduationY);
						ctx.lineWidth=1;
						ctx.strokeStyle="rgba(255,255,255,1)";
						ctx.stroke();
						ctx.closePath();
						
						newGraduationY = newGraduationY + espaceGraduation;
		
					}
					
					/***************************************************************************************************
					************   Trait + point    ***************************************************************************
					***************************************************************************************************/
					var xDebut = -5;
					var xFin = 5;
					var abscisseX =500;
					var imagedeX = 500;
					var abscisseXNegatif = 0;
					var imagedeXNegatif = 0;
					var pas = 0.01;
					var TableauX = new Array();
					var TableauY = new Array();
					var nombreDePointsPrecis = ( xFin - xDebut )/ pas + 1;
					TableauX[0] = xDebut;
					TableauY[0] = Math.pow(xDebut,2);
					
					//Boucle pour créer le tableau des variables de x
					for(var indiceCaseX = 1; indiceCaseX <= nombreDePointsPrecis; indiceCaseX++)
					
						{
						TableauX[indiceCaseX] = TableauX[indiceCaseX - 1] + pas;
						TableauY[indiceCaseX] = Math.pow(TableauX[indiceCaseX],2);
						
						}
					for(var i = 0; i < TableauX.length; i++)
						
						{
						TableauX[i]=100*TableauX[i] + 500;
						TableauY[i]= -100*TableauY[i] + 500;
						}
					for(var i0= 0; i0 < TableauX.length - 1; i0++)
						{
						ctx.beginPath();
						ctx.moveTo(TableauX[i0],TableauY[i0]);
						ctx.lineTo(TableauX[i0+1],TableauY[i0+1]);
						ctx.lineWidth=1;
						ctx.strokeStyle="rgba(255,255,255,1)";
						ctx.stroke();
						ctx.closePath();
						}

					
						
					}
					
					
					
					
				function placerPoint()
					{
						if(reset_point ==0){
						var xDebut = -2;
						var xFin = 5;
						var pas = 0.1;
						var TableauX = new Array();
						var TableauY = new Array();
						var nombreDePointsPrecis = ( xFin - xDebut )/ pas +1;
						TableauX[0] = xDebut;
						TableauY[0] = Math.pow(xDebut,2);
						
						
						for(var indiceCaseX = 1; indiceCaseX <= nombreDePointsPrecis; indiceCaseX++)
					
						{
						TableauX[indiceCaseX] = TableauX[indiceCaseX - 1] + pas;
						TableauY[indiceCaseX] = Math.pow(TableauX[indiceCaseX],2);
						
						}
						for(var i = 0; i < TableauX.length; i++)
						
						{
						TableauX[i]=100*TableauX[i] + 500;
						TableauY[i]= -100*TableauY[i] + 500;
						}					
						
						 
						var cnv=document.getElementById("canevas1");
						if (! cnv) { alert("Impossible de récupérer le canevas ...");return; }
						var ctx=cnv.getContext("2d");
						if (! ctx) { alert("Impossible de récupérer le contexte 2D ...");return; }
						
						ctx.beginPath();
						ctx.arc(TableauX[compteurPoint],TableauY[compteurPoint],5,0,2*Math.PI);
						ctx.fillStyle="rgba(255,0,0,1)";
						ctx.fill();
						ctx.closePath(); 
						
						compteurPoint = compteurPoint + 1;
						
						document.getElementById("champ1").value=TableauX[compteurPoint];
						document.getElementById("champ2").value=TableauY[compteurPoint];
						}
						else{compteurPoint = 0;
						reset_point =0;}
						
						
						
						

					}
				
				
				function demarrercomptage()
				{
					if(etat_compteur ==1){
					  cpt2=setInterval(placerPoint,500);
					  cpt3=setInterval(dessinerrectangles,499);
					  cpt4=setInterval(dessinertraits,499);
					}
					  else{etat_compteur = 1;}
				  	
				}
				
				function arretercomptage()
				{
				  clearInterval(cpt2);
				  clearInterval(cpt3);
				  clearInterval(cpt4);
				  etat_compteur = 1;
				}
				
				function compteur(){
					etat_compteur++;
					
					}
				
				function arret(){
					etat_arret++;
					}
					
				function Reset(){
					reset_point++;
				}
				
				
				var position = 270;
				var seconde = 0;
				var interHorloge;
				var positionG = 270;
				var minute = 0;
				
				
				
				function chrono (){
					interHorloge=setInterval(aiguilleSeconde,1000);
					
				}
				
				function aiguilleSeconde(){
					
					/*position = position + ((Math.PI*seconde)/30);
					seconde++;
					var cnv=document.getElementById("canevas2");
					  if (! cnv) { alert("Impossible de récupérer le canevas ...");return; }
					  var ctx=cnv.getContext("2d");
					  if (! ctx) { alert("Impossible de récupérer le contexte 2D ...");return; }
					  
					  ctx.beginPath();
					  ctx.arc(300,300,300,0,2*Math.PI);
					  ctx.fillStyle="rgba(255,255,255,1)";			//Contour horloge 
					  ctx.fill();
					  ctx.closePath();
					  
					  ctx.beginPath();
					  ctx.arc(300,300,299,0,2*Math.PI);
					  ctx.fillStyle="rgba(0,0,0,1)";				//Fond noir horloge
					  ctx.fill();
					  ctx.closePath();
					  
					  ctx.beginPath();
					  ctx.arc(300,300,299,position,position+1);
					  ctx.fillStyle="rgba(255,0,0,1)";
					  ctx.fill();
					  ctx.closePath();*/
					  
					  
					  
					  var cnv=document.getElementById("canevas3");
					  if (! cnv) { alert("Impossible de récupérer le canevas ...");return; }
					  var ctx=cnv.getContext("2d");
					  if (! ctx) { alert("Impossible de récupérer le contexte 2D ...");return; }
					  
					  ctx.beginPath();
					  ctx.arc(300,300,300,0,2*Math.PI);
					  ctx.fillStyle="rgba(255,255,255,1)";			//Contour horloge 
					  ctx.fill();
					  ctx.closePath();
					  
					  ctx.beginPath();
					  ctx.arc(300,300,299,0,2*Math.PI);
					  ctx.fillStyle="rgba(0,0,0,1)";				//Fond noir horloge
					  ctx.fill();
					  ctx.closePath();
					  
					  /***************************************************************************************************
					  *************************  Aiguille Seconde ********************************************************
					  ***************************************************************************************************/
					  ctx.beginPath();
					  ctx.moveTo(300,300);
					  ctx.lineTo((300+300*Math.cos(position * Math.PI/180)),300+300*(Math.sin(position * Math.PI/180)));
					  
					  ctx.lineWidth=2;
					  ctx.strokeStyle="rgba(255,255,255,1)";
					  ctx.stroke();
					  ctx.fillStyle="rgba(255,255,255,1)";
					  ctx.fill();
					  ctx.closePath();
					  document.getElementById("champ1").value=seconde;
					  seconde++;
					  position = position + 6;
					   //***************************************************************************************************
					  
					  /***************************************************************************************************
					  *************************  Aiguille Minute  ********************************************************
					  ***************************************************************************************************/
					  
					  ctx.beginPath();
					  ctx.moveTo(300,300);
					  ctx.lineTo((300+200*Math.cos(positionG* Math.PI/180)),300+200*(Math.sin(positionG * Math.PI/180)));
					  
					  ctx.lineWidth=2;
					  ctx.strokeStyle="rgba(255,255,255,1)";
					  ctx.stroke();
					  ctx.fillStyle="rgba(255,255,255,1)";
					  ctx.fill();
					  ctx.closePath();
					  
					  if(seconde==60){
					  positionG = positionG + 6;          //Regarde quand le compteur atteint soit 60 pour changer la position
					  seconde = 0;
					  minute++;
					  }
					   //***************************************************************************************************
					  
					  document.getElementById("champ2").value=minute;
					  
					  
					  
					 
					 
				}
				
				
					
			
