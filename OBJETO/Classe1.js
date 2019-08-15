class Lançamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lançamentos  = []
    }
    addLançamentos(...Lançamentos) {
        Lançamentos.forEach(l => this.Lançamentos.push(l))
    }
    sumario() {
        let valorConsolidade = 0
        this.Lançamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new Lançamento('Salario', 1200)
const contaDeLuz = new Lançamento('Luz', -220)

const contas = new CicloFinanceiro(0, 2018)
contas.addLançamentos(salario, contaDeLuz)
console.log(contas.sumario())


