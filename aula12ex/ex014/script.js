function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20;
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora>=0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#F4A460'
    }else if (hora >=12 && hora <18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#4682B4'
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#4B0082'
    }
}

