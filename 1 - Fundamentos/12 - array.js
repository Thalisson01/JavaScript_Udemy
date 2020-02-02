const valores = [0, 1, 3.4]

console.log(valores[0], valores[2]) // Se existir ele retorna os valores que estão nessas keys
console.log(valores[40]) // Se não existir ele retorna (undefined)

valores[5] = 20 // Adicionar um valor em uma key desejada
console.log(valores)

valores.push(100) // Adiciona um valor depois da ultima key que tiver
console.log(valores)

valores.push(true, false, {id: 3}, null) // Podemos adicionar vários tipos dentro de uma array, mas não é recomendado
console.log(valores)

console.log(valores.pop()) // Retorna o ultimo valor da minha array e EXCLUI ele do array

delete valores[0] // DELETA o VALOR e não a key
console.log(valores)

console.log(valores.length) // Retorna quantas posições tem aquele array

console.log(typeof valores) // Tipo de um array é um objeto