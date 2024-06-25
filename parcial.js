const sumar =document.querySelector("#sumar")
const restar =document.querySelector("#restar")
const multiplicar =document.querySelector("#multiplicar")
const dividir =document.querySelector("#dividir")
const numeros=document.querySelector("#numeros");
let numero=null;
function enviarDatos(){
    numero=numeros.value;
}

function afirmarSumar(e){
    e.preventDefault();
    if(numero!==null){
        localStorage.setItem("cantidad",JSON.stringify(numero))
        window.location.href=e.target.href;
    }else{
        alert("digite por favor un numero");
    }
}
numeros.addEventListener("input",enviarDatos)
sumar.addEventListener("click",afirmarSumar)
restar.addEventListener("click",afirmarSumar)
multiplicar.addEventListener("click",afirmarSumar)
dividir.addEventListener("click",afirmarSumar)
// document.getElementById("myButton").addEventListener("click", function() {
//     window.location.href = 'https://example.com';
// });