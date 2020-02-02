const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Com a `` você pode digitar como se fosse um texto normal
// Utiliza-se ${variavel} para puxar qualquer variavel dentro do texto
const template = `
    Olá
    ${nome}`

console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

// Funções...
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)