// EXERCICIO MANIPULANDO STRINGS

// frase base
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

// função remover espaços
const retirarEspaco = (string) => {
    const trimmedString = string.trim()
    return trimmedString
}

// guardando função em variavel e chamando o return
const trimmedString = retirarEspaco(minhaString)
console.log(trimmedString)

// utilizando propriedade length
console.log('Quantidade de caracteres antes: ', (minhaString.length))
console.log('Quantidade de caracteres depois: ', (trimmedString.length))

// substituiçao
const substituicao = trimmedString.replaceAll('________', 'sticioso')
console.log(substituicao)