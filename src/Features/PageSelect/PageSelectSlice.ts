import {createSlice} from "@reduxjs/toolkit";

export interface PageSelectState {
    page: 'todo' | 'tictactoe' | 'weather'
}

const initialState: PageSelectState = {
    page: 'todo'
}

export const PageSelectorSlice = createSlice({
    name: "select-page",
    initialState,
    reducers: {
        toTodo: (state) => {
            state.page = "todo"
        },
        toTicTacToe: (state) => {
            state.page = "tictactoe"
        },
        toWeather: (state) => {
            state.page = 'weather'
        }
    }
})

export const {toTodo, toTicTacToe, toWeather} = PageSelectorSlice.actions