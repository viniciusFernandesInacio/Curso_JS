var hora = 2
console.log (`Agora são exatamente ${hora} horas`)
if (hora <= 12 && hora > 5) {
    console.log('Bom dia!')
}else if (hora <= 18) {
    console.log('Boa tarde!')
}else if (hora <= 5){
    console.log ('Boa Madrugada!')
}else {
    console.log('Boa noite!')
}