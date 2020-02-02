// par nome/valor
const saudacoes = 'Opa' // Contexto léxico 1

function exec() {
     const saudacoes = 'Olá' // Contexto léxico 2
     return saudacoes
}

// Objetos são grupos ninhados de pares nome/valor
const Objeto = {
    nome: 'Thalisson',
    idade: 14,
    peso: 45,
    endereco: {
        lagradouro: 'Rua muito legal',
        numero: 123
    },
    saudacoes: 'Pedro'
}

console.log(saudacoes)
console.log(exec())
console.log(Objeto)