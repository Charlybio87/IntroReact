import React from 'react';
import ReactDOM from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp'


// const saludo = <h1> Hola Mundo </h1>;

// const divRoot = document.querySelector('#root');

// ReactDOM.render( divRoot); 

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <PrimeraApp saludo = 'Hola Mundo' />
  <CounterApp value={22032016} />
)