const fabricantes = ['Mercedes', 'Audi', 'Bmw']

function imprimir(elemento, index, array){
    console.log(`${elemento} . ${index} . ${array}`)
}

fabricantes.forEach(imprimir)
console.log('')
fabricantes.forEach(elemento => console.log(elemento))