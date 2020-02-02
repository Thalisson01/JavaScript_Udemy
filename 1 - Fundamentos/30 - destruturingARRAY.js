const [a] = [10]
console.log(a)

const [a1, a2, , a4, a5, a6 = 0] = [0, 1, 5, 4]
console.log(a1, a2, a4, a5, a6)

const [, [, nota]] = [[1,2,3], [6,5,9]]
console.log(nota)