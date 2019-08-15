// novov recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 4,
    endereço: {
        logradouro: 'Eua Abc',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n ,i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const{ endereço: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep) 

const { conta: { ag, num }} = pessoa
console.log(ag, num) 