import { ListItem } from "../components/ListItem/ListItem"
import { Todo } from "../models/todo-item"

interface ViewListProps {
    todos: Todo[]
}

export const ViewList = (props: ViewListProps) => {
    const { todos } = props
    return (
        <div className="container">
            {todos.map((item: Todo) => (<ListItem todo={item} key={item.id} />))}
        </div>
    )
}