function criarProduto(nome,  preço) {
    return{
        nome,
        preço,
        desconto: 0.1
    }

}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))