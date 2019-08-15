const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(Response => {
    const funcionarios = Response.data
    //console.log(funcionarios)

    // mulher chinesa com o menor salario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .filter(menorSalario)

    console.log(func)
})