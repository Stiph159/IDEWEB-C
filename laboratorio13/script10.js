const invertirMap = map => {
  const nuevo = new Map();
  for (const [k, v] of map) nuevo.set(v, k);
  return nuevo;
};