const escola = 'Universe'

console.log(escola.charAt(4)) // Retorna o valor que está no índice 4
console.log(escola.charAt(25)) // Se o índice não existir ele retorna um valor vazio!!! AAAAAAAAAA

console.log(escola.charCodeAt(4)) // Retorna o valor que está no índice 4 em forma de tabela ask

console.log(escola.indexOf('i')) // Retorna o índice do valor primeiro valor (i)

console.log(escola.substring(1)) // Retorna todos os valores depois do índice 1
console.log(escola.indexOf(0 , 3)) // Retorna todos os valores entre os índices 0 a 3

console.log('Escola '.concat(escola).concat("!")) // Vai juntar 'Escola' + Universe + "!"

console.log(escola.replace('e', 3)) // Vai substituir o primeiro valor 'e' por 3
console.log(escola.replace(/\d/, 3)) // Substitua todos os DÍGITOS por 3 -- Se chama regex
console.log(escola.replace(/\w/g, 3)) // Substitua todos os DÍGITOS e LETRAS por 3 -- Se chama regex

console.log('Maria, Joao, Pedro'.split(', ')) // Colocar uma string em forma de array
console.log('Maria, Joao, Francisco'.split(/, /)) // É a mesma coisa do de cima porém com regex




