import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import { AppThunk } from '../index';
import { timeout } from './utils';

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment(state) {
      state.value = state.value + 1;
    },
    decrement(state) {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = slice.actions;

export default slice.reducer;

export const incrementAsync = (): AppThunk => async (dispatch) => {
  try {
    await timeout(1500);
    dispatch(increment());
  } catch (err) {
    // Log an error here
  }
};

export const decrementAsync = (): AppThunk => async (dispatch) => {
  try {
    await timeout(1500);
    dispatch(decrement());
  } catch (err) {
    // Log an error here
  }
};
