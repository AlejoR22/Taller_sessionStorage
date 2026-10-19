// Función: guarda el nombre y cambia de página
function guardar() {
const nombre = document.getElementById("nombre").value;
const ciudad = document.getElementById("ciudad").value;

if (nombre === "") {
        document.getElementById("mensaje").textContent = "Por favor, escribe tu nombre.";
    } else {
        localStorage.setItem("nombre", nombre); // guarda en la bodega
        localStorage.setItem("ciudad", ciudad);
        window.location.href = "pagina2.html"; // cambia de página
    }
}
// Evento: al hacer clic en el botón, se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);