import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TokenState {
  token: string
}

const initialState: TokenState = {
  token: '',
}



const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  },
});
export const { setToken} = usersSlice.actions;
export default usersSlice.reducer;
