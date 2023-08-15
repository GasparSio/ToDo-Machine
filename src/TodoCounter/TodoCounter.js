import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    return(
        <h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>
    );
  }

  export { TodoCounter };