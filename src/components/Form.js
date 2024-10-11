import React, { useState } from 'react';
import Swal from 'sweetalert2'; 
function Form({ addTask }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)){
      Swal.fire('Error', 'El nombre debe ser un texto válido.', 'error');
      return;
    }
    
    const ageNum = parseInt(age, 10);
    if (!/^\d+$/.test(age) || ageNum < 0) {
      Swal.fire('Error', 'La edad debe ser un número entero no negativo.', 'error');
      return;
    }

    if (!date) {
      Swal.fire('Error', 'La fecha debe estar en formato correcto.', 'error');
      return;
    }

    // Verificar que la fecha no sea menor que hoy
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    const selectedDateUTC = selectedDate.getTime();
    const todayUTC = new Date(today).getTime();
    if (selectedDateUTC < todayUTC)  {
      Swal.fire('Error', 'La fecha de viaje no puede ser anterior a hoy.', 'error');
      return;
    }

    // Si todas las validaciones pasan, agregar el pasajero
    addTask(name, ageNum, date);
    
    // Mostrar alerta positiva
    Swal.fire('Éxito', 'Pasajero registrado correctamente.', 'success');

    // Limpiar campos
    setName('');
    setAge('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
      
      <label htmlFor="date">Fecha del viaje:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
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
      >REGISTRAR BOLETO</button>
    </form>
  );
}

export default Form;



