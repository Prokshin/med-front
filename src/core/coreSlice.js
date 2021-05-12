import { createSlice } from '@reduxjs/toolkit';

export const coreSlice = createSlice({
  name: 'core',
  initialState: {},
  reducers: {
    loginRequest: (state, action) => {},
  },
});

export const { actions } = coreSlice;
export default coreSlice.reducer;
