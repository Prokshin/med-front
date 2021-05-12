import { createSlice } from '@reduxjs/toolkit';

const initState = {
  info: {
    firstName: 'Вася',
    lastName: 'Васин',
    email: 'vasya@mail.ru',
  },
};

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
