import React, {  useRef } from "react";
import Swal from 'sweetalert2';


export default function Todo(props) {
  
  const editButtonRef = useRef(null);

   const handleDiscountClick = () => {
    Swal.fire({
      title: 'Descuento',
      text: `El descuento es de: ${props.descuento} %`,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  };

  
  const viewTemplate = (
    <div className="stack-small stack-border">
      <div className="c-cb">
        <label className="todo-label" htmlFor={props.id}>
          {props.name} (Edad: {props.age}, Fecha: {props.date}, Diferencia de días: {props.daysDifference})
        </label>
      </div>
      <div className="btn-group">
        <button 
          type="button" 
          className="btn btn__edit" 
          onClick={handleDiscountClick}
          ref={editButtonRef}>
          VER DESCUENTO <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          ELIMINAR <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{viewTemplate}</li>;
}



