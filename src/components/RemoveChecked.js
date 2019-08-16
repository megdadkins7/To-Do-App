import React from 'react'
import styled from 'styled-components'

const StyledRemoveChecked = styled.div`
  .ToDoRemove {
    margin-left: 30%;
    background-color: #51E3A4;
    border-radius: 5px;
    padding: 8px;
    color: #fff;
    font-weight: 500;
    font-family: inherit;
    font-size: 14px;
    text-transform: uppercase;
  }
  .ToDoRemove:focus {
    outline: none !important;
  }
`;

//const newToDos = toDos.filter(toDo => toDo.isOn === false)
//setToDos(newToDos)


function RemoveChecked({ index, isOn, removeChecked }) {
  return (
    <StyledRemoveChecked>
      <button 
        className="ToDoRemove"
    >
      Remove Checked
    </button>
    </StyledRemoveChecked>
  )
}

export default RemoveChecked