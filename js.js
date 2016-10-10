var win = false;

var pontos = 0;
var totPontos = 0;

var valorClick = 1;

var comprasIDT = ["Estagiário","Faxineiro","Computador","Secretário","Professor","Sala de aula","Curso Tecnico","Auditório","Curso Superior","Coordenador"];
var comprasIMG = ["es.png","faxineiro.png","pc.png","sc.png","pf.png","sala.png","ct.png","auditorio.png","cs.png","mf.png"];
var comprasQTD = [0,0,0,0,0,0,0,0,0,0];
var comprasPRC = [15,120,1100,10000,100000,500000,1000000,8000000, 50000000, 500000000];
var comprasVLR = [ 1,  5,  20,   40,   300,  1500,   3000,  15000,    80000,    350000];

var comprasPROGRESS = [];
var comprasVISIBLE = [];

var specialUpgradesIMG = ["star.png","star.png","star.png","star.png","no have","mouse.png","mouse.png","mouse.png"];

var upgradesIDT = [
	"Período de estágio maior!",
	"Material de limpeza novo!",
	"Computadores de última geração!",
	"Escritório maior!",	
	"Doutorado!",
	"Projetores em salas de aula!",
	"Trabalho de conclusão de curso!",
	"Revestimento Acústico!",
	"Laboratórios de computação!",
	"Acho que é o fim!"
];
	
var specialUpgradesIDT = [
	"Ar condicionado!",
	"Elevador!",
	"Internet de 1 GIGA!",
	"Gerador de energia!",
	"ALL 5",	
	"#PrayForMouse I",
	"#PrayForMouse II",
	"#PrayForMouse III"
];

var upgradesDES = [
	"Os esc... ops, estágiarios do DECOM cumprirão com uma carga horária maior. Seus estagiários produzirão 2 vezes mais decoins.",
	"Manter o prédio limpo é mais do que necessário. Para isso, nada melhor que o poder do novo Danish poder O2! Seus faxineiros produzirão 2 vezes mais decoins.",
	"Se tem um elemento que representa o departamento, ele é o computador. Não dá pra deixar os PCs com peças ultrapassadas, né? Seus computadores produzirão 2 vezes mais decoins.",
	"Um ambiente de trabalho maior ajuda a manter as coisas em ordem. Secretários produzirão 2 vezes mais decoins.",	
	"Professores especializados e com mais proficiência no assunto do que nunca! Seus professores produzirão 2 vezes mais decoins.",
	"Projetores ajudam a levar conteúdo para dentro da sala de aula. Salas de aula produzirão 2 vezes mais decoins.",
	"TCC pro ensino técnico? SIM! Os cursos técnicos produzirão 2 vezes mais decoins. ",
	"Melhorar o som no ambiente, abafá-lo por fora. Os auditórios produzirão 2 vezes mais decoins.",
	"Com laboratórios bem equipados fica tudo mais fácil. Os cursos superiores produzirão 2 vezes mais decoins.",
	"Por hoje é só, pessoal!"
];

var specialUpgradesDES = [
	"Um ambiente refrescado ajuda bastante trabalhadores. A produção de decoins aumenta em 2 vezes.",	
	"Por que escadas quando se pode ter uma maravilha destas? A produção de decoins aumenta em 2 vezes.",
	"É isso aí mesmo. 1 G-I-G-A de internet pra ninguem ter uma conexão lenta. A produção de decoins aumenta em 2 vezes.",	
	"Mesmo se a energia acabar, #NãoVaiTerPausa. A produção de decoins aumenta em 2 vezes.",
	"ALL 5",
	"Cliques valem 10X mais decoins.",
	"Cliques valem 100X mais decoins.",
	"Cliques valem 1% dos seus ganhos por segundo."
];
	
var upgradesPRC = [1000,5000,10000,50000,100000,5000000,10000000,50000000, 100000000, 9999999999];


var specialUpgradesPRC = [100000,10000000,100000000,1000000000,0,7500,50000,1000000];

