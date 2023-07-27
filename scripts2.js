const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.every((numero) => {
    return numero !== 6;
})

console.log(resultado);