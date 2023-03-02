
//03 Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

let array =[1,2,10,4,5,6,7]
let armazenar = 0;
for (let i = 0; i < array.length; i++) {

    if (array[i]> armazenar) {
        armazenar = array[i]
    }
}
console.log(armazenar)