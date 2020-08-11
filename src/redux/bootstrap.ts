import { Store } from '@reduxjs/toolkit';

import { registerHotkeys } from '../constants/hotkeys';
import logger from '../lib/logger';

// This function is run once when the application starts up
export default (store: Store): void => {
  logger.info('Bootstrapping Application');

  const { dispatch } = store;
  // Register all the apps hotkeys
  registerHotkeys(dispatch);
};
