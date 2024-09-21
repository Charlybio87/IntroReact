

test('primera prueba: debe ser true', () => { 

  const isActive = true;

  if ( !isActive ){
    throw new Error('No esta activo')
  }else{
    console.log(`Esta prueba es un exito ${isActive}`)
  }

})