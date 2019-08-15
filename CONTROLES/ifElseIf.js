Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
} 

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recupéração')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }
}

imprimirResultado(10) 
imprimirResultado(8.8)
imprimirResultado(6.55)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)