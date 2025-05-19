//Ordenar um array de números em ordem crescente (sem usar .sort()).

let numeros = [5, 2, 9, 1, 7, 3];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {

            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

alert(`Array ordenado: ${numeros}`);
console.log("Array ordenado:", numeros);
