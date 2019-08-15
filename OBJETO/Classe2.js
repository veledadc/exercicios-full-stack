class Avó {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
} 

class Pai extends Avó {
    constructor(sobrenome, profissão = 'Professor') {
         super(sobrenome)
         this.profissão = profissão
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)