//Variavel global que guarda todas as outras
var memoria = {};

$.ajax({
	url: "json/descricao.json",
	dataType: "text",
	mimeType: "application/json",
	async: false,
	success: function (data) {
		direcao = $.parseJSON(data).direcao;  // true = horizontal, false = vertical
		tempoCarta = $.parseJSON(data).tempoCarta;  // tempo para revirar as cartas após virar duas
		totalParesFacilUpload = $.parseJSON(data).totalParesFacilUpload;  // total de pares que o usuario deu upload no remar para o nivel facil
		totalParesMedioUpload = $.parseJSON(data).totalParesMedioUpload;  // total de pares que o usuario deu upload no remar para o nivel medio
		totalParesDificilUpload = $.parseJSON(data).totalParesDificilUpload;  // total de pares que o usuario deu upload no remar para o nivel dificil
	},
	error: function(request, status, error){
	}
});

//var direcao = false; // true = horizontal, false = vertical

//Variavel que guarda quantos pares de cartas diferentes terá o jogo
//Apenas inicializando. Depois ela será mudada
memoria.numeroDePares = 1;

//Varivel que guarda quantas cartas o jogo vai ter
//Apenas inicializando. Depois ela será mudada
memoria.numeroDeCartas = memoria.numeroDePares*2;

memoria.deckAuxFacil = []
for (i=0; i < totalParesFacilUpload; i++){
	memoria.deckAuxFacil.push("card-" + direcao.charAt(0) + "-" + "0" + "-" + i );
	memoria.deckAuxFacil.push("card-" + direcao.charAt(0) + "-" + "1" + "-" + i );
}

memoria.deckAuxMedio = []
for (i=0; i < totalParesMedioUpload; i++){
	memoria.deckAuxMedio.push("card-" + direcao.charAt(0) + "-" + "2" + "-" + i );
	memoria.deckAuxMedio.push("card-" + direcao.charAt(0) + "-" + "3" + "-" + i );
}

memoria.deckAuxDificil = []
for (i=0; i < totalParesDificilUpload; i++){
	memoria.deckAuxDificil.push("card-" + direcao.charAt(0) + "-" + "4" + "-" + i );
	memoria.deckAuxDificil.push("card-" + direcao.charAt(0) + "-" + "5" + "-" + i );
}

function Initialize(numeroDeCartasPar)
{
	//O deck que guarda as cartas que vao ser exibidas
	memoria.deck = new Array();

	//Um vetor que guarda se a carta do deck auxiliar ja foi inserida no deck
	memoria.estaNoDeck = new Array();

	//Variavel que determina se o jogo terminou
	memoria.fimDeJogo = false;

	//Variavel que guarda quantos pares de cartas diferentes ter� o jogo
	memoria.numeroDePares = numeroDeCartasPar;

	//Varivel que guarda quantas cartas o jogo vai ter
	memoria.numeroDeCartas = memoria.numeroDePares*2;

	//Arruma para que nenhuma carta esteja no vetor ainda
	for(var contador = 0; contador < memoria.numeroDePares*2; contador++)
	{
		memoria.estaNoDeck[contador] = false;
	}

	switch(memoria.numeroDePares){
		case 4:
		var possibilidades = memoria.deckAuxFacil.length/2;
		break;
		
		case 6:
		var possibilidades = memoria.deckAuxMedio.length/2;
		break;

		default:
		var possibilidades = memoria.deckAuxDificil.length/2;
		break;
	}
	//Ciclo para colocar em deck
	for (var contador = 0; contador < memoria.numeroDeCartas; contador++)
	{
		
		var auxiliar = parseInt(parseInt(Math.random()*48)%possibilidades);

		if(!memoria.estaNoDeck[auxiliar])
		{

			//Adiciona no deck conforme o nivel
			switch(memoria.numeroDePares){
				case 4: // nivel facil
					memoria.deck[contador] = memoria.deckAuxFacil[2*auxiliar];
					contador++;
					memoria.deck[contador] = memoria.deckAuxFacil[2*auxiliar + 1];
					break;
				case 6: // nivel medio
					memoria.deck[contador] = memoria.deckAuxMedio[2*auxiliar];
					contador++;
					memoria.deck[contador] = memoria.deckAuxMedio[2*auxiliar + 1];
					break;
				default: // nivel dificil
					memoria.deck[contador] = memoria.deckAuxDificil[2*auxiliar];
					contador++;
					memoria.deck[contador] = memoria.deckAuxDificil[2*auxiliar + 1];
			}
			memoria.estaNoDeck[auxiliar] = true;
		}
		else
		{
			contador--;
		}
	}

	//Embaralha
	for(var i=0; i<200;i++)
	{
		memoria.deck.sort(shuffle);
	}

	for(var i=0; i < memoria.numeroDeCartas - 1; i++)
	{
		if(direcao == "horizontal"){
			$(".card-h:first-child").clone().appendTo("#cards");
		}else{
			$(".card-v:first-child").clone().appendTo("#cards");
		}
	}

	var centralize;

	if(direcao == "horizontal"){
		centralize = 550 - 165*(memoria.numeroDePares)/4; // 165 eh o tamanho horizontal da carta mais o espaco entre cada uma
	}else{
		centralize = 550 - 85*(memoria.numeroDePares)/4; // 85 eh o tamanho horizontal da carta mais o espaco entre cada uma
	}

	//Inicializa cada carta
	$("#cards").children().each(function(index)
	{
		//Alinha as cartas
		$(this).css({
			"top" : ($(this).height()  + 5) * (index % 4),
			"left"  : ($(this).width() + 5) * Math.floor(index / 4) + centralize
		});


		//Pega um padrao do deck
		var pattern = memoria.deck.pop();

		//Aplica o padr�o
		$(this).find(".back").addClass(pattern);

		//Junto o padr�o
		$(this).attr("data-pattern",pattern);

		//Quando carta � clicada, chama a funcao
		$(this).click(selectCard);


	});

	//Atualiza o jogo
	Update();
}

