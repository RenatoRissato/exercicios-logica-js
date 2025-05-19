//Imprimir os 10 primeiros números da sequência de Fibonacci.

// Sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let n1 = 0;
let n2 = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");
console.log(n1); 
console.log(n2); 

for (let i = 2; i < 10; i++) {
    let proximo = n1 + n2;
    console.log(proximo);
    n1 = n2;
    n2 = proximo;
}
