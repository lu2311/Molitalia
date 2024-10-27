const recetas = {
    'Galletas Navideñas de Mantequilla': {
        ingredientes: ["250 g de harina", "125 g de mantequilla", "100 g de azúcar glas", "1 huevo", "1 cucharadita de esencia de vainilla", "Mermelada"],
        dificultad: "Fácil",
        porciones: 20,
        duracion: "1 hora",
        imagen: "imagenes/receta1.png",
        pasos: [
            "En un bol, tamiza la harina, añade la mantequilla a temperatura ambiente y mezcla hasta obtener una masa arenosa.",
            "Incorpora el azúcar, el huevo y la esencia de vainilla, mezclando bien.",
            "Amasa hasta que quede homogéneo. Envuelve la masa en plástico y refrigera 30 minutos.",
            "Precalienta el horno a 180°C. Extiende la masa con un rodillo y corta las galletas con moldes navideños.",
            "Hornea de 10 a 12 minutos o hasta que estén doradas. Puedes rellenarlas con mermelada si lo deseas."
        ]
    },
    'Trufas de Chocolate Navideñas': {
        ingredientes: ["200 g de chocolate oscuro", "100 ml de crema de leche", "50 g de mantequilla", "Cacao en polvo para rebozar", "Mermelada de frambuesa o fresa"],
        dificultad: "Fácil",
        porciones: 15,
        duracion: "1h 30min",
        imagen: "imagenes/receta2.png",
        pasos: [
            "Derrite el chocolate con la crema de leche y la mantequilla a baño maría o en el microondas.",
            "Mezcla bien hasta obtener una crema suave. Deja enfriar a temperatura ambiente y luego refrigera por 1 hora.",
            "Con una cuchara, forma bolitas de chocolate.",
            "Haz un pequeño hueco en el centro y rellena con un poco de mermelada, cerrando la trufa.",
            "Reboza las trufas en cacao en polvo."
        ]
    },
    'Panettone Casero': {
        ingredientes: ["500 g de harina", "150 g de azúcar", "200 ml de leche", "3 huevos", "100 g de mantequilla", "150 g de frutas confitadas", "100 g de chispas de chocolate", "20 g de levadura fresca", "1 cucharadita de esencia de vainilla"],
        dificultad: "Media",
        porciones: 8,
        duracion: "3h",
        imagen: "imagenes/receta3.png",
        pasos: [
            "Disolver la levadura en la leche tibia y dejar reposar 10 minutos.",
            "Mezclar la harina, azúcar y la levadura disuelta. Agregar los huevos y la esencia de vainilla. Amasar bien.",
            "Incorporar la mantequilla y añadir las frutas confitadas y las chispas de chocolate, mezclando con cuidado.",
            "Colocar la masa en un molde de panettone y dejar que repose hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Precalentar el horno a 180°C y hornear por 40 minutos o hasta que esté dorado."
        ]
    },
    'Rollo de Chocolate con Crema de Avellanas': {
        ingredientes: ["120 g de harina", "100 g de azúcar", "4 huevos", "20 g de cacao en polvo", "1 cucharadita de esencia de vainilla", "200 g de crema de avellanas", "Azúcar glas para decorar"],
        dificultad: "Media",
        porciones: 8,
        duracion: "3h",
        imagen: "imagenes/receta4.png",
        pasos: [
            "Precalienta el horno a 180°C. Bate los huevos con el azúcar hasta que dupliquen su tamaño.",
            "Tamiza la harina y el cacao, e incorpóralos suavemente a la mezcla de huevos y azúcar.",
            "Vierte la mezcla en una bandeja de horno forrada con papel vegetal y extiende uniformemente. Hornea por 10-12 minutos.",
            "Al sacar del horno, enrolla el bizcocho con el papel y deja enfriar.",
            "Desenrolla y unta la crema de avellanas, luego vuelve a enrollar. Espolvorea con azúcar glas."
        ]
    }
};


function mostrarReceta(titulo) {
    const recetaSeleccionada = recetas[titulo];  // Obtener los datos de la receta
    const tituloReceta = document.getElementById('titulo-receta');
    const imagenReceta = document.getElementById('imagen-receta');
    const dificultadReceta = document.getElementById('dificultad');
    const porcionesReceta = document.getElementById('porciones');
    const duracionReceta = document.getElementById('duracion');
    const ingredientesReceta = document.getElementById('lista-ingredientes');
    const pasoSeleccionado = document.getElementById('paso-seleccionado');


    // Actualizar título, imagen y otros detalles
    tituloReceta.textContent = titulo;
    imagenReceta.src = recetaSeleccionada.imagen;  // Cambia la imagen
    dificultadReceta.textContent = recetaSeleccionada.dificultad;
    porcionesReceta.textContent = recetaSeleccionada.porciones;
    duracionReceta.textContent = recetaSeleccionada.duracion;

    // Actualizar la lista de ingredientes
    ingredientesReceta.innerHTML = "";
    recetaSeleccionada.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ingredientesReceta.appendChild(li);
    });

    // Limpiar el campo de paso seleccionado
    pasoSeleccionado.innerHTML = "<p>Selecciona un paso 😊</p>";

    // Cargar los pasos correspondientes a la receta seleccionada
    pasosReceta = recetaSeleccionada.pasos;

    // Mostrar la sección de receta seleccionada con animación
    document.getElementById('receta-seleccionada').classList.add('mostrar');
}

function mostrarPaso(paso) {
    const pasoSeleccionado = document.getElementById('paso-seleccionado');
    pasoSeleccionado.innerHTML = `<p>Paso ${paso}: ${pasosReceta[paso - 1]}</p>`;
}


const corazones = document.querySelectorAll('.corazon');

corazones.forEach(corazon => {
    corazon.addEventListener('mouseover', () => {
        let rating = corazon.getAttribute('data-corazon');
        corazones.forEach((c, index) => {
            if (index < rating) {
                c.style.color = 'crimson';
            } else {
                c.style.color = '';
            }
        });
    });

    corazon.addEventListener('click', () => {
        let rating = corazon.getAttribute('data-corazon');
        corazones.forEach((c, index) => {
            if (index < rating) {
                c.classList.add('seleccionado');
            } else {
                c.classList.remove('seleccionado');
            }
        });
    });

    corazon.addEventListener('mouseout', () => {
        corazones.forEach(c => {
            if (!c.classList.contains('seleccionado')) {
                c.style.color = '';
            }
        });
    });
});
