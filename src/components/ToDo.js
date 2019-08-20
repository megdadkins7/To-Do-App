import React from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'

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
    background-color: #fff;
    font-size: 21px;
    color: #4d4d4d;
    line-height: 1;
    opacity: 0.5;
    margin-top: -5px;
    margin-left: auto;
  }
  .ToDoButton:focus {
    outline: none !important;
  }
  .ToDoLine {
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    border-radius: 7px;
  }
`;

function ToDo({ toDo, removeToDo, toggleToDo }) {
  return (
    <StyledToDo>
      <li className="ToDoWrapper">
        <Checkbox
          id={toDo.id}
          isOn={toDo.done}
          handleToggle={() => toggleToDo(toDo.id)}
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
      <hr className="ToDoLine" />
    </StyledToDo>
  );
}

export default ToDo