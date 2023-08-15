import React from "react";
import { createPortal } from "react-dom";
import './TodoModal.css';

//al createPortal se le pasa como 1º param lo que queremos que aparezca, y el 2º param a donde se tiene que transportar
function TodoModal({ children }){
    return createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}
export { TodoModal };
