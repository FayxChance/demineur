function probabilite(){
	var nbTotalEssai = document.getElementById('nbLancer').value; nbSucces = document.getElementById('nbSucces').value; probabilite = document.getElementById('proba').value;
	var nFactorielle=1;kFactorielle=1;nkFactorielle=1; esperance=1;variance=1;ecartType=1;
	//C 'p   n'= n! / ((n-p)!p!) anglosaxon inverse en francais p = k , n=n
	
	//p(X=k)=(n  k)*p^k*(1-p)^(n-k) =
	// (n   k) = n!/ ((n-k)!k!)
	
	//Pascal (n  k)
	function calculPascal(){
		for(i=1;i<=nbTotalEssai;i++){
			nFactorielle =nFactorielle*i;
		} //2 factorielle
		for(j=1;j<=nbSucces;j++){
			kFactorielle =kFactorielle*j;
		}
		for(k=1;k<=nbTotalEssai-nbSucces;k++){
			nkFactorielle =nkFactorielle*k;
		}
		
			
		
	}
	esperance= nbTotalEssai*probabilite;
	variance = nbTotalEssai*probabilite*(1-probabilite);
	ecartType=Math.pow(nbTotalEssai*probabilite*(1-probabilite),0.5);
	pascal=nFactorielle/(kFactorielle*nkFactorielle);
	pXegaleK= pascal*Math.pow(probabilite,nbSucces)*Math.pow((1-probabilite),nbTotalEssai-nbSucces);
	document.getElementById('resultat').innerHTML= ""	;
	document.getElementById('resultat').innerHTML= "p(X=k)="+ pXegaleK+"<br>"+"Esperance = "+esperance+"<br>"+"Variance = "+variance+"<br>"+"Ecart Type = "+ecartType;
		
}

function simu(){
		
		var N=document.getElementById('nbLancer').value;
		var a=0;b=0;c=0;e=0;
		for(k=1;k<=N;k++){
			var s=0;
			for(l=1;l<=3;l++){
				var d=0;			
				d=parseInt(6*Math.random()+1);
				if(d==6){
					s++;	
				}
			}
			switch(s){
			case 0:a++;
			break;	
			case 1:b++;
			break;
			case 2:c++;
			break;
			case 3:e++;
			break;
			}
			
			
		}
	document.getElementById('resultat').innerHTML= 'A/N= '+a/N+' <br> B/N='+b/N+'<br> C/N ='+c/N+'<br> D/N ='+e/N;	
}
