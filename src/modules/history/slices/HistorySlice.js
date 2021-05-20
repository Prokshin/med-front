import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    info: [],
    loading: false,
  },
  reducers: {
    fetchHistoryRequest: (state, action) => {
      state.loading = true;
    },
    fetchHistorySuccess: (state, action) => {
      state.info = action.payload;
      state.loading = false;
    },
    fetchHistoryError: (state, action) => {
      state.loading = false;
    },
  },
});

export const { actions } = historySlice;
export default historySlice.reducer;
