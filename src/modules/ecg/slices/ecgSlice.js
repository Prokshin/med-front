import { createSlice } from '@reduxjs/toolkit';

export const ecgSlice = createSlice({
  name: 'ecg',
  initialState: { loading: false, lastResult: {} },
  reducers: {
    sendEcgRequest: (state, action) => {
      state.loading = true;
    },
    sendEcgSuccess: (state, action) => {
      state.lastResult = action.payload;
      state.loading = false;
    },
    sendEcgError: (state, action) => {
      state.loading = false;
    },
  },
});

export const { actions } = ecgSlice;
export default ecgSlice.reducer;
