// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let contabancaria = {
    // propiedades
    codigo: 123456,
    saldo: 1000,
    cpfTitular: "123.456.789-00",
    nomeTitular: "Eduardo Stuart",
    // metodos
    saque(valor){
        this.saldo -= valor;
    },
    deposito(valor) {
        this.saldo += valor;
      },
}
console.log(contabancaria.saldo)
contabancaria.saque(15)
console.log(contabancaria.saldo)
