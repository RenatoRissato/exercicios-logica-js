/*Calcular a média de três notas e 
informar se o aluno foi aprovado média >= 7, 
Recuperação se média ≥= 5 e < 7 e Reprovado se média < 5*/

let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let nota3 = Number(prompt("Digite a terceira nota: "))

let media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    alert("O aluno foi aprovado com média " + media.toFixed(2))
}else if(media >=5){
    alert("O aluno está de recuperação com média: " + media.toFixed(2))
}else{
    alert("O aluno está reprovado com média de " + media.toFixed(2))
}