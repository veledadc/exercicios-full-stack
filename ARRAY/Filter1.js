const produto = [
    {nome:'Noteboon', preço: 2499, fragil: true },
    {nome:'iPad Pro', preço: 4199, fragil: true },
    {nome:'Copo de vidro', preço: 12.49, fragil: true },
    {nome:'Copo de plastico', preço: 18.99, fragil: false }
]

console.log(produto.filter(function(p){
    return false
}))

const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil
console.log(produto.filter(caro).filter(fragil))