var upgradesPROGRESS = [];
var upgradesVISIBLE = [];

var specialUpgradesPROGRESS = [];
var specialUpgradesVISIBLE = [];
var specialUpgradesVISIBLE = [];

var IDpontuacao;
var LISTcompras;
var LISTupgrades;

var audioP = false;
var audio = new Audio('q.m4a');

var vfx = 0;

function carregar(){
	document.getElementById("trigger").addEventListener("click", clk, false);
	
	document.getElementById("cp_0").addEventListener("mouseenter", function(e,k){ k=0; oTip(k,e); }, false);
	document.getElementById("cp_0").addEventListener("mouseleave", cTip, false);
	
	IDpontuacao=document.getElementById("pontuacao");	
	LISTcompras = document.getElementById("compras");
	LISTupgrades = document.getElementById("upgrades");
	
	comprasPROGRESS = Array(10).fill(false);
	upgradesPROGRESS = Array(10).fill(false);
	specialUpgradesPROGRESS = Array(8).fill(false);
	
	comprasVISIBLE = Array(10).fill(false);
	upgradesVISIBLE = Array(10).fill(false);
	specialUpgradesVISIBLE = Array(8).fill(false);
	
	comprasVISIBLE[0] = true;
	
	audio.autoplay = true;
	audio.volume = 0.1;	
}

function closeModal(){
	document.getElementById("blur").style.display = "none";
}

function clk(e) {
    var xP = e.clientX;
    var yP = e.clientY;
	var trg = document.getElementById("trigger");
	var span = document.createElement("SPAN");
		span.className = "clickFX";
		span.style.left = xP;
		span.style.top = yP;
		span.innerHTML = "+"+valorClick+" <img class='coin' src='coin.png'/>";

	trg.appendChild(span);	
	
	pontos=pontos+valorClick;
	totPontos+=valorClick;
	if(audio.paused){		
		audio.play();
		audioP = true;
	}
	
	setTimeout(function(){	trg.removeChild(trg.childNodes[0])	},2000);
}

var refresh = function() {
	if(win){
		var credits = document.getElementById("blur");
		credits.innerHTML = "<div id='modal'>  <h1>PARABÉNS VOCE COMPLETOU O <dc> D-CLICKER </dc> </h1> <h2> DECOINS TOTAIS: "+totPontos+"</h2> <h2>Pode falar, foi difícil chegar até aqui.</h2> <h2> Todos os que participaram da história do DECOM sabem que não foi fácil atingir as metas que lhes foram estabelecidas, mas seguiram em frente até esta comemoração de 10 ANOS do departamento! </h2> <h2>Agradecemos pela sua atenção.</h2> <div><img src='logo-decom.png' style='position: relative;width: 40%;margin-right: 10%;padding-bottom: 5%;'><img src='logo-decom-celebrations.png' style=' width: 40%;  position: relative;'></div> </div>";
		credits.style.display = "block";
	}else{	
		draw();
	}	
};	
setInterval( refresh, 1000/60 );

