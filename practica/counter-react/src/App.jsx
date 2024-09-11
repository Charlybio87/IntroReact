import { useState } from "react"
import './App.css'

// export default function App(){
//   const [counter, setcounter] = useState(0)
//   return(
//     <div>
//       <h1>Contador:<span> {counter}</span></h1>
//       <button onClick={() => setcounter(counter + 1)}>+1</button>
//       <button onClick={() => setcounter(counter -1)}>-1</button>
//       <span></span>
//     </div>
//   )
// }
const Thank = () =>{
  let messageTh = 'Gracias por elegirnos!'
  return (
    <p>{messageTh}</p>
  )
}

export default function App(){
  const [counter, setCounter] = useState(1)
  const [message, setMessage] = useState("")

  const handleIncrement = () => {
    if (counter < 10) {
      setCounter(counter + 1)
      setMessage('')
    } else {
      setMessage("No se puede superar el valor de 10")
      setCounter(10)
    }
  }

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
      setMessage('')
    }else {
      setMessage("No se puede ser menor al valor de 1")
      setCounter(1)
    }
  }

  return(
    <section>
      {
        <>
          <h1>Contador:<span> {counter}</span></h1>
          <div>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
          </div>
          <p>{message}</p>
          <Thank/>
        </>
      }
    </section>
  )
}