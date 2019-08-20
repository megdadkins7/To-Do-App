import React, { useState } from 'react'
import styled from 'styled-components'

const StyledToDoForm = styled.div`
  .ToDoForm .FormControl {
    margin-left: 50px;
  }
  .FormControl {
    padding: 10px;
    margin-bottom: -5px;
    border: solid 1px #ccc;
    width: 300px;
    -moz-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
    box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .FormControl:focus {
    outline: none !important;
    border-color: #5cd6a0;
    box-shadow: 0 0 10px #5cd6a0;
  }
  .ToDoForm button {
    margin-left: 20px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: #51e3a4;
    border: none;
    color: white;
    right: -25px;
    font-size: 27px;
    box-shadow: 1px 1px 4px #cfd0d5;
    outline: none !important;
    cursor: pointer;
  }
  .FormButton span {
    margin-left: 1px;
  }
`;

function ToDoForm({ addToDo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;

    addToDo(value);
    setValue("");
  }
  return (
    <StyledToDoForm>
      <form className="ToDoForm" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="FormControl"
          value={value}
          placeholder="Add a to-do..."
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" className="FormButton">
          <span>+</span>
        </button>
      </form>
    </StyledToDoForm>  
  )
}

export default ToDoForm