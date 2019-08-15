const valor = 'Global'

function minhafunção() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhafunção()
}

exec()