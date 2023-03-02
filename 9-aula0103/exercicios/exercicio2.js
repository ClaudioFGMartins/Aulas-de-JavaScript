// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o preco aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total
let produto = {
    // Atributos/propriedades
    nome: "Relojim",
    descricao: "Indica a hora os minutos e os segundos",
    quantidade: 100,
    precoOriginal: 500,
    desconto: 30,
    // Métodos
    calcularPrecoDesconto() {
      let precoCompra = this.precoOriginal - this.desconto;
      return precoCompra;
    },
    apresentacao() {
      console.log(this);
    },
    comprar(total) {
      this.quantidade -= total;
    },
  };
  
  produto.apresentacao();
  produto.comprar(20);
  produto.comprar(20);
  console.log(produto.quantidade);
  console.log(produto.calcularPrecoDesconto());
  