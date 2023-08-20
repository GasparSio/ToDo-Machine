import React from 'react';
import { useTodos } from './UseTodos';
import { TodoHeader } from '../TodoHeader/TodoHeader';  
import { TodoCounter } from '../TodoCounter/TodoCounter';  
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { TodoModal } from '../TodoModal/TodoModal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoEmptySearchResult } from '../TodoEmptySearchResult/TodoEmptySearchResult';

function App() {
  const {
    loading, 
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
} = useTodos()

  return(
  <>
    <TodoHeader>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        loading={loading}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}
      onError={() => <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={() => <TodosEmpty />}
      onEmptySearchResults={() => 
      <TodoEmptySearchResult 
        searchValue={searchValue}
      />}
      render={todo => (
        <TodoItem 
          key={todo.text}//cada children debe tener una llave unica, en este caso nuestra prop text sera distinta
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}//hay que encapsular una fn dentro de otra fn para que no se re-rendirice muchas veces
          onDelete={() => deleteTodo(todo.text)}
        />
      )}
    />
    <CreateTodoButton
      setOpenModal={setOpenModal}
    />
    {openModal && (
      <TodoModal>
        <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
        />
      </TodoModal>
    )}
  </>
  )
}

export default App;
