function main(){
  const counterElem = document.getElementById('counter')
  const incrementBtn = document.getElementById('increment')
  const decrementBtn = document.getElementById('decrement')
  const spanError = document.getElementById('error-text')

  let counter = 0;
  counterElem.innerText = counter
  spanError.innerText = ''


  function setError(mensajeError){
    spanError.innerText = mensajeError
  }

  function handleCounter(type = "increment") {
    type === "increment"? counter++ : counter--;
      if (counter > 0 && counter < 11) {
        counterElem.innerText = counter
        spanError.innerText = ''
    }else if(counter == 11) {
        setError('El contador no puede ser mayor a 10')
        counter = 10
    }else if(counter < 1) {
      setError('El contador no puede ser menor a 1')
      counter = 1
    }
  }

  incrementBtn.addEventListener('click',()=>handleCounter('increment'))
  decrementBtn.addEventListener('click',()=>handleCounter('decrement'))
}
document.addEventListener('DOMContentLoaded', main)