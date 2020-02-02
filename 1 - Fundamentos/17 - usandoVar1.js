// Var não tem escopo do dentro de blocos
{
    {
        {
            var que = 'Que'
            console.log(que)
        }
    }
}
console.log(que)

function teste(){
    var que2 = 'Que2' // Declarada apenas dentro do escopo teste
    console.log(que2)
}
teste()
//console.log(que2) // Vai gerar um erro pois VAR está apenas dentro do escopo da função teste