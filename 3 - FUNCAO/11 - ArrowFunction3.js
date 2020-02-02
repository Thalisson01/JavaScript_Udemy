let compararComThis = function (param) {
    console.log(this === param)
}
compararComThis(global)


const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)


// Arrow sempre aponta para onde ela foi definida
let compararComThisArrow = param => console.log(param === this)
compararComThisArrow(global)
compararComThisArrow(this)

// Testando a afirmação acima
// Arrow nunca muda, sempre vai manter onde ela foi definida
compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj)
compararComThisArrow(this)
compararComThisArrow(module.exports)