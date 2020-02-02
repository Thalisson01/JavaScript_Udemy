const peso1 = 1.0
//const peso2 = '2.0' // Uma string
const peso2 = Number('2.0') // Um número

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verificar se é um número inteiro
console.log(Number.isInteger(peso2)) // Verificar se é um número inteiro

console.log(peso1.toFixed(2)) // Dizer quantas casas depois da vírgula você deseja
console.log(peso1.toString(2)) // Aparecer em número binário