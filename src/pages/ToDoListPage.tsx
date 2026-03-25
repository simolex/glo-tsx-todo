import { Form } from "../components/form/Form"
import { Header } from "../components/header/Header"
import { ToDoList } from "../components/todolist/ToDoList"

export const ToDoListPage = () =>{
    return (
        <>
            <Header></Header>
            <Form></Form>
            <ToDoList></ToDoList>
        </>
    )
}