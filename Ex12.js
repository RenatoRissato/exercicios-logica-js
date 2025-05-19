//Verificar se um número é primo.

let numero = Number(prompt("Digite um número: "));

function numeroPrimo(numero){
    if (numero <= 1){
        return false

    }else if(numero === 2){
        return true

    }else{
            for (let i = 2; i <= Math.sqrt(numero); i++){
            if (numero % i === 0){
                return false;
            } 
        }
        return true;
    }
}

if (numeroPrimo(numero)){
    alert(`${numero} é primo`)
}else {
    alert(`${numero} não é primo`);
}