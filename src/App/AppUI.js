import React from 'react';
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
import { TodoContext } from '../TodoContext/TodoContext';

function AppUI(){
  const {
      loading, 
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
  } = React.useContext(TodoContext)
    return(
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}

        {(!loading && searchedTodos.length === 0) && <TodosEmpty/>}
        {TodoSearch === '' && ''}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}//cada children debe tener una llave unica, en este caso nuestra prop text sera distinta
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}//hay que encapsular una fn dentro de otra fn para que no se re-rendirice muchas veces
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      {openModal && (
        <TodoModal>
          <TodoForm />
        </TodoModal>
      )}
    </>
    )
}
export { AppUI }