//Funcao que fica verificando se o jogo terminou
function Update()
{
	//Verifica se existe alguma carta em jogo
	if($("#cards").children(':first-child').data("pattern") == null)
	{
		//Termina o jogo
		memoria.fimDeJogo = true;
	}

	//Se o jogo tiver terminado
	if(memoria.fimDeJogo)
	{
		//Mensagem de alerta
		destroyGame();
		buildWin();
	}
	else
	{
		//Caso contrario, espera 1 segundo e verifica novamente
		setTimeout(Update, 1000);
	}
}

//Chamada quando alguma carta � clicada
function selectCard()
{
	//N�o faz nada se j� existem duas cartas viradas
	if ($(".card-flipped").size() > 1)
	{
		return;
	}

	som.tocar();

	//Adiciona a classe .card-flipped
	//O browser automaticamente anima as cartas
	$(this).addClass("card-flipped");

	//Verifica se as cartas sao pares depois de 5 segundos
	if ($(".card-flipped").size() == 2)
	{
		setTimeout(checkPattern, tempoCarta);
	}
}

//Funcao que embaralha as cartas
function shuffle()
{
	return 0.5 - Math.random();
}

//Uma funcao que controla o que acontece se duas cartas sao par
function checkPattern()
{
	if (isMatchPattern())
	{
		$(".card-flipped").removeClass("card-flipped").addClass("card-removed");

		//Remove as cartas
		$(".card-removed").bind("webkitTransitionEnd", removeTookCards);
		$(".card-removed").bind("transitionend", removeTookCards);
	}
	else
	{
		$(".card-flipped").removeClass("card-flipped");
	}
}

//Funcao que remove as cartas removidas
function removeTookCards()
{
	$(".card-removed").remove();
}

//Funcao que verifica se duas cartas sao um par
function isMatchPattern()
{
	var cards = $(".card-flipped");
	var pattern = $(cards[0]).data("pattern");

	var s1 = Math.floor(parseInt(pattern.split("-")[2])/2);
	var n1 = parseInt(pattern.split("-")[3]);
	var anotherPattern = $(cards[1]).data("pattern");

	var s2 = Math.floor(parseInt(anotherPattern.split("-")[2])/2);
	var n2 = parseInt(anotherPattern.split("-")[3]);
	return (s1 == s2 && n1 == n2);
}
