//06 Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

function verificarExtensap (arquivo) {
    return arquivo.endsWith(".mp3");
  }
  
  console.log(verificarExtensap("arquivo.wav"));