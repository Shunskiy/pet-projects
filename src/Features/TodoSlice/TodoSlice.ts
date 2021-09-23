import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TodoState = {
    id: number
    text: string
    complete: boolean
}[]

export type TodoAction = {
    id: number
    text: string
    complete: boolean
}

type TodoId = {
    id: number
}

const initialState: TodoState = [
    {
        id: Date.now(),
        text: "👋 Добавь новые задания",
        complete: false
    },
    {
        id: Date.now() + 1,
        text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        complete: false
    }
]

export const TodoSlice = createSlice({
    name: "todo-slice",
    initialState,
    reducers: {
        updateList: (state, action:PayloadAction<TodoAction>) => {
            let updatedTodoIndex = state.findIndex(todo => todo.id === action.payload.id);
            state[updatedTodoIndex] = action.payload
        },
        addNewTodo: (state, action:PayloadAction<TodoAction>) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action:PayloadAction<TodoId>) => {
            let todoIndex = state.findIndex(todo => todo.id === action.payload.id)
            state.splice(todoIndex, 1)
        }
    }
})

export const {addNewTodo, updateList, deleteTodo} = TodoSlice.actions