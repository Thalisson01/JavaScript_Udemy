const notas = [1, 2, 3, 4, 5, 8, 7, 9]

// Sem callback
let notasbaixas = []
for (let i in notas){
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas)

// Com callback
notasbaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasbaixas2)

// Com callback desenvolvido por mim
function filtro(notas){
    return notas < 7
}
notasbaixas3 = notas.filter(filtro)
console.log(notasbaixas3)
