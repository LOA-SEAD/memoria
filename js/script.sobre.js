var sobre = {};

sobre.deck = [
	'card-1-0',
	'card-1-1',
	'card-3-0',
	'card-3-1',
	'card-5-0',
	'card-5-1',
	'card-7-0',
	'card-7-1',
	'card-3-2',
	'card-1-3',
	'card-3-4',
	'card-3-3',
	'card-5-4',
	'card-7-3',
	'card-7-4',
	'card-1-6'
];

//SOLUCAO PARA ORDEM QUE NAO SEJA 1-0, 1-1, 1-2... DO DECK
sobre.linha = [0,0,2,2,4,4,6,6,2,0,2,2,4,6,6,0]; // SUBTRAI 1 DO NUMERO ORIGINAL
sobre.coluna = [0,1,0,1,0,1,0,1,2,3,4,3,4,3,4,6]; // MANTEM O NUMERO ORIGINAL

sobre.card = new Array();

function InitializeSobre()
{
	var el = document.getElementById("sobrePlate");
	
	var cartas = document.getElementById("cards");
	
	for(var i = 0; i <  sobre.deck.length; i++)
	{			
		sobre.card[i] = document.createElement("div");
		sobre.card[i].setAttribute("class", "card cardBotao");
		cartas.appendChild(sobre.card[i]);
		sobre.card[i].setAttribute("id", parseInt(i));
		sobre.card[i].setAttribute('onclick', 'escreveSobre(id)'); 
		/*126 EH O TAMANHO VERTICAL QUE A CARTA ASSUME QUANDO RECEBE O ZOOM, 168 EH O TAMANHO HORIZONTAL QUE A CARTA 
		ASSUME QUANDO RECEBE O ZOOM, 13 EH UMA CONSTANTE PARA LEVAR AS CARTAS MAIS A DIREITA, QUANTO MAIOR MAIS PRA 
		DIREITA ELE FICA. */
		sobre.card[i].setAttribute("style", "top:" + (parseInt(i/4)*126) + "px; left:" + ((i%4)*168 + 268) + "px;");
		
		//OBTEM QUAL CARTA SERAH COLOCADA NO SOBRE
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
	
	var nome = "card-" + n1	+ "-" + n2;
	
	//CARTA INFERIOR
	var carta = document.createElement("div");
	carta.setAttribute("class", "card");
	carta.setAttribute("style", "top: 291px; left: -12px;");
	el.appendChild(carta);
	
	var carta_conteudo = document.createElement("div");
	carta_conteudo.setAttribute("class", "face front card-sobre-text " + nome);
	carta.appendChild(carta_conteudo);
	
	var nome2 = "card-" + (n1+1)	+ "-" + n2;
	
	//CARTA SUPERIOR
	var carta2 = document.createElement("div");
	carta2.setAttribute("class", "card");
	carta2.setAttribute("style", "top: 27px; left: 542px;");
	el.appendChild(carta2);
	
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