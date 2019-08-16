import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import RemoveChecked from './RemoveChecked';

const StyledToDoList = styled.div`
  .ToDoHeader {
    color: #4d4d4d;
    font-weight: 500;
    margin: 20px;
    margin-top: 50px;
    text-transform: uppercase;
    font-size: 22px;
  }
`;

const toDoInfo = { title: 'toDo', id: 'toDo' };

function ToDoList() {
  const [toDos, setToDos] = useState([
    { id: uuid(), toDo: 'Workout', done: false },
    { id: uuid(), toDo: 'Grocery shopping', done: false },
    { id: uuid(), toDo: 'Cook dinner', done: false },
    { id: uuid(), toDo: 'Walk dog', done: false },
    { id: uuid(), toDo: 'Do laundry', done: false },
  ]);
  const addToDo = toDo => {
    const newToDos = [...toDos, { toDo, done: false }];
    setToDos(newToDos);
  };
  const removeToDo = toDoId => {
    const newToDos = toDos.filter(toDo => toDo.id !== toDoId);
    setToDos(newToDos);
  };
  return (
    <StyledToDoList>
      <div className="ToDoContainer">
        <header className="ToDoHeader">To-Do List</header>
        <ToDoForm addToDo={addToDo} />
        <ul className="ToDoList">
          {toDos.map((toDo, index) => (
            <ToDo
              id={toDo.id}
              toDo={toDo}
              index={index}
              key={`${toDoInfo.id}${index}`}
              removeToDo={removeToDo}
            />
          ))}
        </ul>
        <RemoveChecked />
      </div>
    </StyledToDoList>
  );
}

export default ToDoList;
