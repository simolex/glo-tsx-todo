import { Todo } from '../../../models/todo-item'
import './ToDoListItem.scss'



interface ToDoListItemProps {
    toDoItem: Todo,
    updateTodo: Function,
    deleteTodo: Function
}

export const ToDoListItem = (props: ToDoListItemProps) => {

    const { toDoItem, updateTodo, deleteTodo } = props
    const { text, isDone } = toDoItem

    return (
        <li className="todo-list-item__wrapper">
            <span>{text}</span>
            <div className="todo-list-item__buttons">
                <button className="btn-trash" onClick={() => deleteTodo(toDoItem)}></button>
                <button className={isDone ? "btn-check" : "btn-uncheck"} onClick={() => updateTodo(toDoItem)}></button>
            </div>
        </li>
    )
}