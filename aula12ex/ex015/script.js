function verificar(){
    //window.alert ('VERIFICOU');
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert ('ERROR - Verifique os dados novamente');
    }else{
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var gen = '';

        var img = document.createElement ('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
               
            }else if (idade < 65){
                // Adulto
                 img.setAttribute('src', 'foto-adulto-m.png')
            }else if (idade < 130){
                 // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }else{
                 window.alert (`Você realmente em ${idade} anos ?`)
            }



        }else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
               
            }else if (idade < 65){
                // Adulto
                 img.setAttribute('src', 'foto-adulto-f.png')
            }else if (idade < 130){
                 // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }else{
                 window.alert (`Você realmente em ${idade} anos ?`)
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${gen} com ${idade} anos.`
        res.appendChild(img)

    }

}