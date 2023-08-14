import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Cortar morron', completed: false},
//   {text: 'Cortar ajo', completed: false},
//   {text: 'Tejer', completed: true},
//   {text: 'Tejer2', completed: true}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading, 
    error,
  } = useLocalStorage('TODOS_V1', []);//usamos el customHook y los dos parametros que retorna
  const [searchValue, setSearchValue] = React.useState('');
  console.log(`Usuarios buscan + ${searchValue}`);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const todoSearch = searchValue.toLowerCase();
      return todoText.includes(todoSearch)
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)//el splice elimina apartir del index que le pasamos en el 1 param, la cantidad de posiciones que le pasamos en el segundo parametro.cd
    saveTodos(newTodos)
  }

  return (
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
