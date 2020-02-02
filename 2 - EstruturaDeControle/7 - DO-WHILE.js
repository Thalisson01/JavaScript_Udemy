function gerIntAl(min, max){
    let aleatorio = Math.random() * (max - min) + min
    return Math.floor(aleatorio)
}

let opcao = 0

do {
    opcao = gerIntAl(-1, 10)
    console.log(opcao)
} while (opcao != -1)

console.log('Até a próxima')