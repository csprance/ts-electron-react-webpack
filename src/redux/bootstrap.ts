import { Store } from '@reduxjs/toolkit';

import { registerHotkeys } from '../constants/hotkeys';
import logger from '../lib/logger';

// This is the callback function from the redux-persist persistor
// It is called after the store is rehydrated
export default (store: Store): void => {
  console.log('Bootstrapping application');
  logger.info('Bootstrapping Application');

  const { dispatch } = store;
  // Register all the apps hotkeys
  registerHotkeys(dispatch);
};
