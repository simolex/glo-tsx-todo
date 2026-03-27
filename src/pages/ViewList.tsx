import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { Todo } from "../models/todo-item"
import { RootState } from "../store"

export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)

    return (
        <div className="container">
            {todoList.map((item: Todo) => (<ListItem todo={item} key={item.id} />))}
        </div>
    )
}