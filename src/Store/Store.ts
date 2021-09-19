import {configureStore} from "@reduxjs/toolkit";
import {PageSelectorSlice} from "../Features/PageSelect/PageSelectSlice";
import {TodoSlice} from "../Features/TodoSlice/TodoSlice";

export const Store = configureStore({
    reducer: {
        pageSelect: PageSelectorSlice.reducer,
        todo: TodoSlice.reducer
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch