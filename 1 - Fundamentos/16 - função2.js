// Armazenando uma função dentro de uma váriavel
const somar = function (a , b){
    console.log(a + b)
}
somar(10, 20)

// Armazenando uma função ARROW em uma unica variável
const somar2 = (a, b) => {
    return a + b
}
console.log(somar2(9, 4))

// Resumindo uma função
const somar3 = (a, b) => a + b // Return implicito
console.log(somar3(1, 3))

const print = a => console.log(a) // Muito resumido
print('AAAAAAAA')