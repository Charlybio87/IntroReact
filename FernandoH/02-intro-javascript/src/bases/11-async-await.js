// Async - Await

// const getImagenPromesa = () => 
//   new Promise( resolve => 
//     resolve ('https://www.google.com.ar')
//   )
// getImagenPromesa().then(console.log)

const getImagen = async() => {
  
  try {
    
    const apiKey = 'Te5JBGuz4sGABR7EK3hKuxbdcz5VDIXz'
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    const { data } = await  respuesta.json()
  
    const { url } = data.images.original
    console.log(url);
  
    const img = document.createElement('img');
    img.src = url;
  
    document.body.append( img );

  } catch (error) {
    console.error(error);
  }

}

getImagen();