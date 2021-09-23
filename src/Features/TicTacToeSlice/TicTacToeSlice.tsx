import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type GameMap = {
    id: number,
    value: '' | 'X' | 'O';
    newLine?: boolean
}

const initialState: Array<GameMap> = [
    {id: 0, value: '', newLine: true},
    {id: 1, value: ''},
    {id: 2, value: ''},
    {id: 3, value: '', newLine: true},
    {id: 4, value: ''},
    {id: 5, value: ''},
    {id: 6, value: '', newLine: true},
    {id: 7, value: ''},
    {id: 8, value: ''},
]

export const TicTacToeSlice = createSlice({
    name: "tic-tac-toe-slice",
    initialState,
    reducers: {
        setCell: (state, action:PayloadAction<{id: number, value: '' | 'X' | 'O'}>) => {
            let cellId = state.findIndex(cell => cell.id === action.payload.id)
            state[cellId].value = action.payload.value;
        }
    }
})

export const {setCell} = TicTacToeSlice.actions