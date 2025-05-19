//Criar um algoritmo que calcule o fatorial de um número usando função.

function calcularFatorial(numero){

if(numero < 0 || isNaN(numero)){
    return null;

    }
        let fatorial = 1;

        for(let i = numero; i > 1; i--){
        fatorial *= i
    }

    return fatorial;
}

let numero = Number(prompt("Digite um número: "))
let resultado = calcularFatorial(numero);

if(resultado === null){
    alert("Por favor, digite um número inteiro positivo");
}else {
    alert(`O número ${numero} fatorado é: ${resultado}`); 
}


