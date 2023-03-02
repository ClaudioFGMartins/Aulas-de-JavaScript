//01 Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
console.log(`A soma é ${soma}`);
