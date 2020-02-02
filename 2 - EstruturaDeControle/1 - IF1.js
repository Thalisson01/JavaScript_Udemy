function boaNota(nota){
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

boaNota(5)
boaNota(8.2)

function verdade(valor){
    if (valor){
        console.log('Só falo VERDADES!... ' + valor)
    }
}

verdade()
verdade('')
verdade(null)
verdade(undefined)
verdade(0)
verdade(' ')
verdade('?')
verdade({})
verdade([])
verdade(1)
verdade([1, 2])
verdade({ nome: 'Thalisson'} )
