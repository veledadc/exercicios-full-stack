Array.prototype.map2 = function(carrinho) {
    const newArray = []
    for (let i = 0; i < this.length; i ++) {
         newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome", "borracha", "preço": 3.45}', 
    '{"nome", "caderno", "preço": 13.90}', 
    '{"nome", "kit de lapis", "preço": 41.22}', 
    '{"nome", "caneta", "preço": 7.50}'
] 

// Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreço = produto => produto.preço

const resultado = carrinho.map2(paraObjeto).map2(apenasPreço)
console.log(resultado)

