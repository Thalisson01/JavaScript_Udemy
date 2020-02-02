// 1ª Forma
let dobro = function (a) {
    return 2 * a
}
console.log(dobro(4))

// 2ª Forma
dobro = (a) => {
    return 2 * a
}
console.log(dobro(4))

// 3ª Forma
dobro = a => 2 * a // Return implicito
console.log(dobro(4))

// 4ª Forma
let ola = function (){
    return 'Olá'
}
console.log(ola())

ola = () => 'Olá'
console.log(ola())
