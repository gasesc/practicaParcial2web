const resultante=document.querySelector("#resultante");
const contenedorResultado=document.querySelector("#resultado");
const uno=document.querySelector("#uno");
const dos=document.querySelector("#dos")
let valor1=0;
let valor2=0;
let resultado;

function sumar(e){
   
    resultado=parseInt(uno.value)+parseInt(dos.value);
    resultante.textContent=resultado;
    if(resultado>5){
        resultante.classList.remove("azul");
        resultante.classList.add("rojo");
    }else{
        resultante.classList.remove("rojo");
        resultante.classList.add("azul")
    }
}

uno.addEventListener("change",sumar);
dos.addEventListener("change",sumar);
