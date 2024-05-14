let valormultiplicado = document.querySelector("#valormultiplicado");
let valormultiplicador = document.querySelector("#valormultiplicador");
let btnmultiplicar = document.querySelector("#btnmultiplicar");
let Resultado = document.querySelector("#Resultado");

function  Multiplicar(){
    let Multiplicar = parseFloat(valormultiplicado.value) * parseFloat(valormultiplicador.value);
        Resultado.textContent = String(Multiplicar)
}

btnmultiplicar.onclick = function(){
    Multiplicar()
} 