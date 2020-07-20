import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const appStateSelector = (state: RootState, _props?: any) => state.app;

export const valueSelector = createSelector(
  appStateSelector,
  (app) => app.value
);
