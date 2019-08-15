let valor // não iniciada
console.log(valor)

valor = null // ausencia de valor 
console.log(valor)
//console.loh(valor.toString()) // Erro!

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // Evitar atribuir undefined
console.log(!!produto.preço)
// delete produto.preço
console.log(produto)

produto.preço = null // sem preço
console.log(!!produto.preço)
console.log(produto)

