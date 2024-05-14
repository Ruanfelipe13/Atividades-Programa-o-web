let inpvalor1 = document.querySelector("#inpvalor1");
let inpvalor2 = document.querySelector("#inpvalor2");
let inpvalor3 = document.querySelector("#inpvalor3");
let btnsomar = document.querySelector("#btnsomar");
let pMediaartmetica = document.querySelector("#pMediaartmetica");
let pMediaponderada = document.querySelector("#pMediaponderada");
let pSomadasduasmedias = document.querySelector("#pSomadasduasmedias");
let pMediadasmedias = document.querySelector("#pMediadasmedias");

function somar (){
    let fncMediaartmetica = (Number(inpvalor1.value) + Number(inpvalor2.value) + Number(inpvalor3.value)) /3  ;
        pMediaartmetica.textContent = fncMediaartmetica;

    let fncMediaponderada = ((( 3 * Number(inpvalor1.value))  + (2 * Number(inpvalor2.value))  + (5 * Number(inpvalor3.value))) / 10 );
        pMediaponderada.textContent = fncMediaponderada;

    let fncSomadasduasmedias = Number(fncMediaartmetica) + Number(fncMediaponderada);
        pSomadasduasmedias.textContent = fncSomadasduasmedias;

    let fncMediadasmedias = fncSomadasduasmedias /2;
        pMediadasmedias.textContent = fncMediadasmedias;
}
btnsomar.onclick = function (){
    somar()
}