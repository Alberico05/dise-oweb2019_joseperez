/*selecionar el parrafo*/

var mi_parrafo = document.querySelector("p");

console.log(mi_parrafo);
console.log(mi_parrafo.id);
console.log(mi_parrafo.name);
console.log(mi_parrafo.tagName);
console.log(mi_parrafo.textContent);
console.log(mi_parrafo.innerHTML);
console.log(mi_parrafo.style);

//Cambiar ciertas propiedades

mi_parrafo.textContent = "Hola mundo";
mi_parrafo.id = "nuevo";


