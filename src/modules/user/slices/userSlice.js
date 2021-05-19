import { createSlice } from '@reduxjs/toolkit';

const initState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    fetchUserRequest: (state, action) => {},
    fetchUserSuccess: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
