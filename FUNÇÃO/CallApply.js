function getPreço(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.Preço * (1 - this.desc) * (1 + imposto)}`
}

const produtp = {
    nome: '',
    Preço: 4589,
    desc: 0.15,
    getPreço
}

global.Preço = 20
global.desc = 0,1
console.log(getPreço())
console.log(produtp.getPreço())

const carro = {Preço: 49990, desc:  0.20 }

console.log(getPreço.call(carro))
console.log(getPreço.apply(carro))

console.log(getPreço.call(carro, 0.17, "$"))
console.log(getPreço.apply(carro, [0.17, '$']))