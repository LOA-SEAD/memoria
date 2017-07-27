/*
	Esse javascript foi usado para armazenar todas as informações de cada um dos elementos que é exibido na seção "?" do jogo

*/
sobre.padrao = new Array();

sobre.padrao[0] = "<br><br><br><b>Conteúdo:</b> ";
sobre.padrao[1] = "<br><b>Descrição:</b> ";

sobre.infoCartas = new Array();

sobre.infoCartas[0] = [
"Operador lógico Efff",
"O operador lógico E apresenta como saída o valor verdadeiro apenas se todas os operandos forem verdadeiros (como pode ser verificado na tabela verdade localizada no canto inferior esquerdo), caso contrario terá como saída o valor falso, como por exemplo na frase \"Eu tenho que comprar laranja e uva\", o que significa que você precisa comprar essas duas frutas."
];
sobre.infoCartas[1] = [
"Operador lógico OU",
"O operador lógico OU apresenta como saída o valor verdadeiro se pelo menos um dos operandos for verdadeiro (como pode ser verificado na tabela verdade localizada no canto inferior esquerdo), caso contrario terá como saída o valor falso, como por exemplo na frase \"Eu tenho que comprar laranja ou uva\", o que significa que você precisa comprar apenas uma dessas frutas ou as duas."
];
sobre.infoCartas[2] = [
"Operador lógico NÃO",
"O operador lógico NÃO apresenta como saída o inverso do valor que está no operando, ou seja, a saída é verdadeira se o valor do operando é falso e a saída é falsa se o valor do operando é verdadeiro."
];
sobre.infoCartas[3] = [ // TAUTOLOGIA
"Expressão tautológica",
"Uma expressão tautológica é uma expressão onde independente dos valores dos operandos, a sua saída será sempre verdadeiro."
];
sobre.infoCartas[4] = [ //CONTRADICAO
"Expressão contraditória",
"Uma expressão contraditória é uma expressão onde independente dos valores dos operandos, a sua saída será sempre falso."
];
sobre.infoCartas[5] = [ // DUPLA NEGACAO
"Lei da dupla negação",
"Este teorema apresenta que negando um operando um número par de vezes o valor dele não se altera, como por exemplo na frase \"Não é verdade que a blusa não é vermelha\" em que seria a mesma coisa que dizer \"A blusa é vermelha\"."
];
sobre.infoCartas[6] = [ //DE MORGAN
"Teorema de De Morgan",
"Este teorema de De Morgan serve para mostrar a maneira de se converter uma expressão que utiliza a operação E em uma expressão equivalente que utiliza o operador OU."
];
sobre.infoCartas[7] = [ //DE MORGAN
"Teorema de De Morgan",
"Este teorema de De Morgan serve para mostrar a maneira de se converter uma expressão que utiliza a operação OU em uma expressão equivalente que utiliza o operador E."
];
sobre.infoCartas[8] = [ // PRECEDENCIA DE OPERADORES
"Precedência de operadores",
"A precedência de operadores determina a ordem em que se calcula as expressões. A ordem é a seguinte:<br>{}<br>[]<br>()<br>Operador NÃO<br>operador de exponenciação<br>* , / e módulo(resto da divisão)<br>+ e -<br>Operador E<br>Operador OU"
];
sobre.infoCartas[9] = [ //SE-ENTAO
"Comando condicional SE - ENTÃO - FIM SE",
"O comando SE verifica se a expressão que está dentro dos parênteses é verdadeira, e se isto ocorrer é executado o bloco de códigos que se encontra entre o ENTÃO e o FIM SE, caso contrario este bloco é ignorado e continua a execução a partir do FIM SE."
];
sobre.infoCartas[10] = [ //SE-ENTAO-SENAO
"Comando condicional SE - ENTÃO - SENÃO - FIM SE",
"A adição do SENÃO ao comando SE faz com que caso a expressão que está dentro dos parênteses seja falsa é executado o bloco de códigos que se encontra entre o SENÃO e o FIM SE, enquanto se caso ela for verdadeira será executado o bloco de códigos entre o ENTÃO e o SENÃO."
];
sobre.infoCartas[11] = [ //ESCOLHA
"Comando condicional ESCOLHA - CASO - SENÃO - FIM ESCOLHA",
"O comando ESCOLHA funciona de maneira semelhante que o comando SE. Para uma determinada variável que fica dentro dos parênteses após o ESCOLHA é verificada se a expressão que fica após o CASO utilizando aquela variável é verdadeira e se for é executado o bloco de códigos que se encontra entre os dois pontos e o próximo CASO ou um SENÃO. Se nenhuma das expressões forem verdadeiras, é executado o bloco de códigos entre o SENÃO e o FIM ESCOLHA."
];
sobre.infoCartas[12] = [ //ENQUANTO
"Comando de repetição ENQUANTO - FAÇA - FIM ENQUANTO",
"Na estrutura de repetição do ENQUANTO a verificação da condição é executada primeiro. Caso a condição seja falsa, o bloco de códigos entre o FAÇA e o FIM ENQUANTO é executado, sendo que um de seus códigos deve ser algo que altere o valor da variável de modo que em algum momento a condição se torne verdadeira, caso contrário o código entrará em loop infinito. Quando a condição for verdadeira a execução segue nas instruções após o FIM ENQUANTO."
];
sobre.infoCartas[13] = [ //REPITA
"Comando de repetição REPITA - ATÉ",
"Na estrutura de repetição do REPITA a verificação da condição é executada por ultimo. Caso a condição seja falsa, o bloco de códigos entre o REPITA e o ATÉ volta a ser executado, sendo que um de seus códigos deve ser algo que altere o valor da variável de modo que em algum momento a condição se torne verdadeira, caso contrário o código entrará em loop infinito. Quando a condição for verdadeira a execução segue nas instruções após o ATÉ."
];
sobre.infoCartas[14] = [ //PARA
"Comando de repetição PARA - ATÉ - FAÇA - FIM PARA",
"Na estrutura de repetição do PARA a verificação da condição é executada por ultimo, sendo que cada vez que ela for verdadeira além do bloco de códigos entre o FAÇA e o FIM PARA ser executado, a variavel da condição é incrementada em uma unidade automaticamente. Quando a condição for falsa (neste caso o valor da variável de condição ser maior que o valor final) a execução segue após o FIM PARA."
];
sobre.infoCartas[15] = [ //ESPACO EM BRANCO
"Completar os comandos",
"Com base em tudo o que foi ensinado neste jogo, você conseguiria completar o retângulo em branco para que o código execute perfeitamente e produza o resultado que aparece no comentário do código???"
];
