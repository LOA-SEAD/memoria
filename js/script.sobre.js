var sobre = {};

//Leitura do json onde se encontra os parametros da customizacao
$.ajax({
	url: "json/descricao.json",
	dataType: "text",
	mimeType: "application/json",
	async: false,
	success: function (data) {
		direcao = $.parseJSON(data).direcao;  // true = horizontal, false = vertical
		totalParesFacilUpload = $.parseJSON(data).totalParesFacilUpload;  // total de pares que o usuario deu upload no remar para o nivel facil
		totalParesMedioUpload = $.parseJSON(data).totalParesMedioUpload;  // total de pares que o usuario deu upload no remar para o nivel medio
		totalParesDificilUpload = $.parseJSON(data).totalParesDificilUpload;  // total de pares que o usuario deu upload no remar para o nivel dificil
	},
	error: function(request, status, error){
	}
});

//Cria o vetor das cartas que serao exibidas no sobre vazio
sobre.deck = [];
//Cria os vetores que importarao as cartas para apresenta-las quando o jogador clicar sobre elas na ajuda
sobre.linha = [];
sobre.coluna = [];
//Adiciona todas as cartas conforme os parametros do json, concatenando strings para formar o nome da carta
for (var i = 0; i < totalParesFacilUpload; i++){
	sobre.deck.push("card-" + direcao.charAt(0) + "-1-" + i )
	sobre.linha.push(0)
	sobre.coluna.push(i)
}

for (var i = 0; i < totalParesMedioUpload; i++){
	sobre.deck.push("card-" + direcao.charAt(0) + "-3-" + i )
	sobre.linha.push(2)
	sobre.coluna.push(i)
}

for (var i = 0; i < totalParesDificilUpload; i++){
	sobre.deck.push("card-" + direcao.charAt(0) + "-5-" + i )
	sobre.linha.push(4)
	sobre.coluna.push(i)
}

sobre.card = new Array();

//Calcula como serao divididas as cartas no menu de ajuda
var numeroCartas = totalParesFacilUpload + totalParesMedioUpload + totalParesDificilUpload

function InitializeSobre()
{
	var el = document.getElementById("sobrePlate");
	
	var cartas = document.getElementById("cards");
	
	for(var i = 0; i <  sobre.deck.length; i++)
	{			
		sobre.card[i] = document.createElement("div");
		sobre.card[i].setAttribute("class", "card-" + direcao.charAt(0));
		cartas.appendChild(sobre.card[i]);
		sobre.card[i].setAttribute("id", parseInt(i));
		sobre.card[i].setAttribute('onclick', 'escreveSobre(id)'); 
		/*126 EH O TAMANHO VERTICAL QUE A CARTA ASSUME QUANDO RECEBE O ZOOM, 168 EH O TAMANHO HORIZONTAL QUE A CARTA 
		ASSUME QUANDO RECEBE O ZOOM*/
		/*Utiliza-se o Math.ceil para arredondar o valor da divisao do numero de cartas por 4 para cima, pois assim
		eh possivel colocar todas as cartas em 4 fileiras e, se necessario, a ultima fica com menos*/
		if(direcao == "horizontal"){
			sobre.card[i].setAttribute("style", "top:" + (parseInt(i/Math.ceil(numeroCartas/4))*125) + "px; left:" + ((i%Math.ceil(numeroCartas/4))*168 + (520 - ((Math.ceil(numeroCartas/4) - 1) * 84))) + "px;");
		} else {
			sobre.card[i].setAttribute("style", "top:" + (parseInt(i/Math.ceil(numeroCartas/4))*125) + "px; left:" + ((i%Math.ceil(numeroCartas/4))*85 + (560 - ((Math.ceil(numeroCartas/4) - 1) * 42.5))) + "px;");
		}
		
		//OBTEM QUAL CARTA SERA COLOCADA NO SOBRE
		var nome = sobre.deck[i];
		var FaceFront = document.createElement("div");
		FaceFront.setAttribute("class", "face front card-sobre " + nome);
		sobre.card[i].appendChild(FaceFront);		
	}
}

function escreveSobre(carta) 
{
	destroySobre();
	
	var el = document.createElement("div");
	el.setAttribute("id", "sobreTextoPlate");
	game.appendChild(el);
	
	var divText = document.createElement("div");
	divText.setAttribute("class", "divTextoSobre");
	el.appendChild(divText);
	
	var para = document.createElement("p");
	divText.appendChild(para);
	
	var Texto = "";
	//Ate 2 por possuir apenas duas informacoes no texto do sobre
	for (var i = 0; i < 2; i++)
	{
		Texto += sobre.padrao[i] + sobre.infoCartas[carta][i];		
	}
	
	para.innerHTML = Texto;
	
	//ORIGINAL PARA QUANDO A ORDEM DO CODIGO EH 1-0, 1-1, 1-2... 
	/*var n1 = (parseInt(carta/4)*2);
	var n2 = carta%4;*/

	//SOLUCAO ALTERNATIVA:
	var n1 = sobre.linha[carta];
	var n2 = sobre.coluna[carta];
	
	//CARTA INFERIOR
	var carta = document.createElement("div");
	carta.setAttribute("class", "card-" + direcao.charAt(0));

	//CARTA SUPERIOR
	var carta2 = document.createElement("div");
	carta2.setAttribute("class", "card-" + direcao.charAt(0));

	//Coloca as cartas nas posicoes corretas
	if(direcao == "horizontal"){
		carta.setAttribute("style", "top: 295px; left: -15px;");
		carta2.setAttribute("style", "top: 30px; left: 540px;");
	} else {
		carta.setAttribute("style", "top: 295px; left: 40px;");
		carta2.setAttribute("style", "top: 30px; left: 590px;");
	}
	el.appendChild(carta);
	el.appendChild(carta2);
	
	var nome = "card-" + direcao.charAt(0) + "-" + n1	+ "-" + n2;
	var carta_conteudo = document.createElement("div");
	carta_conteudo.setAttribute("class", "face front card-sobre-text " + nome);
	carta.appendChild(carta_conteudo);
	
	var nome2 = "card-" + direcao.charAt(0) + "-" + (n1+1)	+ "-" + n2;
	var carta_conteudo2 = document.createElement("div");
	carta_conteudo2.setAttribute("class", "face front card-sobre-text " + nome2);
	carta2.appendChild(carta_conteudo2);
		
	el.onmousedown=function() 
	{
		var el1 = document.getElementById("sobreTextoPlate");
		game.removeChild(el1);
		buildSobre();
	}
	
}