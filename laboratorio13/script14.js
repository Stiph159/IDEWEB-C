const gestionarEmpleados = empleados => {
  const r = {};
  empleados.forEach(e => {
    if (!r[e.area]) r[e.area] = { empleados: [], total: 0 };
    r[e.area].empleados.push(e.nombre);
    r[e.area].total += e.salario;
  });
  for (const a in r)
    r[a] = {
      empleados: r[a].empleados,
      promedio: r[a].total / r[a].empleados.length
    };
  return r;
};
