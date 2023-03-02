//05 Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

let aleatorio = [];
for (let i = 0; i < 5; i++) {
  aleatorio.push(Math.floor(Math.random() * 100));
}
console.log(aleatorio);
let pares = [];
soma = 0;
for (let i =0; i < aleatorio.length; i++) {
  if (aleatorio[i] % 2 == 0) {
    pares.push(aleatorio[i]);
    soma += aleatorio[i];
  }
}
console.log(soma);
console.log(pares);