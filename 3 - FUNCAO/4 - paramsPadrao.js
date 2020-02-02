// Muito antigo
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    console.log(a, b, c)
}
soma3(70, 80, 90)

// Gerar um valor padrão -- Moda antiga
function soma(a, b, c) {
    a = a != undefined ? a : 1 // Verifica se a foi passado
    b = 1 in arguments ? b : 1 // Verifica se o indice 1 foi passado, no caso a letra b
    c = isNaN(c) ? 1 : c // Verifica se o que foi passado é um número -- Melhor para usar
    
    console.log(a, b, c)
}

soma(0, 10, 20)

// Gerar um valor padrão do  es2015
function soma3(a = 1, b = 1, c = 1){

    console.log(a, b, c)
}

soma3(40, 50, 60)