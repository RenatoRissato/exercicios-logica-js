//*Simular uma calculadora básica (+, -, , /) com switch.

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

let operacao = prompt("Digite a operação desejada: ( +, -, *, /): ");

let resultado = 0;
switch (operacao){
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = numero2 !== 0? numero1 / numero2 : "Erro: Divisão por zero!"
        break;
    default:
        resultado = "Operação Inválida!"
}

alert(`Resultado: ${resultado}`);