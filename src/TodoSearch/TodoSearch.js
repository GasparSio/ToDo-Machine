// import React, { useState }  from 'react';
import './TodoSearch.css';


function TodoSearch({
  searchValue,
  setSearchValue
}){

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
