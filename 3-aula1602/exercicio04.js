// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.


/*
switch (comida) {
  case "batata":
  case "carne":
  case "chocolate":
    console.log("Hum, adoro!");
    break;
  case "pizza":
  case "sanduíche":
    console.log("As vezes...");
    break;
  default:
    console.log("Quero não!");
}
}
*/

let comida = "abacate"; //Professor

if (comida === "batata" || comida === "carne" || comida === "chocolate") {
  console.log("Hum, adoro!");
} else if (comida === "pizza" || comida === "sanduíche") {
  console.log("As vezes...");
} else {
  console.log("Quero não!");
}