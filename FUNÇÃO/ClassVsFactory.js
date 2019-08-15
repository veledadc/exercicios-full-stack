class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    Falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ("João")
p1.Falar()  


const criarPessoa = nome => {
    return {
        Falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa ('João')
p2.Falar()