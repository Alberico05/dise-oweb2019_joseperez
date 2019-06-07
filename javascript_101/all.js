



//
// var hola = prompt("¿Hola, como estas?");
// var nombre = prompt("¿Cual es su nombre?");
// var ciudad = prompt("¿En que ciudad vives?");
// var edad = prompt("¿Cuantos años tienes?");
// var hobbies = prompt("¿Cual es tu hobbies?");
// var tienes = prompt("¿Cuantos tienes?");
// var años = prompt("¿Cuantos años tienes?");

//alert(hola);
//alert(nombre);
//alert(ciudad);
//alert(edad);
///alert(hobbies);

//onsole.log(hola);
//console.log(nombre);
//console.log(ciudad);
//console.log(edad);
//console.log(hobbies);

// document.write(hola);
// document.write(nombre);
// document.write(ciudad);
// document.write(edad);
// document.write(hobbies);



//console.log(`<p>Hola ${nombre} tienes ${edad}años</p>`)

//document.write(`<h1>Hola ${nombre} tienes ${edad}años</h1>`);

//alert(`<p>Hola ${nombre} tienes ${edad} años</p>`);


//var edadDeMiPadre = "56 años";
//document.write(edadDeMiPadre);

//----------------------------------------------------------


//Seleccionar  la etiqueta
var titulo1 = document.querySelector("h1");
// console.log(titulo1);


//registrar el evento al elemento

titulo1.addEventListener("click", function(){
    open("https://codepen.io/Perez05/pen/XwLOLW?editors=1010");
});


/* Seleccionar el elemento*/

var parrafosMostrar = document.querySelector("p#mostrar");
var divContenido = document.querySelector("#contenido");


console.log("divContenido");

//registrar el evento al elemento

parrafosMostrar.addEventListener("click", function () {
   divContenido.style.display =  alert("Hola mundo"); 
    divContenido.style.display =  console.log("Hola mundo");
    divContenido.style.display = document.write("hey klk");
        divContenido.style.display = prompt("25846");
divContenido.textContent =nombre;
});











