var idade = 22
console.log (`Você tem ${idade} anos de idade.`)
if (idade < 16) {
    console.log('Menos de idade')
} else if (idade < 18 || idade > 65){
    console.log('Voto opicional')
} else if (idade > 18) {
    console.log ('Voto obrigatorio')
}
