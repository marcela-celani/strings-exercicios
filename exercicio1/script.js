// EXERCICIO MANIPULANDO STRINGS

// função que insere dados do usuário e cria frase
const comidasFavoritas = (nome, comida1, comida2, comida3) => {
    const string = (`
    Estas são as comidas favoritas de ${nome}:
    - ${comida1}
    - ${comida2}
    - ${comida3}
    `)

    console.log(string)

    // outra forma de escrever a função acima:
    /*const string = 'Estas são as comidas favoritas de ' + nome + ': \n 1-' + comida1 + '\n 2-' + comida2 + '\n 3-' + comida3 + '.'
    console.log('versao concatenada:', string)*/
}

// colhendo dados do usuário 
const nomeUser = prompt('Qual o seu nome? ')
const comidaUser1 = prompt('Qual a sua primeira comida favorita? ')
const comidaUser2 = prompt('Qual a sua segunda comida favorita? ')
const comidaUser3 = prompt('Qual a sua terceira comida favorita? ')

// chamando a função utilizando argumentos
comidasFavoritas(nomeUser, comidaUser1, comidaUser2, comidaUser3)