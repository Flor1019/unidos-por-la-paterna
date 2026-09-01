/* =================================
   MENÚ RESPONSIVE
================================= */

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("activo");

});


/* =================================
   CERRAR MENÚ AL SELECCIONAR
================================= */

const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(enlace => {

    enlace.addEventListener("click", () => {

        menu.classList.remove("activo");

    });

});


/* =================================
   MODAL DE PROYECTOS
================================= */

function mostrarProyecto(titulo, texto) {

    const modal = document.getElementById("modal");

    const modalTitulo =
        document.getElementById("modal-titulo");

    const modalTexto =
        document.getElementById("modal-texto");


    modalTitulo.textContent = titulo;

    modalTexto.textContent = texto;

    modal.classList.add("activo");
}


function cerrarProyecto() {

    const modal = document.getElementById("modal");

    modal.classList.remove("activo");

}


/* =================================
   CERRAR MODAL AL HACER CLICK FUERA
================================= */

const modal = document.getElementById("modal");

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        cerrarProyecto();

    }

});


/* =================================
   GALERÍA
================================= */

function abrirImagen(src) {

    const visor =
        document.getElementById("visor");

    const imagen =
        document.getElementById("imagen-grande");


    imagen.src = src;

    visor.classList.add("activo");

}


function cerrarImagen() {

    const visor =
        document.getElementById("visor");

    visor.classList.remove("activo");

}


/* =================================
   FORMULARIO
================================= */

const formulario =
    document.getElementById("formulario");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value;


    alert(
        "¡Gracias, " +
        nombre +
        "! Tu mensaje ha sido recibido."
    );


    formulario.reset();

});


/* =================================
   AÑO AUTOMÁTICO
================================= */

const anio =
    document.getElementById("anio");

anio.textContent =
    new Date().getFullYear();


/* =================================
   CERRAR VISOR CON ESC
================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarImagen();

        cerrarProyecto();

    }

});