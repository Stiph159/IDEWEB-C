class Persona{constructor(nombre,edad,ciudad){this.nombre=nombre;this.edad=edad;this.ciudad=ciudad;}}
class Estudiante extends Persona{constructor(n,e,c,carrera,nota){super(n,e,c);this.carrera=carrera;this.nota=nota;}estudiar(){return `${this.nombre} estudia ${this.carrera}`;}}
class Profesor extends Persona{constructor(n,e,c,curso,salario){super(n,e,c);this.curso=curso;this.salario=salario;}enseñar(){return `${this.nombre} enseña ${this.curso}`;}}
const p=new Persona("Ana",30,"Lima"),e=new Estudiante("Luis",20,"Arequipa","Ing",18),pr=new Profesor("Juan",40,"Cusco","POO",2500);
const arr=[p,e,pr];for(const o of arr)console.log(o.toString?o.toString():o);