import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { Todo } from "./models/todo-item";

const todos: Todo[] = [
    {
        id: 0,
        text: 'Задание 1',
        isDone: false
    },
    {
        id: 1,
        text: 'Задание 2',
        isDone: false
    },
    {
        id: 2,
        text: 'Задание 3',
        isDone: true
    },
    {
        id: 3,
        text: 'Задание 4',
        isDone: true
    }
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <ToDoListPage />
            },
            {
                path: '/list',
                element: <ViewList todos={todos} />,

            },
            {
                path: '/list/:id',
                element: <ViewListItem todos={todos} />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
], { basename: '/' })