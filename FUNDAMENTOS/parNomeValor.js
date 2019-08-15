// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = "Falaaaaaaa" // contexto l´rxico 2 
    return saudacao
}

// objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Cassio',
    idade: 24,
    peso: 70,
    endereco:{
        logradouro: 'Rua: Frei Gaspar de São Bernardim',
        numero: 177
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)