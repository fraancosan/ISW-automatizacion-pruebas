import React, { useState } from 'react';
import Swal from 'sweetalert2';
function Form({ addTask }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [antelacion, setAntelacion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = [];

    // Validación de nombre
    if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)) {
      errors.push('El nombre debe ser un texto válido.');
    }

    // Validación de edad
    const ageNum = parseInt(age, 10);
    if (!/^\d+$/.test(age) || ageNum < 0 || ageNum > 999) {
      errors.push(
        'La edad debe ser un número entero no negativo de maximo tres cifras.'
      );
    }
    // Validación de antelacion
    const antelacionNum = parseInt(antelacion, 10);
    if (antelacionNum < 0 || !/^\d+$/.test(antelacion)) {
      errors.push('La antelación debe ser un número entero positivo.');
    }

    // Si hay errores, mostrar alerta
    if (errors.length > 0) {
      Swal.fire('Error', errors.join(' '), 'error');
    } else {
      // Si todas las validaciones pasan, agregar el pasajero
      addTask(name, ageNum, antelacion);
      Swal.fire('Éxito', 'Pasajero registrado correctamente.', 'success');
      // Limpiar campos
      setName('');
      setAge('');
      setAntelacion('');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <label htmlFor="task-name">Nombre del pasajero:</label>
      <input
        type="text"
        id="task-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="age">Edad del pasajero:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor="antelacion">Antelación:</label>
      <input
        type="number"
        id="antelacion"
        value={antelacion}
        onChange={(e) => setAntelacion(e.target.value)}
      />

      <button
        type="submit"
        style={{
          backgroundColor: 'green',
          color: 'white',
          fontWeight: 'bold',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        REGISTRAR BOLETO
      </button>
    </form>
  );
}

export default Form;
