//Criar uma função que retorne o maior de dois números.

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo primeiro: "));

function maiorNumero(numero1, numero2){
    if (numero1 === numero2){
        return "Os números são iguais."
    }
    else if(numero1 > numero2){
        return (numero1)
    }else{
        return (numero2)
    }
}

let resultado = maiorNumero(numero1, numero2);
alert(`O maior número é: ${resultado}`);