document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================
           MENÚ MÓVIL
        ========================== */

        const menuBtn =
            document.querySelector(".menu-btn");

        const nav =
            document.querySelector(".nav");


        if (menuBtn && nav) {

            menuBtn.addEventListener(
                "click",
                function () {

                    nav.classList.toggle(
                        "activo"
                    );

                }
            );


            nav.querySelectorAll("a").forEach(
                function (enlace) {

                    enlace.addEventListener(
                        "click",
                        function () {

                            nav.classList.remove(
                                "activo"
                            );

                        }
                    );

                }
            );

        }



        /* =========================
           CARRUSEL
        ========================== */

        const slides =
            document.querySelectorAll(
                ".hero-slide"
            );

        const botones =
            document.querySelectorAll(
                ".slider-btn"
            );


        let slideActual = 0;

        let intervalo;


        function mostrarSlide(indice) {

            if (slides.length === 0) {
                return;
            }


            slides.forEach(
                function (slide) {

                    slide.classList.remove(
                        "activo"
                    );

                }
            );


            botones.forEach(
                function (boton) {

                    boton.classList.remove(
                        "activo"
                    );

                }
            );


            slides[indice].classList.add(
                "activo"
            );


            if (botones[indice]) {

                botones[indice].classList.add(
                    "activo"
                );

            }


            slideActual = indice;

        }


        function siguienteSlide() {

            let siguiente =
                slideActual + 1;


            if (
                siguiente >= slides.length
            ) {

                siguiente = 0;

            }


            mostrarSlide(siguiente);

        }


        function iniciarCarrusel() {

            intervalo =
                setInterval(
                    siguienteSlide,
                    5000
                );

        }


        function reiniciarCarrusel() {

            clearInterval(intervalo);

            iniciarCarrusel();

        }


        botones.forEach(
            function (boton, indice) {

                boton.addEventListener(
                    "click",
                    function () {

                        mostrarSlide(indice);

                        reiniciarCarrusel();

                    }
                );

            }
        );


        mostrarSlide(0);

        iniciarCarrusel();



        /* =========================
           GALERÍA
        ========================== */

        window.abrirImagen =
            function (ruta) {

                const visor =
                    document.getElementById(
                        "visor"
                    );

                const imagen =
                    document.getElementById(
                        "imagenGrande"
                    );


                if (!visor || !imagen) {
                    return;
                }


                imagen.src = ruta;

                visor.classList.add(
                    "activo"
                );

            };


        window.cerrarImagen =
            function () {

                const visor =
                    document.getElementById(
                        "visor"
                    );

                const imagen =
                    document.getElementById(
                        "imagenGrande"
                    );


                if (visor) {

                    visor.classList.remove(
                        "activo"
                    );

                }


                if (imagen) {

                    imagen.src = "";

                }

            };



        /* =========================
           FORMULARIO
        ========================== */

        const formulario =
            document.getElementById(
                "formulario"
            );


        if (formulario) {

            formulario.addEventListener(
                "submit",
                function (evento) {

                    evento.preventDefault();


                    const nombre =
                        document.getElementById(
                            "nombre"
                        ).value;


                    alert(
                        "Gracias, " +
                        nombre +
                        ". Tu mensaje ha sido recibido."
                    );


                    formulario.reset();

                }
            );

        }



        /* =========================
           AÑO
        ========================== */

        const año =
            document.getElementById(
                "año"
            );


        if (año) {

            año.textContent =
                new Date().getFullYear();

        }



        /* =========================
           ESC PARA CERRAR GALERÍA
        ========================== */

        document.addEventListener(
            "keydown",
            function (evento) {

                if (
                    evento.key === "Escape"
                ) {

                    cerrarImagen();

                }

            }
        );



        /* =========================
           CERRAR GALERÍA
           AL HACER CLIC AFUERA
        ========================== */

        const visor =
            document.getElementById(
                "visor"
            );


        if (visor) {

            visor.addEventListener(
                "click",
                function (evento) {

                    if (
                        evento.target === visor
                    ) {

                        cerrarImagen();

                    }

                }
            );

        }

    }
);