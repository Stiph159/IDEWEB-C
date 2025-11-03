const contarLetras = texto => {
  const obj = {};
  texto.toLowerCase().split("").forEach(l => {
    if (l !== " ") obj[l] = (obj[l] || 0) + 1;
  });
  return obj;
};
