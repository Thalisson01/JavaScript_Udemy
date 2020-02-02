let valor // Não inicalizada
console.log(valor)

valor = null // ausência de valor  ou definida como nula
console.log(valor)
// console.log(valor.isString()) // Erro!

const produto = {}
console.log(produto.preco) // Não foi inicializada
console.log(produto) // Meu objeto produto está vazio

produto.preco = 10 // Foi atribuido um valor
console.log(produto)

produto.preco = undefined // Evite fazer isso, é melhor usar o null ou qualquer outra coisa
console.log(!!produto.preco) // Retornar um valor boleano

//delete produto.preco

produto.preco = null // Melhor fazer isso
console.log(produto)

