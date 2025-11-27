function cargarUsuario(callback) {
  let tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

  setTimeout(function() {
    let usuario = { id: 1, nombre: "Juancito" };
    callback(usuario);
  }, tiempo);
}

cargarUsuario(function(user) {
  console.log("Usuario cargado: " + user.nombre + " (ID: " + user.id + ")");
});
