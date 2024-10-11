
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const calculateDaysDifference = (dateString) => {
  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const date = new Date(dateString);
  const inputDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const differenceInTime = inputDate.getTime() - todayDate.getTime();
  return Math.ceil(differenceInTime / (1000 * 3600 * 24));
};

function calcularDescuento(age, dayDifference) {
    let descuento = 0;
    // Determinamos el descuento basado en la edad
    if (age >= 0 && age <= 25) {
        descuento = 30;
    } else if (age > 25 && age < 65) {
        // Determinamos el descuento adicional según el día de diferencia
        if (dayDifference >= 8 && dayDifference <= 30) {
            descuento = 15;
        } else if (dayDifference > 30) {
            descuento = 25;
        }
    } else if (age >= 65) {
        descuento = 40;
    }
    return descuento;
}

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  
  
  function addTask(name, age, date) {
  const daysDifference = calculateDaysDifference(date);
  const descuento = calcularDescuento(age, daysDifference);
  const newTask = { 
    id: `todo-${nanoid()}`, 
    name, 
    age, 
    date, 
    daysDifference,
    descuento,
    completed: false 
  };
  setTasks([...tasks, newTask]);
}
  

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return { ...task, completed: !task.completed };
    }
    return task;
    });
    setTasks(updatedTasks);
    }

    function deleteTask(id) {
      
      const remainingTasks = tasks.filter((task) => id !== task.id);
      setTasks(remainingTasks);
    }

    function editTask(id, newName) {
      const editedTaskList = tasks.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
        //
        return { ...task, name: newName };
        }
        return task;
      });
      setTasks(editedTaskList);
    }

  
  const taskList = tasks
  .map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      age={task.age} 
      date={task.date} 
      completed={task.completed}
      daysDifference={task.daysDifference} 
      descuento={task.descuento}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
));

   
  const tasksNoun = taskList.length !== 1 ? "Pasajeros" : "Pasajero";
  const headingText = `${taskList.length} ${tasksNoun}`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);
  
  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);


  return (
    <div className="todoapp stack-large">
      <h1>GESTION DE DESCUENTOS</h1>
       <Form addTask={addTask}/>
      <div className='border-list'>
      <h2 id="list-heading" className="title-count" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul> 
      </div>
    </div>
  );
}


export default App;
