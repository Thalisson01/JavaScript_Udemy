function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade += 1
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa
