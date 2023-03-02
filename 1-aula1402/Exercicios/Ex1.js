// Exercício 1
// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"

let peso;
peso = 75;

let altura;
altura = 1.75;

let soma;
soma = peso / (altura * altura);

console.log(`Meu IMC é ${soma.toFixed(2)}`)