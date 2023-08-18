import './TodoList.css';

function TodoList(props){
    const renderFunc = props.children || props.render;
    return(
        <section className='Todolist-container'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults()}
        
        {props.searchedTodos.map(renderFunc)}


        <ul className="TodoList">
            {props.children}
        </ul>
        </section>
    );
  }

  export { TodoList };