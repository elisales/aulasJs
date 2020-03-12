let num = [5, 1, 2, 9, 3]

console.log (`O vetor tem ${num.length} posições`)

console.log (` O vetor possui os elementos: ${num}`)

num.sort() // Para organizar basta usar o comando .sort()
console.log (` Organizados são: ${num}`)

num.push(99) // Para acrescentar uma posição e o elemento entre parênteses.
console.log (` Usando o .push ${num}`)

// For para Array e Objeto

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Pesquisa valor no array
console.log (`O valor 5 está na posição ${num.indexOf(5)}`)
