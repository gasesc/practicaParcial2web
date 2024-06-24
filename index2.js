const palabra=document.querySelector("#titulo");
let palabraAgregada=document.querySelector("#agregar")

function agregarPalabra(){
 const input=palabraAgregada.value;
 
 let span=document.createElement("span");
 span.textContent=input;
 palabra.appendChild(span);


}
palabraAgregada.addEventListener("keyup",agregarPalabra);

