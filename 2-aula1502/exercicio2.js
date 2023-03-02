// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso = 80;
let altura = 1.85;
let imc = peso / (altura * altura);
console.log(imc);
if (imc < 18.5) {
  console.log("Abaixo do peso!");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc < 35) {
  console.log("Grau I");
} else if (imc >= 35 && imc < 40) {
  console.log("Grau II");
} else {
  console.log("Grau III");
}