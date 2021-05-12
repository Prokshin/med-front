import {createSlice} from "@reduxjs/toolkit";

export const coreSlice = createSlice({
    name: 'core',
    initialState: {},
    reducers: {
        loginRequest: (state, action) => {}
    }
})

export const actions = coreSlice.actions;
export default coreSlice.reducer
