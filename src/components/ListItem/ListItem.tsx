import { Link } from "react-router-dom"
import { Todo } from "../../models/todo-item"
import styles from './ListItem.module.scss'

interface ListItemProps {
    todo: Todo
}
export const ListItem = (props: ListItemProps) => {
    const { todo } = props
    return (
        <Link className={`${styles.link} ${todo.isDone ? styles.done : styles.waited}`} to={`/list/${todo.id}`}>{todo.text}</Link>
    )
} 