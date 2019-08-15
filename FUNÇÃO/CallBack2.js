const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem cllback
let NotasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        NotasBaixas1.push(notas[i])
    }
}

console.log(NotasBaixas1)

// Com Callback
const NotasBaixas2 = notas.filter(function(notas) {
    return notas < 7 
})

console.log(NotasBaixas2)

const NotasBaixas3 = notas.filter(nota => nota < 7)
console.log(NotasBaixas3)
