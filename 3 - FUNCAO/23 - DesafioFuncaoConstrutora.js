function CriarPessoa(nome){
    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const larissa = new CriarPessoa('Larissa')
larissa.falar()
