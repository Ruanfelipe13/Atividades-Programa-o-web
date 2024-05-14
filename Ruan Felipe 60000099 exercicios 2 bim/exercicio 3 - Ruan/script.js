let inpvalor = document.querySelector("#inpvalor");
let btnsoreajustemar = document.querySelector("#btnsomar");
let h3resultado = document.querySelector("#h3resultado");


function reajuste(){
     
    let reajuste = (Number(inpvalor.value)) /100 + Number(inpvalor.value); 
    h3resultado.textContent = reajuste
}
btnsoreajustemar.onclick = function(){
    reajuste()
}