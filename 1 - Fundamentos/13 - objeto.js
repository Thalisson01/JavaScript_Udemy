const prod1 = {}

// Primeira forma de usar o objeto
prod1.nome = 'Thalisson'
prod1.idade = 19
prod1['Nome da mae'] = 'Pati' // Evitar fazer isso
console.log(prod1)

// Segunda forma de usar o objeto
const prod2 = {
    nome: "Thalisson",
    idade: 19
}

// Objeto é diferente de JSON

// Exemplo de JSON
'{ "nome": "Thalisson", "idade": 19}'