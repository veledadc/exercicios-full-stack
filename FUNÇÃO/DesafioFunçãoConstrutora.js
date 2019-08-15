function Pessoa(nome) { 
        this.nome = nome

    this.Falar = function() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ("João")
p1.Falar()  
console.log(p1.nome)
