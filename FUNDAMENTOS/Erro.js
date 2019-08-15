function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mwnsagem'
    throw {
        nome: erro.name,
        mgs: erro.message,
        date: new Date
    } 
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!" )
    } catch (e) {
        tratarErroELancar(e)  
    } finally {
        console.log("Final")
    }
}

const obj = {nome: "Roberto" }
imprimirNomeGritando(obj)