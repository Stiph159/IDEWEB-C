const jsonString = '{"nombre":"Ana","edad":22}';
let obj = JSON.parse(jsonString);

obj.edad = 30;

const jsonActualizado = JSON.stringify(obj);
console.log(jsonActualizado);
