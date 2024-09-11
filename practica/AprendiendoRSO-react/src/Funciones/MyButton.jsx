import React, {useState} from 'react'


export default function MyButton() {
  return (
    <button className='btn'>Soy un botón</button>
  );
}

function MyBtn() {
  function handleClick() {
    alert('¡Me hiciste clic!');
  }
  return (
    <button className='btn' onClick={handleClick}>
      Haz clic
    </button>
  );
}

function MyBtnCount() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className='btn' onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}

function MyBtnJuntos({ count, onClick }) {
  return (
    <button className='btn' onClick={onClick}>
      Hiciste clic {count} veces
    </button>
  );
}

export {MyBtn,MyBtnCount,MyBtnJuntos}
