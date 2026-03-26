import { ListItem } from "../components/ListItem/ListItem"
import { Todo } from "../models/todo-item"

interface HomePageProps {
    todos: Todo[]
}

export const HomePage = (props: HomePageProps) => {
    const { todos } = props
    return (
        <div className="container">
            {todos.map((item: Todo) => (<ListItem todo={item} key={item.id} />))}
        </div>
    )
}