let valorprod = document.querySelector("#valorprod");
let valorpago = document.querySelector("#valorpago");
let btnreceber = document.querySelector("#btnreceber");
let troco = document.querySelector("#troco");
 
function somar (){
    let n1 = Number(valorprod.value)
    let n2 = Number(valorpago.value)
    let somar = n2 - n1;
    troco.textContent = String(somar)
}
btnreceber.onclick = function(){
    somar()
}