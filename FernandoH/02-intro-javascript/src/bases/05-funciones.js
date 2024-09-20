



// Funciones en JS
function saludar( nombre ) {
  return `Hola, ${ nombre }`; 
}

const saludar2 =  function(nombre) {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar4 = (nombre) => `Hola, ${nombre}`
const saludar5 = () => `Hola Mundo`

// console.log(saludar('Carlos'));
// console.log(saludar2('Santino'));
// console.log(saludar3('Pilar'));
// console.log(saludar4('Lupe'));
// console.log(saludar5());

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502',
  }
}
const getUser2 = () => (
  {
    uid: '123ABC',
    username: 'El_Papi1502',
  }
)
const user = getUser ();
console.log(user);
console.log(getUser2());

// Tarea
function getUsuarioActivo(nombre) {
  return{
    uid: 'ABC123',
    username: nombre  
  }
}
const getUsuarioActivo2 = (nombre) => (
  {
    uid: '123ACB',
    username: nombre  
  }
)

const usuarioActivo = getUsuarioActivo('Carlos')
console.log(usuarioActivo);

const user2 = getUsuarioActivo2 ('Charly');
console.log(user2);