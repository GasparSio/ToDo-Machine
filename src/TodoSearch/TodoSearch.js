import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';


function TodoSearch(){
  const {
      searchValue,
      setSearchValue  
} = React.useContext(TodoContext)
    return(
      <input 
      placeholder="Search your ToDos" 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    );
  }

  export { TodoSearch };

  //recibimos como parametro en el onChange, el evento, para que despues podamos utilizarlo dentro de la funcion poder utilizarlo