function draw(){
	var PpS = 0; 
	
	if(audio.paused && audioP){		
		audio.play();
	}
	
	for(i=0; i<comprasQTD.length;i++){				
		
		if(comprasVISIBLE[i]==true){			
			var add =(comprasQTD[i]*comprasVLR[i])/60;
			
			if(upgradesPROGRESS[i]){
				add = add * 2;
			}
			
			PpS+=add;
			
			document.getElementById("cqtd_"+i).innerHTML = "x "+comprasQTD[i];
			
			var prc = document.getElementById("cprc_"+i);			
			prc.innerHTML = comprasPRC[i];
			
			var idt = document.getElementById("cidt_"+i);			
			idt.innerHTML = comprasIDT[i];
			
			if(comprasPRC[i]<=pontos){
				prc.style.color = "#52db47";
			}else{
				prc.style.color = "#d75a5a";
			}			
			
		}else if(comprasVISIBLE[i]==false && comprasPROGRESS[i-1]==true){
			comprasVISIBLE[i]=true;		
			item = document.createElement("LI");
			item.setAttribute("onClick","comprar("+i+")");
			item.id = "cp_"+i;
			item.innerHTML = "<img src='"+comprasIMG[i]+"'>  <div class='nom'> 	<p id='cidt_"+i+"' class='idt'> </p>	<p id='cqtd_"+i+"' class='qtd'>x 1</p> </div> <p id='cprc_"+i+"' class='prc'></p>";		
			var w = i;
			item.addEventListener("mouseenter", function(e,k){ k=w; oTip(k,e); }, false);
			item.addEventListener("mouseleave", cTip, false);			
			LISTcompras.appendChild(item);	
		}

		if(comprasPROGRESS[i]==true && upgradesVISIBLE[i]==false){
			upgradesVISIBLE[i]=true;
			item = document.createElement("LI");
			item.setAttribute("onClick","upar("+i+")");
			item.setAttribute("id","up_"+i);
			if(i==9){
				item.style.animation = "cicloCor ease 1s infinite";				
				item.innerHTML = "<div class='icon' style='background-image: url("+comprasIMG[i]+"); height:295px; width:295px;'><img style='height: 32px; left: 245px;' src='upg.png' class='upArrow'/></div>";
			}else{
				item.innerHTML = "<div class='icon' style='background-image: url("+comprasIMG[i]+");'><img src='upg.png' class='upArrow'/></div>";
			}
			var j = i;
			item.addEventListener("mouseenter", function(e,k){ k=j; oTip(k,e); }, false);
			item.addEventListener("mouseleave", cTip, false);			
			LISTupgrades.appendChild(item);			
		}
		
		if(upgradesPROGRESS[i]==true){
			item = document.getElementById("up_"+i);
			item.setAttribute("onClick","");
			item.className = "upgraded";
		}
		
		if(specialUpgradesPROGRESS[i]==true){
			item = document.getElementById("sUp_"+i);
			item.setAttribute("onClick","");
			item.className = "upgraded";
		}
	}	
	
	
	for(i=0; i<specialUpgradesPROGRESS.length; i++){
		if(specialUpgradesPROGRESS[i] && i<4){
			PpS = PpS * 2;
		}
	}
	
	if(specialUpgradesPROGRESS[7]){
		valorClick = (Math.round(PpS * 10 ) / 1000);
	}
	
	pontos+=PpS;
	totPontos+=PpS;
	
	var tot = (Math.round((PpS*60) * 10 ) / 10);
	
	if(tot==1){
		document.getElementById("PpS").innerHTML = tot+" DECOIN POR SEGUNDO";
	}else{
		document.getElementById("PpS").innerHTML = tot+" DECOINS POR SEGUNDO";
	}
	IDpontuacao.innerHTML = Math.floor(pontos)+"</br> DECOINS ";
	
	if(tot>=500 && vfx==0){
		vfx++;
		document.getElementById("container").className+=" ciclo";
	}
	
	//COMPRAS
	
	if(comprasPROGRESS[2] && specialUpgradesVISIBLE[0]==false){
		specialUpgradesVISIBLE[0] = true;
		item = document.createElement("LI");
		item.setAttribute("onClick","uparS("+0+")");
		item.setAttribute("id","sUp_"+0);
		item.innerHTML = "<div class='icon' style='background-image: url("+specialUpgradesIMG[0]+");'><img src='upg.png' class='upArrow'/></div>";
		item.addEventListener("mouseenter", function(e,k){ k=0; oTip(k,e); }, false);
		item.addEventListener("mouseleave", cTip, false);
		LISTupgrades.appendChild(item);
	}	

	if(comprasPROGRESS[4] && specialUpgradesVISIBLE[1]==false){
		specialUpgradesVISIBLE[1] = true;
		item = document.createElement("LI");
		item.setAttribute("onClick","uparS("+1+")");
		item.setAttribute("id","sUp_"+1);
		item.innerHTML = "<div class='icon' style='background-image: url("+specialUpgradesIMG[1]+");'><img src='upg.png' class='upArrow'/></div>";
		item.addEventListener("mouseenter", function(e,k){ k=1; oTip(k,e); }, false);
		item.addEventListener("mouseleave", cTip, false);
		LISTupgrades.appendChild(item);
	}	
	
	if(comprasPROGRESS[6] && specialUpgradesVISIBLE[2]==false){
		specialUpgradesVISIBLE[2] = true;
		item = document.createElement("LI");
		item.setAttribute("onClick","uparS("+2+")");
		item.setAttribute("id","sUp_"+2);
		item.innerHTML = "<div class='icon' style='background-image: url("+specialUpgradesIMG[2]+");'><img src='upg.png' class='upArrow'/></div>";
		item.addEventListener("mouseenter", function(e,k){ k=2; oTip(k,e); }, false);
		item.addEventListener("mouseleave", cTip, false);
		LISTupgrades.appendChild(item);
	}	

	
	if(comprasPROGRESS[8] && specialUpgradesVISIBLE[3]==false){
		specialUpgradesVISIBLE[3] = true;
		item = document.createElement("LI");
		item.setAttribute("onClick","uparS("+3+")");
		item.setAttribute("id","sUp_"+3);
		item.innerHTML = "<div class='icon' style='background-image: url("+specialUpgradesIMG[3]+");'><img src='upg.png' class='upArrow'/></div>";
		item.addEventListener("mouseenter", function(e,k){ k=3; oTip(k,e); }, false);
		item.addEventListener("mouseleave", cTip, false);
		LISTupgrades.appendChild(item);
	}	
	
	//CLICKS
		
	if(comprasPROGRESS[1] && specialUpgradesVISIBLE[5]==false){
		specialUpgradesVISIBLE[5] = true;
		item = document.createElement("LI");
		item.setAttribute("onClick","uparS("+5+")");
		item.setAttribute("id","sUp_"+5);
		item.innerHTML = "<div class='icon' style='background-image: url("+specialUpgradesIMG[5]+");'><img src='upg.png' class='upArrow'/></div>";
		item.addEventListener("mouseenter", function(e,k){ k=5; oTip(k,e); }, false);
		item.addEventListener("mouseleave", cTip, false);
		LISTupgrades.appendChild(item);
	}	
	
	if(comprasPROGRESS[4] && specialUpgradesVISIBLE[6]==false){
		specialUpgradesVISIBLE[6] = true;
		item = document.createElement("LI");
		item.setAttribute("onClick","uparS("+6+")");
		item.setAttribute("id","sUp_"+6);
		item.innerHTML = "<div class='icon' style='background-image: url("+specialUpgradesIMG[6]+");'><img src='upg.png' class='upArrow'/></div>";
		item.addEventListener("mouseenter", function(e,k){ k=6; oTip(k,e); }, false);
		item.addEventListener("mouseleave", cTip, false);
		LISTupgrades.appendChild(item);
	}	
	
	if(comprasPROGRESS[6] && specialUpgradesVISIBLE[7]==false){
		specialUpgradesVISIBLE[7] = true;
		item = document.createElement("LI");
		item.setAttribute("onClick","uparS("+7+")");
		item.setAttribute("id","sUp_"+7);
		item.innerHTML = "<div class='icon' style='background-image: url("+specialUpgradesIMG[7]+");'><img src='upg.png' class='upArrow'/></div>";
		item.addEventListener("mouseenter", function(e,k){ k=7; oTip(k,e); }, false);
		item.addEventListener("mouseleave", cTip, false);
		LISTupgrades.appendChild(item);
	}	
	
		
}

