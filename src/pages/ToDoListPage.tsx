import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { Todo } from "../models/todo-item"

export const ToDoListPage = () => {

    const [todos, setTodos] = useState<Todo[]>([])


    const createNewTodo = (text: string) => {
        const newTodo: Todo = {
            id: todos.length,
            text,
            isDone: false
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (todoItem: Todo) => {
        todoItem.isDone = !todoItem.isDone
        setTodos([...todos.filter(item => item.id !== todoItem.id), todoItem])
    }

    const deleteTodo = (todoItem: Todo) => {
        setTodos(todos.filter(item => item.id !== todoItem.id))
    }

    return (
        <>
            <Header></Header>
            <Form createNewTodo={createNewTodo} />
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </>
    )
}