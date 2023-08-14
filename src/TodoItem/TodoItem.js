import './TodoItem.css';
import { HiCheck, HiX } from "react-icons/hi";

function TodoItem(props){
    return(
      <li className="TodoItem">
        <span 
        className={`Icon Icon-check ${props.completed&&"Icon-check--active"}`}
        onClick={props.onComplete}
        ><HiCheck/></span>
        <p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>{props.text}</p>
        <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        ><HiX/></span>
      </li>
    );
  }
  export { TodoItem };

//para agregar una clase de forma dinamica
//Usamos el operador ternario, y preguntamos si el componente en sus propiedades tiene la propiedad completed
//y esa propiedad es verdadera entonces que me agregue la clase--->
//className={`${props.completed&&"Icon-check--active"}`}