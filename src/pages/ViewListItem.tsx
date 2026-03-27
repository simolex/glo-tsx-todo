import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Todo } from "../models/todo-item"
import { useSelector } from "react-redux"
import { RootState } from "../store"


export const ViewListItem = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const [todo, setTodo] = useState<Todo>()


    useEffect(() => {
        const searchTodo = todoList.find((todo) => String(todo.id) === id)
        if (searchTodo) {
            setTodo(searchTodo)
        } else {
            navigate('/404')
        }
    }, [todoList, id, navigate])
    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )
}