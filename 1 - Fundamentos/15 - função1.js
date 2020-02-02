// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 20, 30)
imprimirSoma()

// Função com retorno
function soma(a = 0, b = 0){ // Se não passar nada o valor definido é 0
    return a + b
}

console.log(soma(1, 8))