function comprar(valor){
			
	if(pontos>=comprasPRC[valor]){
		pontos-=comprasPRC[valor];
		comprasQTD[valor]++;
		comprasPRC[valor]=Math.floor(comprasPRC[valor]*1.5);
		if(valor == 9 && comprasPROGRESS[9]==false){
			audio.src = "one.mp3";
			document.getElementById("score").id = "spinner";
			document.getElementById("container").style.animation = "cicloCor ease 2s infinite";
		}
		comprasPROGRESS[valor]=true;
	}	
			
}

function upar(valor){
	if(pontos>=upgradesPRC[valor] && upgradesPROGRESS[valor]==false){
		pontos-=upgradesPRC[valor];
		upgradesPROGRESS[valor]=true;
			
		if(valor == 9){
			audio.src = "gg.mp3";
			win = true;
		}
	
	}
}

function uparS(valor){
	if(pontos>=specialUpgradesPRC[valor] && specialUpgradesPROGRESS[valor]==false){
		pontos-=specialUpgradesPRC[valor];
		specialUpgradesPROGRESS[valor]=true;
		if(valor==5){
			valorClick = valorClick*10;
		}
		if(valor==6){
			valorClick = valorClick*100;
		}	
	}	
	
}

function oTip(vlr,e){
	var id = e.srcElement.id.charAt(0);	
	var tt = document.getElementById("toolTip");
	
	//	tt.innerHTML = "<span id='ttIDT'>UPGRADE: INTERNET DE 100MB</span>	<span id='ttDESC'>INTERNET BLINDONA MONSTRUOSA DA GVTROLL, AGORA SIM HEIN, OS ESTAGIARIOS TRABALHAM 2X MELHOR! WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOW!</span>	<span id='ttPRC'>10000000 <img src='coin.png'></span>";
	
	if(id=="u"){
		if(upgradesPROGRESS[vlr]){
			tt.innerHTML = "<span id='ttIDT'>UPGRADE: "+upgradesIDT[vlr]+"</span>	<span id='ttDESC'>"+upgradesDES[vlr]+"</span>	<span id='ttPRC' style='color: #52db47'>Adquirido</span>";
		}else{
			tt.innerHTML = "<span id='ttIDT'>UPGRADE: "+upgradesIDT[vlr]+"</span>	<span id='ttDESC'>"+upgradesDES[vlr]+"</span>	<span id='ttPRC'>"+upgradesPRC[vlr]+" <img src='coin.png'></span>";
		}
	}else 	
	if(id=="s"){
		if(specialUpgradesPROGRESS[vlr]){
			tt.innerHTML = "<span id='ttIDT'>UPGRADE: "+specialUpgradesIDT[vlr]+"</span>	<span id='ttDESC'>"+specialUpgradesDES[vlr]+"</span>	<span id='ttPRC' style='color: #52db47'>Adquirido</span>";
		}else{
			tt.innerHTML = "<span id='ttIDT'>UPGRADE: "+specialUpgradesIDT[vlr]+"</span>	<span id='ttDESC'>"+specialUpgradesDES[vlr]+"</span>	<span id='ttPRC' >"+specialUpgradesPRC[vlr]+"  <img src='coin.png'></span>";
		}	
	}else
	if(id=="c"){
		if(comprasVLR[vlr]==1){
			tt.innerHTML = "<span id='ttIDT'>"+comprasIDT[vlr]+"</span>	<span id='ttDESC'> PRODUZ "+comprasVLR[vlr]+" DECOIN POR SEGUNDO  </br>(sem multiplicadores)</span>	<span id='ttPRC' style='color: #2d73d2;'>POSSUI "+comprasQTD[vlr]+"</span>";
		}else{
			tt.innerHTML = "<span id='ttIDT'>"+comprasIDT[vlr]+"</span>	<span id='ttDESC'> PRODUZ "+comprasVLR[vlr]+" DECOINS POR SEGUNDO </br>(sem multiplicadores)</span>	<span id='ttPRC' style='color: #2d73d2;'>POSSUI "+comprasQTD[vlr]+"</span>";
		}
	}	
	
	tt.style.top = e.clientY+5;
	tt.style.left = e.clientX+5;
	tt.style.opacity = 1;
	tt.style.zIndex = 100;
}

function cTip(){
	var tt = document.getElementById("toolTip");
	tt.style.zIndex = -100;	
	tt.style.opacity = 0;
}




