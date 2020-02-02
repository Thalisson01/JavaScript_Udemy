// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        lagradouro: 'Rua linda',
        number: 29
    }
}

const { nome, idade } = pessoa // Retirando dados de dentro do objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Retirando e editando o nome
console.log(n, i)

const { sobrenome, intimo = true } = pessoa // Retirando e definindo um valor padrão caso não seja definida
console.log(sobrenome, intimo)

const { endereco: { lagradouro: l, number: num } } = pessoa // Retirando um objeto de dentro de um objeto
console.log(l, num)

const { endereco: { lagradouro, impo: im = true } } = pessoa // Retirando um objeto dentro de um objeto definindo um valor padrao
console.log(lagradouro, im)