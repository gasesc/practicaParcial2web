const numerosRecibidos = parseInt(localStorage.getItem("cantidad"));
const body =document.querySelector("#cuerpo");
function cargarDom(){
    for( let i=0;i<numerosRecibidos;i++){
        let input=document.createElement("input")
        let label=document.createElement("label")
        input.type="number";
        body.appendChild(input);
        body.appendChild(label);
        console.log("hola");
    }
}
cargarDom();
console.log("hola")