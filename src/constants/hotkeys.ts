import * as electron from 'electron';
import * as mousetrap from 'mousetrap';
import { Dispatch } from '@reduxjs/toolkit';

export const registerHotkeys = (dispatch: Dispatch) => {
  // Reload Electron
  mousetrap.bind('ctrl+r', () => {
    electron.remote.getCurrentWindow().reload();
  });
};
