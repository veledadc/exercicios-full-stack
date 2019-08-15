const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove primeiro!
console.log(pilotos)

pilotos.unshift('Hamiltom')
console.log(pilotos)

// Slice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remoner 
pilotos.slice(3, 1) // Massa quebrou!!
console.log(pilotos)

const algundpilotos1 = pilotos.slice(2) // novo array
console.log(algundpilotos1)

const algundpilotos2 = pilotos.slice(1, 4)
console.log(algundpilotos2)
