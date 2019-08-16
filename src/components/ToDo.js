import React, { useState } from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

const StyledToDo = styled.div`
  .ToDoWrapper {
    display: flex;
  }
  .ToDoWrapper div {
    display: flex;
  }
  .ToDoItem {
    display: flex;
    padding: 10px;
    margin-right: 10px;
    color: #4d4d4d;
  }
  .ToDoButton {
    -webkit-appearance: none;
    border: 0;
    background: 0 0;
    cursor: pointer;
    padding: 0;
    background-color: #f1f1f1;
    font-size: 21px;
    color: #4d4d4d;
    line-height: 1;
    opacity: 0.5;
  }
  .ToDoButton:focus {
    outline: none !important;
  }
`;

function ToDo({ toDo, removeToDo }) {
  const [value, setValue] = useState(false);
  return (
    <StyledToDo>
      <li className="ToDoWrapper">
        <Checkbox
          id={toDo.id}
          isOn={value}
          handleToggle={() => setValue(!value)}
        />
        <span className="ToDoItem">{toDo.toDo}</span>
        <button
          className="ToDoButton"
          type="button"
          onClick={() => removeToDo(toDo.id)}
        >
          &times;
        </button>
      </li>
    </StyledToDo>
  );
}

export default ToDo;
