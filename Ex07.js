//Verificar se um ano é bissexto.

function anoBissexto(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        return true
    }
    return false;
}

let ano = Number(prompt("Digite um ano para verificar se ele é bissexto ou nao: "))

if(anoBissexto(ano)){
    console.log(`${ano} é bissexto.`)
}else{
    console.log(`"${ano} não é bissexto.`)
}
