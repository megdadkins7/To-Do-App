import React from 'react'
import styled from 'styled-components'


const StyledCheckbox = styled.div`
  .ToDoCheck {
    display: none;
  }
  .ToDoComplete {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    margin: 10px;
    color: #f1f1f1;
    display: flex;
    background-color: #f1f1f1;
  }
  .ToDoComplete:focus {
    outline: none !important;
  }
  .ToDoCheckMark {
    color: #f1f1f1;
    margin-top: -1px;
    margin-left: -4px;
    font-weight: 500;
    font-size: 14px;
  }
`;

function Checkbox({isOn, handleToggle}) {
  return (
    <StyledCheckbox>
      <div className="ToDoTask">
        <button
          style={{backgroundColor: isOn && "#51E3A4"}}
          checked={isOn}
          onClick={handleToggle} 
          className="ToDoComplete"
        >
          <span className="ToDoCheckMark">✓</span>
        </button>
        </div>  
    </StyledCheckbox>
  )
}

export default Checkbox