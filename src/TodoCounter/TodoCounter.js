import './TodoCounter.css';
import React from 'react';

function TodoCounter({totalTodos, completedTodos}){
    return(
        <h1 className="TodoCounter">You have completed <span>{completedTodos}</span> out of <span>{totalTodos}</span> TODOs</h1>
    );
  }

  export { TodoCounter };