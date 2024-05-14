let inpvalor1 = document.querySelector('#inpvalor1');
let inpvalor2 = document.querySelector('#inpvalor2');
let btnresultado = document.querySelector('#btnresultado');
let h3resultado = document.querySelector('#h3resultado');

function verificar(){
    let valor1 = Number(inpvalor1.value);   
    let valor2 = Number(inpvalor2.value);

    if(valor1>valor2){
        h3resultado.textContent=valor1 
    }else{
        h3resultado.textContent=valor2 
    }
}
btnresultado.onclick = function(){
    verificar()
}





