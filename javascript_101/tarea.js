//hacer un script que el usuario haga click sobre un div y aparezca un mensaje diciendo “Hola a todos”.
//Hacer un script que se haga click en un parrafo y le cambie el contenido por “contenido cambiado”.
//Hacer un script que se haga click en un span Muestre un prompt para que el usuario digite su nombre, edad y telefono.Se debe mostrar esa informacion por la consola.
//Hacer un script que el usuario haga doble click sobre un h1 y se muestre el contenido del h1 en un alert.
//Hacer un script que el usuario pase el mouse por encima de un enlace y le cambie el color y fondo.




//punto1

var holaTodos= document.queryselector("div");

saludo.addEventListener("click", function () {
    alert("Hola a todos");
});

//punto2

var parrafo = document.querySelector("p");

parrafo.addEventListener("click", function () {
    var texto = "Contenido cambiado";
    parrafo.textContent = texto;
});

//punto3

var jpm = document.querySelector("spanJose");

jpm.addEventListener("click", function(){
    var punto1= prompt("Digite su nombre");
    var punto2 = prompt("digite su edad");
    var punto3 = prompt("Digite su telefono");
    var jpm = punto1 + " " + punto2 + " " + punto3;
})