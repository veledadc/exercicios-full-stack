function MeuObejeto() {}
console.log(MeuObejeto.prototype)

const obj1 = new MeuObejeto
const obj2 = new MeuObejeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObejeto.prototype=== obj1.__proto__)

MeuObejeto.prototype.nome = 'Anônimo'
MeuObejeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()    

const obj3 = {}
obj3.__proto__ = MeuObejeto.prototype
obj3.nome = 'Obj3'
obj3.falar()    

// Resumindo a loucura..
console.log((new MeuObejeto).__proto__ === MeuObejeto.prototype)
console.log(MeuObejeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)