import React, { useEffect } from 'react';

//custom hook, es una funcion y la llamamos con use...
function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  
  React.useEffect(() => {
   setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItem;
  
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
      }else{
        parsedItem = JSON.parse(localStorageItem)
        setItem(parsedItem);
      }
      setLoading(false)
    } catch (error) {
        setLoading(false)
        setError(true)
      }
   }, 1000)
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  //un custom hook siempre tienen que retornar algo, en este caso retornamos un array, 
  //vamos a retornar lo que necesitemos usar en App.
  return {
    item, 
    saveItem, 
    loading, 
    error
  }
}

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Cortar morron', completed: false},
//   {text: 'Cortar ajo', completed: false},
//   {text: 'Tejer', completed: true},
//   {text: 'Tejer2', completed: true}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));



export { useLocalStorage };