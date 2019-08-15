// let e const
{
  var a= 2
  var b = 3
}
console.log(a)
console.log(b)

// TampleteString
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [L, E, ...TRAS] = "COD3R"
console.log(L, E, TRAS);

const[x,  ,y] = [1, 2, 3]
console.log(x, y);

const{idade: i, nome} = { nome:"Ana", idade: 9}
console.log(i, nome);
