import { createAction } from "@reduxjs/toolkit";

export const toggleSettingsDialog = createAction<boolean>('app/TOGGLE_SETTINGS_DIALOG');
