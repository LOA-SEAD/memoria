/*
O html do jogo � simplesmente um body com uma div chamada "game"
Quando a pagina carrega, ela carrega as tags <script> que cont�m os arquivos de javascript que geram o jogo
Quando os scripts s�o carregados � criado uma div "menu" e seu conteudo
Atrav�s das intera��es com os bot�es o html � gerado e destruido dinamicamente pelo javscript

O css est� sendo usado de maneira mista tanto inline (dentro do html) como por arquivos externos (css)
*/

var descreveSobreGeral = {};
var direcao = {};

$.ajax({
    url: "json/descricao.json",
    dataType: "text",
    mimeType: "application/json",
    async: false,
    success: function (data) {
        descreveSobreGeral = $.parseJSON(data).descreveSobreGeral;
        direcao = $.parseJSON(data).direcao;  // horizontal ou vertical
    },
    error: function(request, status, error){
        console.log(error);
    }
});

var game = document.getElementById("game");
//Variavel que controla o volume das musicas no jogo
volume = 50;

//Variavel que define se o jogo est� com ou sem m�sica
mudo = false;

function buildMenu()
{
    var el = document.createElement("div");
    el.setAttribute("id", "menu");
    game.appendChild(el);

    var titulo = document.createElement("div");
    titulo.setAttribute("id", "titulo");
    titulo.setAttribute("class", "titulo");
    el.appendChild(titulo);

    var sobreGeral = document.createElement("div");
    sobreGeral.setAttribute("id", "sobreGeral");
    sobreGeral.innerHTML = "<h3>A filosofia deste jogo consiste em testar sua memória associando, por meio de seus conhecimentos, duas cartas que se complementam.<br><br>Aprenda mais neste desafio de memória!</h3>";
    el.appendChild(sobreGeral);

    var botao = document.createElement("button");
    botao.setAttribute("id" , "btNovoJogo4");
    botao.setAttribute("class" , "botao");
    botao.setAttribute("type" , "button");
    botao.setAttribute("style", "background: url(imgs/facil.png); width:100px; height:100px; border:0;");
    el.appendChild(botao);

    var botao = document.createElement("button");
    botao.setAttribute("id" , "btNovoJogo6");
    botao.setAttribute("class" , "botao");
    botao.setAttribute("type" , "button");
    botao.setAttribute("style", "background: url(imgs/medio.png); width:100px; height:100px; border:0;");
    el.appendChild(botao);

    var botao = document.createElement("button");
    botao.setAttribute("id" , "btNovoJogo8");
    botao.setAttribute("class" , "botao");
    botao.setAttribute("type" , "button");
    botao.setAttribute("style", "background: url(imgs/dificil.png); width:100px; height:100px; border:0;");
    el.appendChild(botao);


    var botao = document.createElement("button");
    botao.setAttribute("id" , "btSobre");
    botao.setAttribute("class" , "botao2");
    botao.setAttribute("type" , "button");
    botao.setAttribute("style", "background: url(imgs/sobre.png); width:100px; height:100px; border:0;");
    el.appendChild(botao);


    var botao = document.createElement("button");
    botao.setAttribute("id" , "bt3");
    botao.setAttribute("class" , "botao2");
    botao.setAttribute("type" , "button");
    botao.setAttribute("style", "background: url(imgs/creditos.png); width:100; height:100px; border:0;");
    el.appendChild(botao);

    var botao = document.createElement("button");
    botao.setAttribute("id" , "botaoSom");
    botao.setAttribute("class" , "botao2");
    botao.setAttribute("type" , "button");
    if(!mudo) {
        botao.setAttribute("style", "background: url(imgs/botaoSom.png); width:100; height:100px; border:0;");
    }
    else {
        botao.setAttribute("style", "background: url(imgs/botaoSemSom.png); width:100; height:100px; border:0;");
    }
    el.appendChild(botao);

    var btJ4 = document.getElementById("btNovoJogo4");
    btJ4.onmousedown=function()
    {
        destroyMenu();
        buildGame(4);
    }

    var btJ6 = document.getElementById("btNovoJogo6");
    btJ6.onmousedown=function()
    {
        destroyMenu();
        buildGame(6);
    }

    var btJ8 = document.getElementById("btNovoJogo8");
    btJ8.onmousedown=function()
    {
        destroyMenu();
        buildGame(8);
    }

    var btSobre = document.getElementById("btSobre");
    btSobre.onmousedown=function()
    {
        destroyMenu();
        buildSobre();
    }
    var bt3 = document.getElementById("bt3");
    bt3.onmousedown=function()
    {
        destroyMenu();
        buildCreditos();
    }
    var botaoSom = document.getElementById("botaoSom");
    botaoSom.onmousedown=function()
    {
        configurarSomBotaoSom();
    }
}

function destroyMenu()
{

    var el = document.getElementById("menu");
    game.removeChild(el);
}

