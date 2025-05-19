//Fazer um programa que receba 10 números e mostre a média.

let contador = 0;
let soma = 0;
const ordinais = ["primeiro", "segundo", 'terceiro', "quarto", "quinto",
    "sexto", "sétimo", "oitavo", "nono", "décimo"
];

for(let i = 0; i < 10; i++){
    let numeros = Number(prompt(`Digite o ${ordinais[i]} número: `))
    soma += numeros;
    contador ++;
}

let media = soma/contador

alert(`A média dos 10 números Digitados é: ${media.toFixed(2)}`)
