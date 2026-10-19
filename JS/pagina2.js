// Función: lee el nombre y lo muestra
function mostrarNombre() {
const nombre = localStorage.getItem("nombre"); // lee de la bodega
const ciudad = localStorage.getItem("ciudad");

if (nombre === null) {
        document.getElementById("saludo").textContent = "No hay ningún nombre guardado.";
    } else if (ciudad) {
        document.getElementById("saludo").textContent = "Hola, " + nombre + ", de " + ciudad;
    } else {
        document.getElementById("saludo").textContent = "Hola, " + nombre;
    }
}

// Función: borra el nombre y vuelve a mostrar el resultado
function borrar() {
localStorage.removeItem("nombre"); // borra de la bodega
mostrarNombre(); // actualiza el mensaje
}

function borrarTodo() {
localStorage.clear();
mostrarNombre();
}

// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre); // al cargar la página
document.getElementById("btn-borrar").addEventListener("click", borrar); // al hacer clic
document.getElementById("btn-borrar-todo").addEventListener("click", borrarTodo);