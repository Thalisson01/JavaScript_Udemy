function teste1 (valor){
    if (valor >= 7)
        console.log(valor)
    console.log('final')
}

// teste1(6)
// teste1(8)

function teste2 (valor) {
    if (valor >= 7); { // Nunca coloque ; no final do IF
        console.log("valor")
    }
}

teste2(2)
teste2(8)