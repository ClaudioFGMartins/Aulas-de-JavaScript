// Estrutura de repetição: For

/*
    for(inicialização; condição; atualização) {
        // o código a se repetir
    }
*/

// 1 até 15
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
}

// 5 até 1
for (let contador = 5; contador >= 1; contador++) {
    console.log(contador);
}

// 1 + 2 + 3 + 4 + .... +99 + 100 =?

for(let i = 0; i<=100; i++) { // iteração ou index
    soma = soma  +i; // 0 + 1 
}

//Tabuada

for( let i=0; i <= 10;i++){
    console.log(`${i} x 5 = ${i*5}`);
}

// Exercício 6
for (let i = 50; i < 76; i++) {
    console.log(`número: ${i}`);  
}