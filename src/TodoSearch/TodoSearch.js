import React from 'react';
import './TodoSearch.css';


function TodoSearch({searchValue, setSearchValue, loading}){
    return(
      <input 
      placeholder="Search your ToDos" 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
      />
    );
  }

  export { TodoSearch };

  //recibimos como parametro en el onChange, el evento, para que despues podamos utilizarlo dentro de la funcion poder utilizarlo
