import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import defaultState from './state';

export default createReducer(defaultState, (builder) =>
  builder.addCase(actions.toggleSettingsDialog, (state, action) => {
    state.settingsDialogOpen = action.payload;
  })
);
