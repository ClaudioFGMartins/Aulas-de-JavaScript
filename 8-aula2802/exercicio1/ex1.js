// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.

let palavras = ['abacaxi', 'banana', 'laranja', 'uva', 'manga', 'melancia'];

let resultado = palavras.map((palavra) => {
    if (palavra.length < 5) {
        return "batata";
    } else {
        return palavra.toUpperCase();
    }
});

console.log(resultado);

// Filter = Aplica um teste em cada elemento e quem passar
// faz parte do novo array
let temps = [29, 5, 10, -4, 15, -20]; //Celsius

