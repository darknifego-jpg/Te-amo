/* =========================================
   CONFIGURACIÓN
========================================= */

// IMPORTANTE:
// Cambia esta fecha por el día en que empezaron.
// Formato: AÑO, MES - 1, DÍA
//
// Ejemplo:
// Agosto = 7
//
// new Date(2026, 7, 12)

const fechaInicio = new Date(2024, 9, 30);


/* =========================================
   CONTADOR
========================================= */

function actualizarContador() {

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    const segundos = Math.floor(diferencia / 1000);

    const minutos = Math.floor(segundos / 60);

    const horas = Math.floor(minutos / 60);

    const dias = Math.floor(horas / 24);

    const meses = Math.floor(dias / 30.44);

    const años = Math.floor(dias / 365.25);

    const contador = document.getElementById("contador");

    contador.innerHTML = `
        ❤️ <strong>${años}</strong> años,
        <strong>${meses % 12}</strong> meses,
        <strong>${dias % 30}</strong> días,
        <strong>${horas % 24}</strong> horas,
        <strong>${minutos % 60}</strong> minutos
        y <strong>${segundos % 60}</strong> segundos
        juntos.
    `;
}

actualizarContador();

setInterval(actualizarContador, 1000);


/* =========================================
   BOTÓN SIII
========================================= */

const siBtn = document.getElementById("siBtn");

siBtn.addEventListener("click", function () {

    // Mostrar mensaje
    document.getElementById("mensajeFinal").classList.add("mostrar");

    // Crear muchos corazones
    for (let i = 0; i < 40; i++) {
        crearCorazon();
    }

});


/* =========================================
   CORAZONES
========================================= */

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    const corazones = ["❤️", "💗", "💕", "💖", "💘"];

    corazon.innerHTML =
        corazones[Math.floor(Math.random() * corazones.length)];

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    corazon.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}


/* =========================================
   BOTÓN NOOO
========================================= */

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", escapar);

noBtn.addEventListener("touchstart", escapar);

function escapar() {

    const ancho =
        window.innerWidth - noBtn.offsetWidth - 20;

    const alto =
        window.innerHeight - noBtn.offsetHeight - 20;

    const nuevaX =
        Math.random() * ancho;

    const nuevaY =
        Math.random() * alto;

    noBtn.style.position = "fixed";

    noBtn.style.left = nuevaX + "px";

    noBtn.style.top = nuevaY + "px";
}


/* =========================================
   MENSAJE FINAL
========================================= */

const cerrarMensaje =
    document.getElementById("cerrarMensaje");

cerrarMensaje.addEventListener("click", function () {

    document
        .getElementById("mensajeFinal")
        .classList.remove("mostrar");

});


/* =========================================
   MÚSICA
========================================= */

const musicaBtn =
    document.getElementById("musicaBtn");

const audio =
    document.getElementById("audio");

musicaBtn.addEventListener("click", function () {

    if (audio.paused) {

        audio.play();

        musicaBtn.innerHTML =
            "⏸️ Pausar nuestra canción";

    } else {

        audio.pause();

        musicaBtn.innerHTML =
            "▶️ Reproducir nuestra canción";

    }

});


/* =========================================
   ANIMACIÓN DE ENTRADA
========================================= */

const elementos =
    document.querySelectorAll("h1, h2, p, section");

const observer =
    new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });


elementos.forEach(elemento => {

    elemento.classList.add("oculto");

    observer.observe(elemento);

});


/* =========================================
   CORAZONES DE FONDO
========================================= */

setInterval(() => {

    if (Math.random() > 0.5) {

        crearCorazon();

    }

}, 1500);