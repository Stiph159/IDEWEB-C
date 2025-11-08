function normalizarCalificaciones(calificaciones) {
    let max = Math.max(...calificaciones);
    let normalizadas = calificaciones.map(nota => nota / max);
    console.log("Calificaciones normalizadas:", normalizadas);
}