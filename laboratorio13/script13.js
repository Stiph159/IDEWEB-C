const combinarCatalogos = (a, b) => {
  const r = { ...a };
  for (const p in b)
    r[p] = (p in r ? Math.min(r[p], b[p]) : b[p]).toFixed(2);
  return r;
};
