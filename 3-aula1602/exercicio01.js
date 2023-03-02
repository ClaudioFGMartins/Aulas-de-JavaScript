// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.
let idade = 18;
let dinheiro = 300;

if (idade >= 18 && dinheiro >= 20) {
    console.log("A pessoa pode comprar");
    dinheiro = dinheiro - 20;
    console.log(`Saldo final ${dinheiro}`) //mostrando dinheiro
}

else {
    console.log("A pessoa não pode comprar");
}
