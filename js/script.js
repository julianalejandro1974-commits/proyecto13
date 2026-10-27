
const botones = document.querySelectorAll(".boton-pregunta");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const preguntaActual = boton.parentElement;
        const yaEstaAbierta = preguntaActual.classList.contains("activa");

        // Cerrar todas las preguntas
        document.querySelectorAll(".pregunta").forEach(function(pregunta) {
            pregunta.classList.remove("activa");
        });

        // Abrir la pregunta seleccionada si estaba cerrada
        if (!yaEstaAbierta) {
            preguntaActual.classList.add("activa");
        }

    });

});
