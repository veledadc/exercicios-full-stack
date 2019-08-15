// pessoa => 123 => {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa => 456 => {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua um'
delete pessoa.nome 

console.log(pessoa.nome)
console.log(pessoa)

const PessoaConstante = Object.freeze({ nome: 'João'})
PessoaConstante.nome = 'Maria'
console.log(PessoaConstante)
