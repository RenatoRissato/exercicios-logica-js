/*Peça dois números para o usuário e diga:
Se ambos são positivos
Se ambos são negativos
Se um é positivo e o outro é negativo
Ou se algum deles é zero
*/

let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));

if (number1 == 0 || number2 == 0){
    console.log("Algum número digitado é zero!")
}else if(number1 > 0 && number2 < 0){
    console.log("O primeiro número",number1,"é Positivo e o segundo número", number2," é negativo!")
}else if(number1 < 0 && number2 >0){
    console.log("O primeiro número",number1,"é Negativo e o segundo número", number2," é Positivo!")
}else if(number1 < 0 && number2 <0){
    console.log("O primeiro número",number1,"é Negativo e o segundo número", number2," é Negativo também!")
}else if(number1 > 0 && number2 > 0){
    console.log("O primeiro número",number1,"é Positivo e o segundo número", number2," é positivo também!")
}
