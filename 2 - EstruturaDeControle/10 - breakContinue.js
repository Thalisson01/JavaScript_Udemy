const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usanddo o break
for (let i in array){
    if (i == 5){
        break
    }
    console.log(`i = ${i}, valor = ${array[i]}`)
}

console.log()

// Usando continue
for (let i in array){
    if (i == 5){
        continue
    }
    console.log(`i = ${i}, valor = ${array[i]}`)
}

console.log()

// Nomeando um for -- Evitar fazer isso
externo: for (let i in array){
    for (let j in array){
        if (i == 2 && j == 3) break externo
        console.log(`Par = ${i}, ${j}`)
    }
}