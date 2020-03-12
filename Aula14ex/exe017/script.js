
function tabuada(){
    //alert('Entrou Aqui')
    var N = document.getElementById('Nmult').value ;
    // Diferenciar entre FLOAT e INT
    var Tabe  = document.getElementById('tabela');
    //alert(`N é : ${N} `)
    Tabe.innerHTML = ``;
    // Ser uma tabelinha
    for (var i=0; i<11; i++){

        Tabe.innerHTML += `${N} X ${i} = ${N*i} <p>`
        
    }
}