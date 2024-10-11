import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  {
    id: "todo-0",
    name: "Pedro",
    age: 70,
    date: "2024-10-31",
    daysDifference: 21, 
    descuento: 40,  
    completed: false
  },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

//ReactDOM.render(<App tasks={DATA} />, document.getElementById("root")); creo que va este


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
