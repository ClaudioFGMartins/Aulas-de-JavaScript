//09 Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

let array = [1, 2, 3];
function inverteArray(arrayInvert){
    let novoArray = [];
    for (let i = arrayInvert.length - 1; i >= 0; i--){
        novoArray += arrayInvert[i];
    };
    return novoArray;
}
console.log(inverteArray(array));