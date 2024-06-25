const palabra=document.querySelector("#titulo");
let continuidad=document.querySelector("#textoAgregado")
let textoInput=document.querySelector("#agregar")
let color=document.getElementsByName("color");
let fondoInput =document.querySelector("#fondo");
let fondo=document.querySelector(".parte1")

function agregarPalabra(){
 continuidad.textContent=textoInput.value;
}

function cambiarColorTexto(){
    let inputSeleccionado;
    for( const elegido of color){
        if(elegido.checked){
            inputSeleccionado=elegido.value;
            break;
        }
    }
    if(inputSeleccionado==="1"){
        palabra.classList.remove("rojo");
        palabra.classList.remove("verde")
        palabra.classList.add("azul")
    }
    else if(inputSeleccionado==="2"){
        palabra.classList.remove("azul");
        palabra.classList.remove("verde")
        palabra.classList.add("rojo")
    }
    else if(inputSeleccionado==="3"){
        palabra.classList.remove("azul");
        palabra.classList.remove("rojo")
        palabra.classList.add("verde")
    }
    

}
function cambiarFondo(){
    fondo.classList.remove("crema","gris","amarillo");
   if(fondoInput.value==="1"){
    fondo.classList.add("crema")
        
   } 
   else if(fondoInput.value==="2"){
    fondo.classList.add("gris")
   }
   else if(fondoInput.value==="3") {
    fondo.classList.add("amarillo")
   }   
}
cambiarFondo();
textoInput.addEventListener("keyup",agregarPalabra);
for (const radio of color) {
    radio.addEventListener("change", cambiarColorTexto);
}
fondoInput.addEventListener("change",cambiarFondo)