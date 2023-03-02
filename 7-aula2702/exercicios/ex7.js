//07 Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

let cpf = "056.985.990-23";

function verificarCpf (cpf) {
  return cpf.slice(cpf.length-2);
}

console.log(verificarCpf(cpf));

// let cpf = "056.985.990.23";

// function verificarCpf (cpf) {
//   // let cpfSemponto = cpf.split(".")
//   // console.log(cpfSemponto)
//   // let cpfSemtraco = cpfSemponto[2].split("-")
//   // console.log(cpfSemtraco)
//   // return cpfSemponto[0] + cpfSemponto[1] + cpfSemtraco[0] + cpfSemtraco[1]
 
 
//   let cpfSemtraco = cpf.split(".")
//   console.log(cpfSemtraco)
//   return cpfSemtraco[3]
// }
// console.log(verificarCpf(cpf));