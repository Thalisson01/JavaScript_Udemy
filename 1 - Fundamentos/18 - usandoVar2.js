// Var não tem escopo do dentro de blocos

var pos = 1
{
    var pos = 2
    console.log('dentro = ', pos)
}
console.log('fora = ', pos)