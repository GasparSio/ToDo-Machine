import React from 'react';
import './TodoEmptySearchResult.css';


function TodoEmptySearchResult({searchValue}){

    return(
        <div className='TodoEmptySearchResult-container'>
            <span >No results founded for {searchValue}</span>
        </div>
    )
  }

export { TodoEmptySearchResult };