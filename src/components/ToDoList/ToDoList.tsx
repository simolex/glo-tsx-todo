import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { Todo } from '../../models/todo-item'
import './ToDoList.scss'

interface ToDoListProps {
    todos: Todo[]
    updateTodo: Function,
    deleteTodo: Function
}

export const ToDoList = (props: ToDoListProps) => {

    const { todos, updateTodo, deleteTodo } = props

    const checkedList = (state: boolean) => {
        return todos
            .filter(item => item.isDone === state)
            .map(item =>
                (<ToDoListItem toDoItem={item} key={item.id} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
            )
    }

    const Task = {
        checked: true,
        unchecked: false
    }


    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {
                    checkedList(Task.unchecked)
                }
            </ul>
            <ul className="todo-list completed">
                {
                    checkedList(Task.checked)
                }
            </ul>
        </div>
    )
}