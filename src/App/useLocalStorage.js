import React, { useEffect } from 'react';

//custom hook, es una funcion y la llamamos con use...
function useLocalStorage (itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
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
      }
      setItem(parsedItem);
      setLoading(false)
      setSincronizedItem(true)
    } catch (error) {
        setLoading(false)
        setError(true)
      }
   }, 700)
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };
  //un custom hook siempre tienen que retornar algo, en este caso retornamos un array, 
  //vamos a retornar lo que necesitemos usar en App.
  return {
    item, 
    saveItem, 
    loading, 
    error,
    sincronizeItem
  }
}


export { useLocalStorage };