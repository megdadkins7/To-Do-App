import React from 'react'
import styled from 'styled-components'

const StyledRemoveChecked = styled.div`
  .ToDoRemove {
    margin-left: 35%;
    background-color: #51E3A4;
    border-radius: 5px;
    padding: 8px;
    color: #fff;
    font-weight: 500;
    font-family: inherit;
    font-size: 14px;
    text-transform: uppercase;
    -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .ToDoRemove:focus {
    outline: none !important;
  }
`;

//const newToDos = toDos.filter(toDo => toDo.done === false)
//setToDos(newToDos)

function RemoveChecked({ removeChecked }) {
  return (
    <StyledRemoveChecked>
      <button 
        className="ToDoRemove"
        onClick={() => removeChecked()}
    >
      Remove Checked
    </button>
    </StyledRemoveChecked>
  )
}

export default RemoveChecked