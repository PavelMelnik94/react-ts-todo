import { ITodo } from "../types/data";
import React, {useState} from "react";

interface ItodoItem extends ITodo {
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void
}


const handleTodoDelete = () => {

}


const TodoItem: React.FC<ItodoItem> = (props) => {
    const { id, title, complete, toggleTodo, removeTodo} = props;

    const [isChecked, setIsChecked] = useState(false);



    return <div>
        <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
        {title}
        <button onClick={() => removeTodo(id)}>x</button>
    </div>
}

export {TodoItem}