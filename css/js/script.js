/* =========================================
   UNIDOS POR LA PATERNA
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MENÚ MÓVIL
    ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("activo");
        });

        const enlaces = nav.querySelectorAll("a");

        enlaces.forEach(function (enlace) {

            enlace.addEventListener("click", function () {
                nav.classList.remove("activo");
            });

        });
    }


    /* =========================================
       CARRUSEL DE FONDO
    ========================================= */

    const fondo1 = document.querySelector(".hero-fondo-1");
    const fondo2 = document.querySelector(".hero-fondo-2");

    const indicadores = document.querySelectorAll(".indicador");


    /* =========================================
       IMÁGENES DEL CARRUSEL
       
       IMPORTANTE:
       Estas imágenes están directamente
       dentro de la carpeta UNIDOS.
    ========================================= */

    const imagenes = [
        "fondo.jpg",
        "fondo2.jpg",
        "fondo3.jpg",
        "fondo4.jpeg",
        "fondo5.jpeg"
    ];


    let indiceActual = 0;

    let fondoVisible = 1;

    let intervalo;


    /* =========================================
       COMPROBAR Y CARGAR IMÁGENES
    ========================================= */

    imagenes.forEach(function (ruta) {

        const imagen = new Image();

        imagen.src = ruta;

        imagen.onload = function () {
            console.log("Imagen cargada correctamente:", ruta);
        };

        imagen.onerror = function () {
            console.error("No se pudo cargar la imagen:", ruta);
        };

    });


    /* =========================================
       MOSTRAR PRIMERA IMAGEN
    ========================================= */

    if (fondo1) {

        fondo1.style.backgroundImage =
            `url("${imagenes[0]}")`;

        fondo1.style.opacity = "1";

    }


    if (fondo2) {

        fondo2.style.backgroundImage =
            `url("${imagenes[1]}")`;

        fondo2.style.opacity = "0";

    }


    /* =========================================
       ACTUALIZAR INDICADORES
    ========================================= */

    function actualizarIndicadores() {

        indicadores.forEach(function (boton, indice) {

            if (indice === indiceActual) {

                boton.classList.add("activo");

            } else {

                boton.classList.remove("activo");

            }

        });

    }


    /* =========================================
       CAMBIAR IMAGEN
    ========================================= */

    function cambiarImagen(nuevoIndice) {

        if (nuevoIndice < 0) {
            nuevoIndice = imagenes.length - 1;
        }

        if (nuevoIndice >= imagenes.length) {
            nuevoIndice = 0;
        }


        /* No hacer nada si es la misma imagen */

        if (nuevoIndice === indiceActual) {
            return;
        }


        /* =====================================
           SI EL FONDO 1 ESTÁ VISIBLE
        ===================================== */

        if (fondoVisible === 1) {

            fondo2.style.backgroundImage =
                `url("${imagenes[nuevoIndice]}")`;

            fondo2.style.opacity = "1";

            fondo1.style.opacity = "0";

            fondoVisible = 2;

        }


        /* =====================================
           SI EL FONDO 2 ESTÁ VISIBLE
        ===================================== */

        else {

            fondo1.style.backgroundImage =
                `url("${imagenes[nuevoIndice]}")`;

            fondo1.style.opacity = "1";

            fondo2.style.opacity = "0";

            fondoVisible = 1;

        }


        /* Guardar imagen actual */

        indiceActual = nuevoIndice;


        /* Actualizar los puntos */

        actualizarIndicadores();

    }


    /* =========================================
       BOTONES / PUNTOS DEL CARRUSEL
    ========================================= */

    indicadores.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const nuevoIndice =
                parseInt(
                    boton.getAttribute("data-indice")
                );

            cambiarImagen(nuevoIndice);

            reiniciarCarrusel();

        });

    });


    /* =========================================
       CARRUSEL AUTOMÁTICO
    ========================================= */

    function iniciarCarrusel() {

        intervalo = setInterval(function () {

            let siguiente =
                indiceActual + 1;


            if (siguiente >= imagenes.length) {

                siguiente = 0;

            }


            cambiarImagen(siguiente);

        }, 5000);

    }


    /* =========================================
       REINICIAR CARRUSEL
    ========================================= */

    function reiniciarCarrusel() {

        clearInterval(intervalo);

        iniciarCarrusel();

    }


    /* =========================================
       INICIAR CARRUSEL
    ========================================= */

    iniciarCarrusel();


    /* =========================================
       MODAL DE PROYECTOS
    ========================================= */

    window.mostrarProyecto = function (tipo) {

        const modal =
            document.getElementById("modalProyecto");

        const titulo =
            document.getElementById("modalTitulo");

        const texto =
            document.getElementById("modalTexto");


        if (!modal || !titulo || !texto) {
            return;
        }


        const proyectos = {

            calles: {
                titulo: "Mejoramiento de calles",
                texto:
                    "Apoyamos iniciativas destinadas a reparar y mejorar las calles de nuestra comunidad, buscando contribuir a mejores condiciones para las familias de La Paterna."
            },

            capilla: {
                titulo: "Apoyo a la capilla",
                texto:
                    "Colaboramos con diferentes necesidades y mejoras de nuestra capilla, manteniendo vivo un espacio importante para la comunidad."
            },

            escuela: {
                titulo: "Apoyo a la escuela",
                texto:
                    "Buscamos contribuir a proyectos que permitan mejorar las condiciones de los estudiantes y apoyar las necesidades de nuestra escuela."
            },

            campo: {
                titulo: "Mejoramiento del campo",
                texto:
                    "Apoyamos iniciativas para mejorar los espacios deportivos y fomentar la convivencia entre los habitantes de nuestra comunidad."
            }

        };


        const proyecto =
            proyectos[tipo];


        if (proyecto) {

            titulo.textContent =
                proyecto.titulo;

            texto.textContent =
                proyecto.texto;

            modal.classList.add("activo");

        }

    };


    /* =========================================
       CERRAR MODAL
    ========================================= */

    window.cerrarModal = function () {

        const modal =
            document.getElementById("modalProyecto");

        if (modal) {
            modal.classList.remove("activo");
        }

    };


    /* =========================================
       VISOR DE IMÁGENES
    ========================================= */

    window.abrirImagen = function (ruta) {

        const visor =
            document.getElementById("visorImagen");

        const imagen =
            document.getElementById("imagenGrande");


        if (!visor || !imagen) {
            return;
        }


        imagen.src = ruta;

        visor.classList.add("activo");

    };


    /* =========================================
       CERRAR VISOR
    ========================================= */

    window.cerrarImagen = function () {

        const visor =
            document.getElementById("visorImagen");

        const imagen =
            document.getElementById("imagenGrande");


        if (visor) {
            visor.classList.remove("activo");
        }


        if (imagen) {
            imagen.src = "";
        }

    };


    /* =========================================
       FORMULARIO
    ========================================= */

    const formulario =
        document.getElementById("formulario");


    if (formulario) {

        formulario.addEventListener(
            "submit",
            function (evento) {

                evento.preventDefault();


                const nombre =
                    document.getElementById("nombre").value;


                alert(
                    "Gracias, " +
                    nombre +
                    ". Tu mensaje ha sido recibido."
                );


                formulario.reset();

            }
        );

    }


    /* =========================================
       AÑO DEL FOOTER
    ========================================= */

    const año =
        document.getElementById("año");


    if (año) {

        año.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       CERRAR CON ESC
    ========================================= */

    document.addEventListener(
        "keydown",
        function (evento) {

            if (evento.key === "Escape") {

                cerrarModal();

                cerrarImagen();

            }

        }
    );


    /* =========================================
       CERRAR MODAL AL HACER CLIC AFUERA
    ========================================= */

    const modal =
        document.getElementById("modalProyecto");


    if (modal) {

        modal.addEventListener(
            "click",
            function (evento) {

                if (evento.target === modal) {

                    cerrarModal();

                }

            }
        );

    }


    const visor =
        document.getElementById("visorImagen");


    if (visor) {

        visor.addEventListener(
            "click",
            function (evento) {

                if (evento.target === visor) {

                    cerrarImagen();

                }

            }
        );

    }

});