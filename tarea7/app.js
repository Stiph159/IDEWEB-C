const API_URL = 'http://localhost:8000/alumnos';
let editando = false;
let dniEditando = '';

function mostrarMensaje(texto, tipo = 'success') {
    const msg = document.getElementById('message');
    msg.textContent = texto;
    msg.className = `message ${tipo}`;
    setTimeout(() => msg.textContent = '', 3000);
}

async function cargarAlumnos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al conectar con el servidor');
        
        const alumnos = await response.json();
        const tbody = document.getElementById('tablaAlumnos');
        tbody.innerHTML = '';
        
        alumnos.forEach(alumno => {
            tbody.innerHTML += `
                <tr>
                    <td>${alumno.dni}</td>
                    <td>${alumno.nombre}</td>
                    <td>${alumno.primer_apellido} ${alumno.segundo_apellido || ''}</td>
                    <td>${alumno.ciudad || '-'}</td>
                    <td>
                        <button onclick="editar('${alumno.dni}')">Editar</button>
                        <button onclick="eliminar('${alumno.dni}')">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    } catch {
        mostrarMensaje('Error al conectar con el servidor', 'error');
    }
}

async function guardarAlumno() {
    const datos = {
        dni: document.getElementById('dni').value.trim(),
        nombre: document.getElementById('nombre').value.trim(),
        primer_apellido: document.getElementById('primer_apellido').value.trim(),
        segundo_apellido: document.getElementById('segundo_apellido').value.trim() || null,
        ciudad: document.getElementById('ciudad').value.trim() || null,
        telefono: document.getElementById('telefono').value.trim() || null
    };
    
    if (!datos.dni || !datos.nombre || !datos.primer_apellido) {
        mostrarMensaje('Complete DNI, Nombre y Primer Apellido', 'error');
        return;
    }
    
    try {
        if (editando) {
            // Actualizar
            const response = await fetch(API_URL, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(datos)
            });
            
            if (!response.ok) throw new Error();
            mostrarMensaje('Alumno actualizado');
            cancelarEdicion();
        } else {
            // Crear
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(datos)
            });
            
            if (!response.ok) throw new Error();
            mostrarMensaje('Alumno creado');
            limpiarForm();
        }
        
        cargarAlumnos();
    } catch {
        mostrarMensaje(editando ? 'Error al actualizar alumno' : 'Error al crear alumno', 'error');
    }
}

async function eliminar(dni) {
    if (!confirm(`¿Eliminar alumno ${dni}?`)) return;
    
    try {
        const response = await fetch(`${API_URL}?id=${dni}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error();
        mostrarMensaje('Alumno eliminado');
        cargarAlumnos();
    } catch {
        mostrarMensaje('Error al eliminar alumno', 'error');
    }
}

async function editar(dni) {
    try {
        const response = await fetch(`${API_URL}?id=${dni}`);
        if (!response.ok) throw new Error();
        
        const alumno = await response.json();
        
        document.getElementById('dni').value = alumno.dni;
        document.getElementById('nombre').value = alumno.nombre;
        document.getElementById('primer_apellido').value = alumno.primer_apellido;
        document.getElementById('segundo_apellido').value = alumno.segundo_apellido || '';
        document.getElementById('ciudad').value = alumno.ciudad || '';
        document.getElementById('telefono').value = alumno.telefono || '';
        
        editando = true;
        dniEditando = dni;
        document.getElementById('dni').disabled = true;
        document.getElementById('btnGuardar').textContent = 'Actualizar';
        document.getElementById('btnCancelar').style.display = 'inline';
        document.getElementById('formTitle').textContent = 'Editar Alumno';
        
    } catch {
        mostrarMensaje('Error al cargar alumno', 'error');
    }
}

function cancelarEdicion() {
    editando = false;
    dniEditando = '';
    limpiarForm();
    document.getElementById('dni').disabled = false;
    document.getElementById('btnGuardar').textContent = 'Guardar';
    document.getElementById('btnCancelar').style.display = 'none';
    document.getElementById('formTitle').textContent = 'Nuevo Alumno';
}

function limpiarForm() {
    document.getElementById('dni').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('primer_apellido').value = '';
    document.getElementById('segundo_apellido').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('telefono').value = '';
}

document.addEventListener('DOMContentLoaded', cargarAlumnos);