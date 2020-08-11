import { valueSelector } from '../selectors';
import defaultState from '../state';

describe('App Selector', () => {
  it('Should Select the value from app state', () => {
    const value = valueSelector.resultFunc(defaultState);
    expect(value).toEqual(10);
  });
});
