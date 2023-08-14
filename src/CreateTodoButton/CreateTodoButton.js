import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
        <button 
            className='createTodoButton' 
            onClick={() => {console.log('Diste click');}} 
        >
            +
        </button>
    );
  }

  export { CreateTodoButton };