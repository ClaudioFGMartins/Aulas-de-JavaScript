// 1 até 5
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
  }
  
  // 5 até 1
  for (let contador = 5; contador >= 1; contador--) {
    console.log(contador);
  }
  
  // 1 + 2 + 3 + 4 + ... + 99 + 100 = ?
  let soma = 0;
  
  for (let i = 1; i <= 100; i++) {
    // iteração ou index
    soma = soma + i;
  }
  
  console.log(soma);
  
  // Exercício IV: Repita com for os exercícios de while anteriores.
  
  // Tabuada
  for (let fator = 1; fator <= 10; fator++) {
    console.log(`5 x ${fator} = ${fator * 5}`);
  }
  
  // Impares
  for (let numero = 1; numero <= 99; numero++) {
    if (numero % 2 === 1){
        console.log("Impar: " + numero);
    }
  }
  
  // Intervalo 50 a 75
  for (let i = 50; i < 76; i++) {
    console.log(`número: ${i}`);
  }