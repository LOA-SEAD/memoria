//Variavel global que guarda todas as outras
var memoria = {};

//Variavel que guarda quantos pares de cartas diferentes terá o jogo
memoria.numeroDePares = 1;

//Varivel que guarda quantas cartas o jogo vai ter
memoria.numeroDeCartas = memoria.numeroDePares*2;

//Um deck auxiliar para guarda todas as cartas que podem ter o jogo
memoria.deckAuxFacil = [
	'card-0-0', 'card-1-0',
	'card-0-1', 'card-1-1',
	'card-2-0', 'card-3-0',
	'card-2-1', 'card-3-1',
	'card-4-0', 'card-5-0',
	'card-4-1', 'card-5-1',
	'card-6-0', 'card-7-0',
	'card-6-1', 'card-7-1'
];

//Um deck auxiliar para guarda todas as cartas que podem ter o jogo
memoria.deckAuxMedio = [
	'card-0-2', 'card-1-2',
	'card-0-3', 'card-1-3',
	'card-0-4', 'card-1-4',
	'card-2-2', 'card-3-2',
	'card-2-3', 'card-3-3',
	'card-2-4', 'card-3-4',
	'card-4-2', 'card-5-2',
	'card-4-3', 'card-5-3',
	'card-4-4', 'card-5-4',
	'card-6-2', 'card-7-2',
	'card-6-3', 'card-7-3',
	'card-6-4', 'card-7-4'
];


//Um deck auxiliar para guarda todas as cartas que podem ter o jogo
memoria.deckAuxDificil = [
	'card-0-3', 'card-1-3',
	'card-0-4', 'card-1-4',
	'card-0-5', 'card-1-5',
	'card-0-6', 'card-1-6',
	'card-2-3', 'card-3-3',
	'card-2-4', 'card-3-4',
	'card-2-5', 'card-3-5',
	'card-2-6', 'card-3-6',
	'card-4-3', 'card-5-3',
	'card-4-4', 'card-5-4',
	'card-4-5', 'card-5-5',
	'card-4-6', 'card-5-6',
	'card-6-3', 'card-7-3',
	'card-6-4', 'card-7-4',
	'card-6-5', 'card-7-5',
	'card-6-6', 'card-7-6'
];


function Initialize(numeroDeCartasPar)
{
	//O deck que guarda as cartas que vao ser exibidas
	memoria.deck = new Array();

	//Um vetor que guarda se a carta do deck auxiliar ja foi inserida no deck
	memoria.estaNoDeck = new Array();
	
	//Variavel que determina se o jogo terminou
	memoria.fimDeJogo = false;
	
	//Variavel que guarda quantos pares de cartas diferentes terá o jogo
	memoria.numeroDePares = numeroDeCartasPar;

	//Varivel que guarda quantas cartas o jogo vai ter
	memoria.numeroDeCartas = memoria.numeroDePares*2;
	
	//Arruma para que nenhuma carta esteja no vetor ainda
	for(var contador = 0; contador < memoria.numeroDePares*2; contador++)
	{
		memoria.estaNoDeck[contador] = false;		
	}

	
	//Ciclo para colocar em deck
	for (var contador = 0; contador < memoria.numeroDeCartas; contador++)
	{	
		var auxiliar = parseInt(parseInt(Math.random()*48)%memoria.numeroDeCartas);
		
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
		$(".card:first-child").clone().appendTo("#cards");
	}
	
	//O 165 eh o tamanho horizontal da carta mais o espaco entre cada uma
	var centralize = 550 - 165*(memoria.numeroDePares)/4;
	
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
		
		//Aplica o padrão
		$(this).find(".back").addClass(pattern);
		
		//Junto o padrão
		$(this).attr("data-pattern",pattern);
						
		//Quando carta é clicada, chama a funcao
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

//Chamada quando alguma carta é clicada
function selectCard() 
{
	//Não faz nada se já existem duas cartas viradas
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
		setTimeout(checkPattern, 5000);
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
        
    var s1 = Math.floor(parseInt(pattern.split("-")[1])/2);
    var n1 = parseInt(pattern.split("-")[2]);
	var anotherPattern = $(cards[1]).data("pattern");

	var s2 = Math.floor(parseInt(anotherPattern.split("-")[1])/2);
	var n2 = parseInt(anotherPattern.split("-")[2]);
        return (s1 == s2 && n1 == n2);
}
