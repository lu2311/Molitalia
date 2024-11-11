const textoMision = "Ser la empresa líder en la industria alimentaria en América Latina, reconocida por nuestra excelencia en productos y servicios, así como por nuestro compromiso con el desarrollo sostenible y el bienestar de la comunidad. Aspiramos a innovar continuamente, adaptándonos a las tendencias del mercado y contribuyendo al crecimiento de la agricultura local.";

const textoVision = "Producir y ofrecer productos alimenticios de alta calidad que satisfagan las necesidades de nuestros clientes, promoviendo la innovación y la sostenibilidad en todos nuestros procesos. Nos comprometemos a brindar un valor excepcional a nuestros consumidores, colaboradores y comunidades a través de prácticas responsables y el uso eficiente de recursos.";

function escribirTexto(elemento, texto, velocidad, callback) {
    let i = 0; // Reiniciar el índice dentro de la función
    elemento.innerHTML = ''; // Limpiar el contenido al inicio
    function escribir() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        } else {
            if (callback) callback(); // Llama al callback si existe
        }
    }
    escribir();
}

window.onload = function() {
    const pMision = document.getElementById("textoMision");
    const pVision = document.getElementById("textoVision");

    escribirTexto(pMision, textoMision, 15, function() {
        escribirTexto(pVision, textoVision, 15); // Empieza a escribir la visión solo después de que la misión termina
    });
};

growingF.onclick = function() {
    this.style.fontSize = '20px';
};

growingF1.onclick = function() {
    this.style.fontSize = '20px';
};