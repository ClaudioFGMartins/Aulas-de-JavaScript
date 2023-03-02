// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

console.log("--------------------------------------------")
let salario = 450;

if (salario < 500) {
    salario = salario + 50; //salario += 50
    console.log(`Salario final ${salario}`);
}
else if(salario >= 500 && salario <= 1000) {
    salario = salario + 25;
    console.log(`Salario final ${salario}`);
}
else {
    console.log("Não houve aumento salarial")
}