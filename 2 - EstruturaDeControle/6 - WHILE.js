function gerIntAl(min, max){
    let aleatorio = Math.random() * (max - min) + min
    return Math.floor(aleatorio)
}

let opcao = 0

while (opcao != -1){
    opcao = gerIntAl(-1, 10)
    console.log(opcao)
}

console.log('Até a próxima')