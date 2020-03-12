//alert('Olá')
function contar(){
    //alert('Olá')
    var ini = document.getElementById('Nini').value;
    var fim = document.getElementById('Nfim').value;
    var pas = document.getElementById('Npas').value;
    var d2v = document.getElementById('cont');
    d2v.innerHTML = ``; 
    ini = Number (ini);
    fim = Number (fim);
    pas = Number (pas);
    if (pas == 0){
        alert('O passo não pode ser 0. Considerando o passo 1')
        pas = 1;
    }
    if( typeof ini == "number" && typeof fim == "number" && typeof pas == "number" )
    {
        for (var i = ini; i<= fim ; i+=pas){
            d2v.innerHTML += ` ⏩${i} `;
            }
        d2v.innerHTML +=`⏹️`;
        }else {
            alert('Você Digitou Algum Dado errado, Tente Novamente.')
        }    
}