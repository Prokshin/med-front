import { createSlice } from '@reduxjs/toolkit';

export const coreSlice = createSlice({
  name: 'core',
  initialState: {
    showModal: false,
    modalContent: {
      title: '',
      content: '',
    },
  },
  reducers: {
    loginRequest: (state, action) => {},
    logoutRequest: (state, action) => {},
    showModal: (state, action) => {
      state.showModal = true;
      state.modalContent.title = action.payload.title || '';
      state.modalContent.content = action.payload.content || '';
    },
    hideModal: (state) => { state.showModal = false; },
  },
});

export const { actions } = coreSlice;
export default coreSlice.reducer;
