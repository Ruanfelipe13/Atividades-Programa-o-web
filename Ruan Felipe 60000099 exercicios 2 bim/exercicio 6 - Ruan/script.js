let inpvalor1 = document.querySelector('#inpvalor1');
let inpvalor2 = document.querySelector('#inpvalor2');
let inpvalor3 = document.querySelector('#inpvalor3');
let inpvalor4 = document.querySelector('#inpvalor4');
let btnresultado = document.querySelector('#btnresultado');
let h3resultado = document.querySelector('#h3resultado');

function verificar() {
    let valor1 = Number(inpvalor1.value);   
    let valor2 = Number(inpvalor2.value);
    let valor3 = Number(inpvalor3.value);
    let valor4 = Number(inpvalor4.value);

    let menorValor = valor1;

    if (valor2 < menorValor) {
        menorValor = valor2;
    }
    if (valor3 < menorValor) {
        menorValor = valor3;
    }
    if (valor4 < menorValor) {
        menorValor = valor4;
    }

    h3resultado.textContent = menorValor;
}

btnresultado.onclick = function() {
    verificar();
}
