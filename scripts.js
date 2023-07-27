const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every((elementoAtual) => {
    return elementoAtual !== 'banana';
});

console.log(resultado);