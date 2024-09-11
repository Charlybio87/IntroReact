import React,{useState} from 'react'

export default function Component() {
    // propiedad: llamada text y asociada al cambio de estado setText
    const [text, setText] = useState()
    const [update, setUpDate] = useState()

    // recibe el valor del input y se asigna a la propiedad text
    const textOnChange = (event) => {
        setText(event.target.value)
    }
    // no recibe un evento en si
    const buttonOnClick = () => {
        setUpDate(text)
    }

    return (
    <div>
        <input type="text" value={text} onChange={textOnChange} />
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado: {update}</p>
    </div>
    )
}
