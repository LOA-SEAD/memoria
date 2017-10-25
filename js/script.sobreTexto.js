/*
	Esse javascript foi usado para armazenar todas as informações de cada um dos elementos que é exibido na seção "?" do jogo

*/
$.ajax({
    url: "json/descricao.json",
    dataType: "text",
    mimeType: "application/json",
    async: false,
    success: function (data) {
        nomeCartas = $.parseJSON(data).nomeCarta;
        descCartas = $.parseJSON(data).descricaoCarta;
    },
    error: function(request, status, error){
        console.log(error);
    }
});

sobre.padrao = new Array();

sobre.padrao[0] = "<br><br><br><b>Conteúdo:</b> ";
sobre.padrao[1] = "<br><b>Descrição:</b> ";

sobre.infoCartas = new Array();

for (i = 0; i < nomeCartas.length; i++){
	sobre.infoCartas[i] = [
	nomeCartas[i],
	descCartas[i]
	];
}
