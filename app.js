
const formularioTarea = document.getElementById('formulario-tarea');
const entradaTarea = document.getElementById('entrada-tarea');
const listaTareas = document.getElementById('lista-tareas');
const mensajeError = document.getElementById('mensaje-error');

//Agregar una tarea
formularioTarea.addEventListener('submit', function(e) {
    e.preventDefault();
    const textoTarea = entradaTarea.value.trim();

    // Validar que el campo de entrada no esté vacío
    if (textoTarea === '') {
        mensajeError.textContent = 'Por favor, ingresa una tarea.';
        mensajeError.style.display = 'block';
    } else {
        agregarTarea(textoTarea);
        entradaTarea.value = '';
        mensajeError.style.display = 'none';
    }
});

function agregarTarea(textoTarea) {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = textoTarea;

    //Botón de eliminar
    const eliminaBtn = document.createElement('button');
    eliminaBtn.textContent = 'Eliminar';
    eliminaBtn.classList.add('boton-eliminar');
    eliminaBtn.addEventListener('click', eliminarTarea);

    elementoLista.appendChild(eliminaBtn);
    elementoLista.addEventListener('click', completarTarea);

    listaTareas.appendChild(elementoLista);
}

function eliminarTarea(e) {
    const elementoTarea = e.target.parentElement;
    elementoTarea.remove();
    mostrarMensajeExito("Se ha eliminado correctamente");
}

function completarTarea(e) {
    if (e.target.tagName !== 'BUTTON') {
        e.target.classList.toggle('completada');
    }
}

function mostrarMensajeExito(mensaje) {
    const mensajeExito = document.createElement('p');
    mensajeExito.textContent = mensaje;
    mensajeExito.classList.add('mensaje-exito');
    document.body.appendChild(mensajeExito);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(function() {
        mensajeExito.remove();
    }, 3000);
}
