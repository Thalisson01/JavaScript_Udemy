// Forma normal
const prod1 = {
     nome: '...',
     preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1547
}

// Factory é uma função que retorna um objeto
// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())