let inpCodigoprod = document.querySelector("#inpCodigoprod");
let btnpesquisa = document.querySelector("#btnpesquisa");
let h2descricaoprod = document.querySelector("#h2descricaoprod");

function fncPesquisaprod(){
    let pesquisa = (inpCodigoprod.value);

    if(pesquisa==="001"){
        h2descricaoprod.textContent = "Parafuso";
    } else if(pesquisa==="002"){
        h2descricaoprod.textContent = "Porca";
    } else if(pesquisa==="003"){
        h2descricaoprod.textContent = "Prego";
    }else{
        h2descricaoprod.textContent = "Produtos Diversos";
    }
}
btnpesquisa.onclick = function(){
    fncPesquisaprod()
}