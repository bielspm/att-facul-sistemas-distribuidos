/* escreve no final do corpo do html */
document.write("<h1>Estamos executando o script.js</h1>");
/* escreve no final do corpo do html */
document.write("Esse script está em um arquivo externo e é referenciado no header do HTML");
/* escreve no console */
console.log("Esse script está no cabeçalho do HTML");
/* escreve no console */
console.log("Primeiro");
/* escreve no console */
console.log("Segundo");

// Comentário de uma linha

/*  Comentário 
    de 
    múltiplas
    Linhas
*/

// Tipagem fraca
/* cria a variavel */
var teste = 1;
/* escreve no final do corpo do html */
document.write("<hr>O valor da variável teste é " + teste + "<hr>");
/* mudar o valor da variavel */
teste = 'joao';
/* escreve no final do corpo do html */
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global - criada sem necessidade de declaração
nome = 'joao';
console.log(nome)

// Formas de declaração de variáveis
/* cria uma variavel global */
var   v1 = 5.25;
/* cria uma variavel com escopo */
let   v2 = null;
/* cria uma constante */
const v3 = 'teste'

/* escreve no console o tipo das variaveis */
console.log(`v1: {typeof(v1)}`);
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof NaN); // tipo number
console.log(typeof +Infinity); // tipo number
console.log(typeof null); // tipo number
const number = "1";
// Operadores de comparação
console.log(number == 1);
// true
console.log(number === 1);
// false

console.log('ele disse "vtnc"');

// adicionar uma lista no body do HTML
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];
/* cria uma lista no final da pagina */
var listaUl = document.createElement('ul');
/* acha os elementos com a tag 'body' */
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

//alert("Vamos criar uma lista aqui!");
/* adiciona a lista no corpo do html */
body[0].appendChild(listaUl);

/* cria ementos de uma lista com texto e adiciona na lista criar anteriormente */
for(var  i=0;i<lista.length;i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

document.write("A lista não ordenada <b>ACIMA</b> foi criada dinamicamente via JavaScript");

/* criar um objeto */
var obj = {
    nome: "Joao",
    sobrenome: "Furtado",
    profissao: "jogador",
    salario: 120000,
    pessoaJuridica: true
};

console.log(obj);
console.log("Salario: R$" + obj.salario);

var arr = [5, "JP", true, {teste1: 1, teste2: 2}, false];
console.log(arr);
console.log(arr[1]);
console.log(typeof arr);

if(arr[4]) {
    console.log("Entrou no teste do IF")
}

// Operadores de comparação ==, ===, !=, >, <, >=, <= 
if (obj.salario > '100000') {
    console.log("Salário acima de 100 mil");
}