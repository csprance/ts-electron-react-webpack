import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import defaultState from './state';

export default createReducer(defaultState, (builder) =>
  builder
    .addCase(actions.increment, (state, action) => {
      state.value = state.value + 1;
    })
    .addCase(actions.decrement, (state, action) => {
      state.value = state.value - 1;
    })
);
