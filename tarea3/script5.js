const mostrarYContar = obj => {
  for (const k in obj) console.log(k, obj[k]);
  return Object.keys(obj).length;
};