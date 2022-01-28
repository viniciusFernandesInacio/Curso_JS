function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'hCriança.jpg')
            } else if (idade < 21) {
                //joven
                img.setAttribute('src', 'hJovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'hAdulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'hIdoso.jpg')
            }
        }else if (fsex [1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mCriança.jpg')
            } else if (idade < 21) {
                //joven
                img.setAttribute('src', 'mJovem.jpg')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'mAdulta.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'mIdosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}