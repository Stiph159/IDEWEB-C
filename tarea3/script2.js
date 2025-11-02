const contarNumeros = arr => {
  const m = new Map();
  for (const n of arr) m.set(n, (m.get(n) || 0) + 1);
  return m;
};