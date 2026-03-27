import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { Todo } from "../models/todo-item"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { createAction, deleteAction, updateAction } from "../features/todolist"

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const createNewTodo = (text: string) => {
        dispatch(createAction(text))
    }

    const updateTodo = (todoItem: Todo) => {
        dispatch(updateAction(todoItem))
    }

    const deleteTodo = (todoItem: Todo) => {
        dispatch(deleteAction(todoItem))
    }

    return (
        <>
            <Form createNewTodo={createNewTodo} />
            <ToDoList todos={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </>
    )
}