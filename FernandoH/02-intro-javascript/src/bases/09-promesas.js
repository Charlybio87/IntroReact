import { getHeroeById, getHeroeByOwner1 } from "../data/heroes";

// promesas

/**
 * la callback recibe dos argumentos
 * resolve: callback que se ejecuta cuando la promesa es exitosa
 * reject: callback que se ejecuta cuando la promesa no se pueda cumplir y hay que notificar
 */
// const promesa = new Promise( (resolve, reject) => {
//   console.log('espera de 2 segundos')
//   setTimeout ( () => {
//     // Tarea
//     const person1 = getHeroeById(2);
//     // resolve( person1 );
//     reject( 'No se pudo encontrar al heroe' )
//   }, 2000)
// })

// promesa.then( (heroe) =>{
//   console.log('heroe:', heroe.name)
// })
// .catch( (err) => {
//   console.log('error:', err)
// })

const getHeroeByIdAsync = (id) => {
  
  // const promesa = new Promise( (resolve, reject) => {
  return new Promise( (resolve, reject) => {
    console.log('espera de 2 segundos')
    setTimeout ( () => {
      // Tarea
      const person1 = getHeroeById(id);
      if(person1 === undefined){
        reject( 'No se pudo encontrar al heroe' )
      }else{
        resolve( `heroe: ${person1.name}` )
      }
    }, 2000)
  })

  // return promesa
}

/* Forma Extendida */
// getHeroeByIdAsync(20)
//   .then( (heroe) =>{
  //   console.log('heroe:', heroe.name)
  //   })
  //   .catch( (err) => {
    //     console.warn('error:', err)
    //     console.error('error1:', err);
    
    //   })
/* Forma Abreviada */
getHeroeByIdAsync(1).then( console.log ).catch( console.warn, console.error)
