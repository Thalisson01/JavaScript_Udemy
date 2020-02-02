function compras(trabalho1, trabalho2){
    const comprarsorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 != trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarsorvete // Operador unitário

    return { comprarsorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(false, true))