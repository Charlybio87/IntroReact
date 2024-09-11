import React, { useState } from "react"
import MyButton, {MyBtn, MyBtnCount,MyBtnJuntos} from "./Funciones/MyButton"
import {AboutPage} from "./Funciones/AboutPage"
import './style/app.css'
import AdminPanel from "./Funciones/AdminPanel";
import LoginForm from "./Funciones/LoginForm";
import ShoppingList from "./Funciones/ShoppingList";


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 150,
  isLoggedIn: true,
};

export default function App(){

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return(
    <div>
      <section>Aprendiendo <b>React</b> Sitio Oficial</section>
      <h1>Bienvenido a mi Aplicación</h1>
      <MyButton />
      <AboutPage />
      <img className="avatar" src="./src/assets/react.svg" alt="React"/>
      <img className="avatar" src="./public/vite.svg" alt="Vite" />
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      {user.isLoggedIn ? <AdminPanel/> : <LoginForm/> }
      <h3>Lista del Mercado:</h3>
      <ShoppingList/>
      <MyBtn/>
      <h3> Botones de Conteo:</h3>
      <MyBtnCount/>
      <MyBtnCount/>
      <h3>Contadores que se actualizan juntos:</h3>
      <MyBtnJuntos count={count} onClick={handleClick} />
      <MyBtnJuntos count={count} onClick={handleClick} />
    </div>
  )
}