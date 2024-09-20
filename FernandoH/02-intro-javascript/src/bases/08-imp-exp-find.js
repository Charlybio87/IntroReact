// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'; //imp
import heroes,  { owners } from '../data/heroes';

// console.log(heroes);
// console.log(owners);

/* Empleando Find()*/
/* Forma Extendida */
// const getHeroeById = (id) => {
//   return heroes.find ((heroe) => {
//     return heroe.id === id
//   }) 
// }

/* Forma abreviada*/
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id) 

// console.log(getHeroeById(2));
// console.log(getHeroeById(5));
// console.log(getHeroeById(0));

/* Empleando Iteracion forEach() */
// const getHeroeByOwner = (owner) => 
  //   heroes.forEach(heroe1 => {
    //     if (heroe1.owner === owner)
    //     {
//         console.log(heroe1.name)
//     }
//   })

// getHeroeByOwner('DC')

/* Empleando Filter() */
const getHeroeByOwner1 = (owner) => heroes.filter((heroe2) => heroe2.owner === owner)

// console.log(getHeroeByOwner1('DC'));
// console.log(getHeroeByOwner1('Marvel'));

export { getHeroeById , getHeroeByOwner1}
