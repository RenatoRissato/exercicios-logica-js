//Inverter uma string (ex: "Renato" → "otaneR").

let texto = prompt("Digite uma palavra ou frase: ")

function inverterTexto(texto){
    return texto.split("").reverse().join("");
}

let resultado = inverterTexto(texto);
alert(`O texto invertido é: ${resultado}`)