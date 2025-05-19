//Ler um número e imprimir sua tabuada de 1 a 10.

let numero = Number(prompt("Digite um número: "))

for(let i = 1; i <=10; i++ ){
    let tabuada = numero * i
    console.log(`${numero} * ${i} = ${tabuada}`)
}