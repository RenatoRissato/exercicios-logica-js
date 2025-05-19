//Criar uma função que receba uma string e retorne quantas vogais ela tem.

let frase = prompt("Digite uma frase: ");


function contadorVogais(frase){

    let vogais = "aeiouAEIOU"
    let contador = 0;

    for (let i = 0; i < frase.length; i++){
        if (vogais.includes(frase[i])){
            contador++;
        }
    }
    return contador;
}

let totalVogais = contadorVogais(frase);
alert(`A frase contém ${totalVogais} vogais`)