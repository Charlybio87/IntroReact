import React, { useState } from 'react'
import PropTypes from 'prop-types'

function CounterApp({ value }) {
  
  
  // onClick = {handleAdd()}
  //
  // const handleAdd = (e) => {
  //   console.log(e)
  //   return ()=> console.log('hola mundo')
  // }
  const handleButton = (arg) => {
    setCounter(arg === 'suma' ? counter + 1 : counter - 1)
  }

  const handleRest = () =>{
    setCounter ( 0 )
  }
  
  const [counter,setCounter] = useState(value)

  return (
    <>
      <h1>Counter App</h1>
      <h3>Valor por default: { value }</h3>
      <h3>Contador: { counter }</h3>
      {/* <button onClick={ handleAdd ()}> + 1 </button> */}
      <button onClick={ () => handleButton('suma') }> + 1 </button>
      <button onClick={ handleRest }> Reset </button>
      <button onClick={ () => handleButton('resta') }> - 1 </button>

    </>
  )
}

CounterApp.prototype = {
  value: PropTypes.number.isRequired
}

export default CounterApp