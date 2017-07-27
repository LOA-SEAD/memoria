/*
	Esse javascript foi usado para armazenar todas as informa��es de cada um dos elementos que � exibido na se��o "?" do jogo

*/
sobre.padrao = new Array();

sobre.padrao[0] = "<br><br><br><b>Conte�do:</b> ";
sobre.padrao[1] = "<br><b>Descri��o:</b> ";

sobre.infoCartas = new Array();

sobre.infoCartas[0] = [
"Operador l�gico Efff",
"O operador l�gico E apresenta como sa�da o valor verdadeiro apenas se todas os operandos forem verdadeiros (como pode ser verificado na tabela verdade localizada no canto inferior esquerdo), caso contrario ter� como sa�da o valor falso, como por exemplo na frase \"Eu tenho que comprar laranja e uva\", o que significa que voc� precisa comprar essas duas frutas."
];
sobre.infoCartas[1] = [
"Operador l�gico OU",
"O operador l�gico OU apresenta como sa�da o valor verdadeiro se pelo menos um dos operandos for verdadeiro (como pode ser verificado na tabela verdade localizada no canto inferior esquerdo), caso contrario ter� como sa�da o valor falso, como por exemplo na frase \"Eu tenho que comprar laranja ou uva\", o que significa que voc� precisa comprar apenas uma dessas frutas ou as duas."
];
sobre.infoCartas[2] = [
"Operador l�gico N�O",
"O operador l�gico N�O apresenta como sa�da o inverso do valor que est� no operando, ou seja, a sa�da � verdadeira se o valor do operando � falso e a sa�da � falsa se o valor do operando � verdadeiro."
];
sobre.infoCartas[3] = [ // TAUTOLOGIA
"Express�o tautol�gica",
"Uma express�o tautol�gica � uma express�o onde independente dos valores dos operandos, a sua sa�da ser� sempre verdadeiro."
];
sobre.infoCartas[4] = [ //CONTRADICAO
"Express�o contradit�ria",
"Uma express�o contradit�ria � uma express�o onde independente dos valores dos operandos, a sua sa�da ser� sempre falso."
];
sobre.infoCartas[5] = [ // DUPLA NEGACAO
"Lei da dupla nega��o",
"Este teorema apresenta que negando um operando um n�mero par de vezes o valor dele n�o se altera, como por exemplo na frase \"N�o � verdade que a blusa n�o � vermelha\" em que seria a mesma coisa que dizer \"A blusa � vermelha\"."
];
sobre.infoCartas[6] = [ //DE MORGAN
"Teorema de De Morgan",
"Este teorema de De Morgan serve para mostrar a maneira de se converter uma express�o que utiliza a opera��o E em uma express�o equivalente que utiliza o operador OU."
];
sobre.infoCartas[7] = [ //DE MORGAN
"Teorema de De Morgan",
"Este teorema de De Morgan serve para mostrar a maneira de se converter uma express�o que utiliza a opera��o OU em uma express�o equivalente que utiliza o operador E."
];
sobre.infoCartas[8] = [ // PRECEDENCIA DE OPERADORES
"Preced�ncia de operadores",
"A preced�ncia de operadores determina a ordem em que se calcula as express�es. A ordem � a seguinte:<br>{}<br>[]<br>()<br>Operador N�O<br>operador de exponencia��o<br>* , / e m�dulo(resto da divis�o)<br>+ e -<br>Operador E<br>Operador OU"
];
sobre.infoCartas[9] = [ //SE-ENTAO
"Comando condicional SE - ENT�O - FIM SE",
"O comando SE verifica se a express�o que est� dentro dos par�nteses � verdadeira, e se isto ocorrer � executado o bloco de c�digos que se encontra entre o ENT�O e o FIM SE, caso contrario este bloco � ignorado e continua a execu��o a partir do FIM SE."
];
sobre.infoCartas[10] = [ //SE-ENTAO-SENAO
"Comando condicional SE - ENT�O - SEN�O - FIM SE",
"A adi��o do SEN�O ao comando SE faz com que caso a express�o que est� dentro dos par�nteses seja falsa � executado o bloco de c�digos que se encontra entre o SEN�O e o FIM SE, enquanto se caso ela for verdadeira ser� executado o bloco de c�digos entre o ENT�O e o SEN�O."
];
sobre.infoCartas[11] = [ //ESCOLHA
"Comando condicional ESCOLHA - CASO - SEN�O - FIM ESCOLHA",
"O comando ESCOLHA funciona de maneira semelhante que o comando SE. Para uma determinada vari�vel que fica dentro dos par�nteses ap�s o ESCOLHA � verificada se a express�o que fica ap�s o CASO utilizando aquela vari�vel � verdadeira e se for � executado o bloco de c�digos que se encontra entre os dois pontos e o pr�ximo CASO ou um SEN�O. Se nenhuma das express�es forem verdadeiras, � executado o bloco de c�digos entre o SEN�O e o FIM ESCOLHA."
];
sobre.infoCartas[12] = [ //ENQUANTO
"Comando de repeti��o ENQUANTO - FA�A - FIM ENQUANTO",
"Na estrutura de repeti��o do ENQUANTO a verifica��o da condi��o � executada primeiro. Caso a condi��o seja falsa, o bloco de c�digos entre o FA�A e o FIM ENQUANTO � executado, sendo que um de seus c�digos deve ser algo que altere o valor da vari�vel de modo que em algum momento a condi��o se torne verdadeira, caso contr�rio o c�digo entrar� em loop infinito. Quando a condi��o for verdadeira a execu��o segue nas instru��es ap�s o FIM ENQUANTO."
];
sobre.infoCartas[13] = [ //REPITA
"Comando de repeti��o REPITA - AT�",
"Na estrutura de repeti��o do REPITA a verifica��o da condi��o � executada por ultimo. Caso a condi��o seja falsa, o bloco de c�digos entre o REPITA e o AT� volta a ser executado, sendo que um de seus c�digos deve ser algo que altere o valor da vari�vel de modo que em algum momento a condi��o se torne verdadeira, caso contr�rio o c�digo entrar� em loop infinito. Quando a condi��o for verdadeira a execu��o segue nas instru��es ap�s o AT�."
];
sobre.infoCartas[14] = [ //PARA
"Comando de repeti��o PARA - AT� - FA�A - FIM PARA",
"Na estrutura de repeti��o do PARA a verifica��o da condi��o � executada por ultimo, sendo que cada vez que ela for verdadeira al�m do bloco de c�digos entre o FA�A e o FIM PARA ser executado, a variavel da condi��o � incrementada em uma unidade automaticamente. Quando a condi��o for falsa (neste caso o valor da vari�vel de condi��o ser maior que o valor final) a execu��o segue ap�s o FIM PARA."
];
sobre.infoCartas[15] = [ //ESPACO EM BRANCO
"Completar os comandos",
"Com base em tudo o que foi ensinado neste jogo, voc� conseguiria completar o ret�ngulo em branco para que o c�digo execute perfeitamente e produza o resultado que aparece no coment�rio do c�digo???"
];
