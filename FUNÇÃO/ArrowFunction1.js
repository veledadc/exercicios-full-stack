let dobro = function () {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito  
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá bocó'
}

ola = () => 'Olá Bocó'
ola = _ => 'Olá Bocó' // Possui param
console.log(ola())