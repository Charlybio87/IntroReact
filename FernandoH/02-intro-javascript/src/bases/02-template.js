const nombre = 'charly';

// Template String

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto);

function getSaludos(nombre) {
  return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getSaludos(nombre)}`);
