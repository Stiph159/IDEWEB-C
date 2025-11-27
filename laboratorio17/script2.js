try {
  let texto = "{nombre: Juan}"; 
  JSON.parse(texto);
} catch (e) {
  console.log("Tipo de error:", e.name);     
  console.log("Mensaje:", e.message);       
}
