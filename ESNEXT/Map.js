const tecnologias = new Map ()  
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('React').framework)

const chavesVariadas = new Map ([
    [function () { }, 'Função'], 
    [{}, 'Objeto'],
    [123, 'Numero'], 
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
