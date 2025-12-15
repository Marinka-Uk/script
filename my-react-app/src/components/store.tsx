import { configureStore } from "@reduxjs/toolkit";
import {wishesReducer} from './dreamSlice'

export type RootState = ReturnType<typeof store.getState>


export const store = configureStore({
    reducer: {
        wishes: wishesReducer,
    }
})