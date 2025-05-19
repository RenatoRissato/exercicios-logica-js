//Fazer um programa que receba 10 números e mostre a média com array.

let numeros = []
let soma = 0;

for(let i = 0; i < 10; i++){
    let n = Number(prompt("Digite um número: "))
    numeros.push(n);
}

for(i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

let media = soma / numeros.length;

alert(`A média dos 10 números é: ${media.toFixed(2)}`);