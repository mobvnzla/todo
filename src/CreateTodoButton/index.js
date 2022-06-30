import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  
  const onClickbutton = (msg) => {alert(msg)};
  
  return (
    <button 
    className="CreateTodoButton"
    onClick={() => onClickbutton("aqui se deberia abrir un modal")}
    >+</button>
  );
}

export { CreateTodoButton };