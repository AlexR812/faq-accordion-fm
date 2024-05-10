const boton1 = document.querySelector("#btn-1");
const question1 = document.querySelector("#q-1");

boton1.addEventListener("click", mostrarPestania)

const mensaje = document.createElement("P");
function mostrarPestania(e) {
    e.preventDefault();

    if(question1.childElementCount == 0) {
        mensaje.classList.add("mensaje");
        mensaje.textContent = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
        question1.appendChild(mensaje);
      
    } else {
        borrar(question1.childElementCount);
    }
}

function borrar(n = 0) {
    if(n == 1) {
        mensaje.remove();
    }
}