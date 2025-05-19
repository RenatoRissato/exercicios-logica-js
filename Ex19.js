//Verificar se uma palavra é um palíndromo (ex: "arara").

let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");


function ehPalindromo(palavra) {
    let textoLimpo = palavra.toLowerCase().replace(/\s+/g, '');
    let invertida = "";

    for (let i = textoLimpo.length - 1; i >= 0; i--) {
        invertida += textoLimpo[i];
    }

    return textoLimpo === invertida;
}

if (ehPalindromo(palavra)) {
    alert(`"${palavra}" é um palíndromo!`);
} else {
    alert(`"${palavra}" não é um palíndromo.`);
}
