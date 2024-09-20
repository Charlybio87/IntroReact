
// Objetos Literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    calle: '123 main',
    tel:'115456231',
  }
}
// console.table({persona});
console.log (persona)

const persona2 = {...persona } // clon del objeto (operador Spread)
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);

