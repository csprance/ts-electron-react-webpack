import reducer from '../reducer';
import * as actions from '../actions';
import defaultState from '../state';

describe('app Reducer', () => {
  it('Should Show Settings Dialog', () => {
    expect(reducer(defaultState, actions.toggleSettingsDialog(true))).toEqual({
      ...defaultState,
      toggleSettingsDialogOpen: true,
    });
  });
});
