import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../models/todo-item'

interface TodoState {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: state.todos.length,
                text: action.payload,
                isDone: false
            }
            state.todos.push(newTodo) // поправить на push
        },
        updateAction: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.map(item => {
                if (item.id === action.payload.id) {
                    item.isDone = !item.isDone
                }
                return item;
            })
        },
        deleteAction: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.filter(item => item.id !== action.payload.id);
        },
    },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions
export default todoSlice.reducer