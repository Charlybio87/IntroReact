// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: 'tony',
  edad: 30,
  clave:'Iroman'
}
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(persona);

// const { edad, clave, nombre, } = persona
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( usuario ) => {
  console.log(usuario);
}
const retornaPersona2 = ( usuario ) => {
  const { edad, clave, nombre, } = usuario
  console.log(edad, clave, nombre);
}
const retornaPersona3 = ( {clave, nombre, edad, rango = 'Capitan'} ) => {
  console.log(nombre,edad,rango);
}

// retornaPersona(persona)
// retornaPersona2(persona)
// retornaPersona3(persona)

const useContext = ( {clave, nombre, edad, rango = 'Capitan'} ) => {
  return{
    nombreClave: clave,
    años: edad,
    latlng: {
      lat: 14.1234,
      lng: -12.1234,
    }
  }
}

const { nombreClave, años, latlng: {lat,lng} } = useContext( persona );
// const {lat, lng} = latlng;
console.log(nombreClave, años);
console.log( lat, lng );
