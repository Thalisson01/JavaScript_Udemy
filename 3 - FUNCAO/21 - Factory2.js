// Testando factory
function criarProduto(nome, valor){
    return {
        // nome: nome, // Ou
        nome,
        // valor: valor // Ou
        valor,
        desconto: 0.1
    }
}

console.log(criarProduto('Pao', 10))
console.log(criarProduto('Arroz', 100))