function buildGame(numeroDeCartas)
{
    var el = document.createElement("div");
    el.setAttribute("id", "gamePlate");
    game.appendChild(el);

    var cards = document.createElement("div");
    cards.setAttribute("id", "cards");
    el.appendChild(cards);

    var card = document.createElement("div");
    if(direcao == "horizontal"){
        card.setAttribute("class", "card-h");
    }else{
        card.setAttribute("class", "card-v");
    }
    cards.appendChild(card);

    // PARA VIRAR AS CARTAS
    var faceFront = document.createElement("div");
    faceFront.setAttribute("class", "face front");
    card.appendChild(faceFront);

    var faceBack = document.createElement("div");
    faceBack.setAttribute("class", "face back");
    card.appendChild(faceBack);

    var divVoltar = document.createElement("div");
    divVoltar.setAttribute("id", "divVoltar");
    el.appendChild(divVoltar);

    var botao = document.createElement("button");
    botao.setAttribute("id" , "btVoltar");
    botao.setAttribute("type" , "button");
    botao.setAttribute("class" , "botao");
    botao.setAttribute("style", "background: url(imgs/voltar.png); width:60px; height:60px; border:0; left:0%");
    divVoltar.appendChild(botao);

    botao.onmousedown=function()
    {
        destroyGame();
        buildMenu();
    }

    Initialize(numeroDeCartas);
}

function destroyGame()
{
    var el = document.getElementById("gamePlate");
    game.removeChild(el);
}

function buildSobre()
{
    var el = document.createElement("div");
    el.setAttribute("id", "sobrePlate");
    game.appendChild(el);

    var cards = document.createElement("div");
    cards.setAttribute("id", "cards");
    el.appendChild(cards);

    var divVoltar = document.createElement("div");
    divVoltar.setAttribute("id", "divVoltar");
    el.appendChild(divVoltar);

    var botao = document.createElement("button");
    botao.setAttribute("id" , "voltar");
    botao.setAttribute("type" , "button");
    botao.setAttribute("class" , "botao");
    botao.setAttribute("style", "background: url(imgs/voltar.png); width:60px; height:60px; border:0; left:0%");
    divVoltar.appendChild(botao);


    botao.onmousedown=function()
    {
        destroySobre();
        buildMenu();
    }

    InitializeSobre();
}

function destroySobre()
{
    var el = document.getElementById("sobrePlate");
    game.removeChild(el);
}

function buildCreditos()
{
    var el = document.createElement("div");
    el.setAttribute("id", "creditosPlate");
    game.appendChild(el);

    var logo = document.createElement("div");
    logo.setAttribute("style", "position: relative;background: url(imgs/logos.png); width:410px; height:71px; left: 50%; margin-left: -205px;top: 35px;");
    el.appendChild(logo);

    var para = document.createElement("br");
    el.appendChild(para);
    var para = document.createElement("br");
    el.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Equipe da versão original (Memória):";
    el.appendChild(para);

    var colLeft = document.createElement("div");
    colLeft.setAttribute("style", "width: 250px; float: left;  text-align: center;");
    el.appendChild(colLeft);

    var para = document.createElement("p");
    para.innerHTML = "Marcelo";
    colLeft.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Murilo";
    colLeft.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Valério";
    colLeft.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Henrique";
    colLeft.appendChild(para);

    var colRight = document.createElement("div");
    colRight.setAttribute("style", "width: 250px; float: right; text-align: center;");
    el.appendChild(colRight);

    var para = document.createElement("p");
    para.innerHTML = "Katia";
    colRight.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Rafaela";
    colRight.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Diana";
    colRight.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Catarine";
    colRight.appendChild(para);

    var para = document.createElement("br");
    el.appendChild(para);

/*
    var para = document.createElement("p");
    para.innerHTML = "Promem�ria criado por: Douglas";
    el.appendChild(para);

    var para = document.createElement("p");
    para.innerHTML = "Orientadores:<br>Marilde Terezinha Prado Santos<br>Joice Lee Otsuka<br>Delano Medeiros Beder";
    el.appendChild(para);

    var para = document.createElement("br");
    el.appendChild(para);
    var para = document.createElement("br");
    el.appendChild(para);
*/
    var divVoltar = document.createElement("div");
    divVoltar.setAttribute("id", "divVoltar");
    el.appendChild(divVoltar);

    var botao = document.createElement("button");
    botao.setAttribute("id" , "btVoltar");
    botao.setAttribute("type" , "button");
    botao.setAttribute("class" , "botao");
    botao.setAttribute("style", "background: url(imgs/voltar.png); width:60px; height:60px; border:0; left:0%");
    divVoltar.appendChild(botao);

    botao.onmousedown=function()
    {
        destroyCreditos();
        buildMenu();
    }
}

function destroyCreditos()
{
    var el = document.getElementById("creditosPlate");
    game.removeChild(el);
}

function buildWin()
{
    var el = document.createElement("div");
    el.setAttribute("id", "winPlate");
    el.setAttribute("style", "background: url(imgs/parabens.png);");
    game.appendChild(el);


    el.onmousedown=function()
    {
        destroyWin();
        buildMenu();
    }
}

function destroyWin()
{
    var el = document.getElementById("winPlate");
    game.removeChild(el);
}

//Funcoes do controle de som
function configurarSomBotaoSom() {
    $('#botaoSom')
    .click(function(){
        mudo = !mudo;
        if(mudo) {
            $(this).css('background', 'url("../promemoria-master/imgs/botaoSemSom.png")');
            musica.pausarSom();
        }
        else {
            $(this).css('background', 'url("../promemoria-master/imgs/botaoSom.png")');
            musica.iniciarSom();
        }

    });
}

function configurarSomSlider() {
    $('#slider').slider({
        max: 100,
        min: 0,
        value: 100,

        create: function(event, ui) {
            musica.iniciarSom();
        },
        change: function(event, ui) {
            musica.ajustarVolumePara(ui.value/100);
        },

    });
}

//inicializacao da musica que fica durante o jogo
musica.iniciarSom();

buildMenu();
