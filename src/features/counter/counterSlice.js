import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
  help: 'State is Available',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    hi: (state) => ({ ...state, value: state.value + 1 }),
    hi2: () => (initialState),
  },
});
export const { hi, hi2 } = counterSlice.actions;
export default counterSlice;
