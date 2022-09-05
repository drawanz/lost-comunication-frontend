import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const lostCommunicationSlice = createSlice({
  name: 'lostCommunication',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action);
    },
  },
});

export const { add } = lostCommunicationSlice.actions;

export default lostCommunicationSlice.reducer;
