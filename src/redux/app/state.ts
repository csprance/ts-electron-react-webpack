import { AppState, DialogState } from './types';

export const defaultDialogState: DialogState = {
  settingsDialogOpen: false,
};

export const defaultState: AppState = {
  localVersion: '0.0.1',
  remoteVersion: '0.0.1',
  ...defaultDialogState,
};

export default defaultState;
