Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
}

const produto = [
    {nome:'Noteboon', preço: 2499, fragil: true },
    {nome:'iPad Pro', preço: 4199, fragil: true },
    {nome:'Copo de vidro', preço: 12.49, fragil: true },
    {nome:'Copo de plastico', preço: 18.99, fragil: false }
]

const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil

console.log(produto.filter2(caro).filter2(fragil))
