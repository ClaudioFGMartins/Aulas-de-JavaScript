// Operadores lógicos: NOT(!), AND(&&), OR(||)

// Operador NOT(!) = Inverte o valor lógico
let ligado = false;
let desligado = !ligado;

/*
    Tabela (NOT)
    !true = false
    !false = true
*/

// Operador AND(&&) = Todas as expressões tem que ser true
let gasolinaTanque = 1;
let naReserva = gasolinaTanque <5;
let podeAbastecer = desligado && naReserva;
let podeViajar = ligado && !naReserva;

/*
    Tabela Verdade (E)
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

// Operador OR(||) = Basta uma expressão ser true
// Tabela OU em portugues
let taPodendo = podeViajar || podeAbastecer;

/* 
    Tabela Verdade (OU)
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

let idade = 30;
let podeBeber = idade >= 18 && idade <= 59; // De 18 até 59 anos

// Estruturas condicionais

let idadeUsuario = 25;

/*
if (idadeUsuario >= 18) { // executa se for verdade
    console.log("Você é maior de idade!");
} else {
    // caso contrário
    console.log("Você é menor de idade");
}
*/

let numero = 0

if(numero > 0) {
    console.log(`${numero} é positivo!`)
} else if (numero < 0) {
    console.log(`${numero} é negativo`)
} else { // se nenuma das condições acima for verdadeira
    console.log(`O número é zero`)
}