import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    tokenDataTransfer:(state,action)=>{
        state.value = action.payload;
    }
  },
})


export const {  tokenDataTransfer } = storageSlice.actions;

export default storageSlice.reducer;