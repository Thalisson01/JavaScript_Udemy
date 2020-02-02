const array = [528, 4514, 45, 54, 4154]

for (let i in array){
    console.log(`i = ${i}, valor = ${array[i]}`)
}

const doc = {
    nome: 'Ana',
    idade: 14
}

for (let atributo in doc){
    console.log(`${atributo}: ${doc[atributo]}`)
}