import { Todo } from '../../../models/todo-item'
import { ToDoItem, ToDoListButton, ToDoListButtons, ToDoSpan } from './ToDoListItem.styled'
import './ToDoListItem.scss'

import TrashIcon from '../../../assets/images/trash.png'
import CheckIcon from '../../../assets/images/check.png'
import UncheckIcon from '../../../assets/images/uncheck.png'

interface ToDoListItemProps {
    toDoItem: Todo,
    updateTodo: Function,
    deleteTodo: Function
}

export const ToDoListItem = (props: ToDoListItemProps) => {

    const { toDoItem, updateTodo, deleteTodo } = props
    const { text, isDone } = toDoItem

    return (
        <ToDoItem>
            <ToDoSpan>{text}</ToDoSpan>
            <ToDoListButtons>
                <ToDoListButton icon={TrashIcon} onClick={() => deleteTodo(toDoItem)}></ToDoListButton>
                <ToDoListButton icon={isDone ? CheckIcon : UncheckIcon} onClick={() => updateTodo(toDoItem)}></ToDoListButton>
            </ToDoListButtons>
        </ToDoItem>
    )
}