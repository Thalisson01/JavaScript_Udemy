const pessoa = {
    saudacao: "Bom dia!",
    falar() { // ECMA2015 -- Criando uma função dentro de um objeto
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // Usar isso para amarrar
falarDePessoa()