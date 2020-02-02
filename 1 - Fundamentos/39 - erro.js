function tratarErro(erro) {
    throw new Erro('...')
    //throw 10
    //throw true
    //throw 'Mensage'
    /*
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new date
    }
    */
}

function gritarNome(obj) {
    try { // Executa
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (erro) { // Se ocorrer erro vai fazer isso
        tratarErro(erro)
    } finally { // Idependente se ocorrer erro ou não vai fazer isso
        console.log('Final.')
    }
}

gritarNome( { name: 'thalisson' } )