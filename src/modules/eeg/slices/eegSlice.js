import { createSlice } from '@reduxjs/toolkit';

export const eegSlice = createSlice({
  name: 'eeg',
  initialState: { loading: false, lastResult: {} },
  reducers: {
    sendEegRequest: (state, action) => {
      state.loading = true;
    },
    sendEegSuccess: (state, action) => {
      state.lastResult = action.payload;
      state.loading = false;
    },
    sendEegError: (state, action) => {
      state.loading = false;
    },
  },
});

export const { actions } = eegSlice;
export default eegSlice.reducer;
