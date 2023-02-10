// EXERCICIO MANIPULANDO STRINGS

// frase base
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

// trocando elementos
const trocaCores = frase.replace('verde', 'rosa').replace('azul', 'laranja')
console.log(trocaCores.toUpperCase()) // transfromando em letras maisculas sem influenciar no método includes()

// verificando se a string contém ...
const verificaCorVerde = 'A frase possui a cor verde?: ' + trocaCores.includes('verde')

console.log(verificaCorVerde)

const verificaCorLaranja = 'A frase possui a cor laranja?: ' + trocaCores.includes('laranja')

console.log(verificaCorLaranja)

