import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item: todos, 
        saveItem: saveTodos,
        loading, 
        error,
      } = useLocalStorage('TODOS_V1', []);//usamos el customHook y los dos parametros que retorna
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
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
        
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
      }

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

    return(
        <TodoContext.Provider value={{
            loading, 
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            
        }}>
            { children }
        </TodoContext.Provider>
    )

}


export { TodoContext, TodoProvider };