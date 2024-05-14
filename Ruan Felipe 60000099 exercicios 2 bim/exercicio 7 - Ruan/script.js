let inpvalor = document.querySelector('#inpvalor');
let btnverificar = document.querySelector('#btnverificar');
let h3Resultado = document.querySelector('#h3Resultado');

function verificar() {
    let Valor = Number(inpvalor.value) % 2;

    if (Valor == 0) {
        alert("PAR")
    } else {
        alert("INPAR")
    }
}
btnverificar.onclick = function () {
    verificar()
}
