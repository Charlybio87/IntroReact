// operador condicional ternario

const activo = true
const mensaje = ( !activo ) ? 'Activo' : 'Inactivo'
console.log(mensaje) // Inactivo

const mensaje1 = ( activo ) && 'Activo';
console.log(mensaje1) // Activo

const mensaje2 = ( !activo ) && 'Activo';
console.log(mensaje2) // false
