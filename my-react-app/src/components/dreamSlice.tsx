import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IWish {
  id:number,
  wish:string,
}

const initialState:IWish[] = [];

const wishSlice = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    addWish(state, action:PayloadAction<string>) {
      state.push({
        id: Date.now(),
        wish: action.payload,
      });
    },
    deleteWish(state, action:PayloadAction<number>) {
        return state.filter((wish)=>{
          return wish.id !== action.payload
        })
    },
  },
});

export const wishesReducer = wishSlice.reducer;
export const {addWish, deleteWish} = wishSlice.actions;