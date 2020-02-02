let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// Todos os verdadeiros...
console.log(!!3) // Quando for um número inteiro
console.log(!!-1)
console.log(!!' ') // Um char com espaço
console.log(!!'texto') // Um char preenchido
console.log(!![]) // Uma array
console.log(!!{}) // Um objeto
console.log(!!Infinity) // O infinito
console.log(!!(isAtivo = true))

// Os falsos...
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Para finalizar...
let nome = ' '
// Retorna nome se a variavel nome estiver preenchida
// caso esteja vazia vai retornar desconhecido
// pois o || está verificando os valores verdadeiros como podemos ver acima.
console.log(nome || 'Desconhecido.')

// O esquema abaixo retorna o primeiro valor verdadeiro que for encontrado
console.log(!!('' || null || 0 || ' ')) // Vai retornar o " " pois é o único verdadeiro