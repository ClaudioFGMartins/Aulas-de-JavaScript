//08 Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function inverteString(string){
    let batataInvert = "";
    for (let i = string.length - 1; i >= 0; i--){
        batataInvert += string[i];
    };
    return batataInvert;}