import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import uuid from 'uuid';

import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import RemoveChecked from './RemoveChecked'

const StyledToDoList = styled.div`
  background-color: #fff;
  padding-right: 40px;
  padding-bottom: 20px;
  border-radius: 7px;
  .ToDoHeader {
    color: #545454;
    padding-top: 20px;
    font-weight: 500;
    margin: 10px;
    margin-left: 20px
    margin-top: 50px;
    text-transform: uppercase;
    font-size: 22px;
  }
`;

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

const toDoInfo = { title: 'toDo', id: 'toDo' };

function ToDoList() {
  const initialToDos = JSON.parse(window.localStorage.getItem('toDos') || "[]")
  // const initialToDos = [
  //   { id: uuid(), toDo: 'Workout', done: false },
  //   { id: uuid(), toDo: 'Grocery shopping', done: false },
  //   { id: uuid(), toDo: 'Cook dinner', done: false },
  //   { id: uuid(), toDo: 'Walk dog', done: false },
  //   { id: uuid(), toDo: 'Do laundry', done: false },
  // ]
  const [toDos, setToDos] = useState(initialToDos);

  useEffect(() => {
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = toDo => {
    const newToDos = [...toDos, { id: uuid(), toDo, done: false }];
    setToDos(newToDos);
  };
  const removeToDo = toDoId => {
    const newToDos = toDos.filter(toDo => toDo.id !== toDoId);
    setToDos(newToDos);
  };
  const toggleToDo = toDoId => {
    const newToDos = toDos.map(toDo => {
      if (toDo.id !== toDoId) return toDo;
      return {
        ...toDo,
        done: !toDo.done,
      };
    });
    setToDos(newToDos);
  };
  const removeChecked = () => {
    const newToDos = toDos.filter(toDo => {
      if(toDo.done === false) return toDo;
    });
    setToDos(newToDos)
  }
  return (
    <StyledToDoList>
      <div className="ToDoContainer">
        <header className="ToDoHeader">To-Do List</header>
        <ToDoForm addToDo={addToDo} />
        <ul className="ToDoList">
          {toDos.map((toDo, index) => (
            <ToDo
              toDo={toDo}
              key={`${toDoInfo.id}${index}`}
              removeToDo={removeToDo}
              toggleToDo={toggleToDo}
            />
          ))}
        </ul>
        <RemoveChecked
          removeChecked={removeChecked}
        />
      </div>
    </StyledToDoList>
  );
}

export default ToDoList