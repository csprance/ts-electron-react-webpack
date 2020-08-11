import reducer from '../slice';
import defaultState from '../state';
import { increment, decrement } from '../slice';

describe('app Reducer', () => {
  it('Should Increment', () => {
    expect(reducer(defaultState, increment())).toEqual({
      value: 11,
    });
  });
  it('Should Decrement', () => {
    expect(reducer(defaultState, decrement())).toEqual({
      value: 9,
    });
  });
});
