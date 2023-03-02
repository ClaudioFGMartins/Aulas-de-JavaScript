// Dia 14.02
// Variáveis e Operadores

//let = palavra reservada
//let aguarda o [NOME DA VARIVAEL]
let nomeCompleto; // camel case

nomeCompleto = "Claudio Filho"; // atribuição

console.log("Batata");
console.log(nomeCompleto);

nomeCompleto = "Pedro Tavares"; // re-atribuição
console.log(nomeCompleto);

let idade = 19;
idade = 20; // re-atribuir
console.log(idade);

//concatenação
console.log("Meu nome é " + nomeCompleto + " e tenho " + idade + " anos!");

// const = define uma constante = impede a re-atribuição
const cpf = "000.000.000-00"

//Tipos
let golsSofridos = 3; // numero = number
let chanceDerrota = 0.55; // numero decimal
let posseBolla = 33.57 // 33,57
let nomeTime = "Valência"; // string
let patrocinio; // underfined = não tem valor definido.
// boolean = 2 valores possiveis (true ou false)
let timeGanhou = true; // "Lê: É verdade que o timeGanhou"
let timePerdeu = false; // "Lê: É verdade que o timePerdeu"
let soma = 200 + 100;
// console.log("A soma é " + soma + "!");
// console.log(`A subtração é ${sub}!`); // Template strings = interpolação de strings
// console.log(`A multiplicação é ${mult}!`);
// console.log(div);
// console.log(resto);
// console.log(expressao);
// console.log(expressao2);

let i = 0;
// i = i + 1; // o novo valor de i é 0 + 1 = 1
// i = i + 1; // o novo valor de i é 1 + 1 = 2
// i = i + 1; // o novo valor de i é 2 + 1 = 3
// i = i + 1; // o novo valor de i é 3 + 1 = 4
i++; // i = i + 1
console.log(i);
i++; // altera o valor de i somando i + 1 = incremento
console.log(i);
i--; // i = i - 1 = decremento
console.log(i);
