const contarPalabras = texto => {
  const m = new Map();
  texto.toLowerCase().split(" ").forEach(p => m.set(p, (m.get(p) || 0) + 1));
  return m;
};
