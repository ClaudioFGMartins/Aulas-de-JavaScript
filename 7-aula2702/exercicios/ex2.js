//02 Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

let notas = [8, 7, 6, 5, 10];
let soma2 = 0;

for(let i=0;i<notas.length;i++){
    soma2 += notas[i];
}

console.log(`A média é ${soma2/ 5}`);