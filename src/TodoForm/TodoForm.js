import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit=(event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);  
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value )
    }
    return(
        <form onSubmit={onSubmit}
            >
            <label>Write new ToDo</label>
            <textarea
                placeholder="New ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Exit</button>
            <button className="TodoForm-button TodoForm-button--add" type="submit">Add ToDo</button>
            </div>
        </form>
    )
}
export { TodoForm };