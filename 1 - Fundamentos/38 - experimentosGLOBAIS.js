let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === thist)
console.log(module.exports)

// Criando uma variavel maluca sem var e let
abc = 3 // Nunca faça isso, pois isso é uma variavel global dentro do node
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }