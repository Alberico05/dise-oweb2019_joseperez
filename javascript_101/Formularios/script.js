// seleccionar los elementos.

var correo= document.querySelector("input#correo");
var contrasena= document.querySelector("input#contrasena");
var div= document.querySelector("div#contenido")
var inicial= document.querySelector("button#inicial")

console.log("correo");
console.log("contrasena");



//Agregarle el evento al elemento
correo.addEventListener("keyup", function(){
   div.textContent =correo.value;
});


//Agregarle el evento al elemento
correo.addEventListener("blur", function () {
    div.textContent = correo.value;
});


//Agregarle el evento al elemento
correo.addEventListener("focus", function () {
    div.textContent = correo.value;
});


// agregar el button de inicio

iniciar.addEventListener("click", function () {
    div.textContent = `Bienvenido ${correo.value}`;
});
