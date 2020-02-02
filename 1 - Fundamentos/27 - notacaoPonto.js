console.log(Math.ceil(6.1))

const teste = {}
// Podemos definir dados a uma funcao de duas formas através de pontos
teste.nome = 'Thalisson' // Essa é a mais recomendada
//teste['nome'] = 'Thalisson'
console.log(teste.nome)

function Obj(nome){ // Criei uma funcao que tem como parametro nome
    this.nome = nome // O this torna visivel 'nome' no escope global

    this.exec = function(){ // Usando o this tornei a funcao exec global
        let texto = 'Testudo...'
        return texto
    }
}

// Declaro uma const qualquer chamada obj1
// Depois eu transformei a minha função em um objeto
// Depois atribui meu objeto a minha const
const obj1 = new Obj('Arrow')
console.log(obj1.nome)

console.log(obj1.exec())
