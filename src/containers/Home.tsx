import * as React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import { valueSelector } from '../redux/app/selectors';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../redux/app/slice';

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 20% auto 20%;
  grid-template-rows: 20% auto 20%;
`;

const Home: React.FC = ({}) => {
  const value = useSelector(valueSelector);
  const dispatch = useDispatch();
  const incrementValue = () => dispatch(increment());
  const decrementValue = () => dispatch(decrement());
  const asyncIncrement = () => dispatch(incrementAsync());
  const asyncDecrement = () => dispatch(decrementAsync());
  return (
    <Wrapper>
      <div
        style={{
          gridColumnStart: 2,
          gridRowStart: 2,
          alignSelf: 'center',
          justifySelf: 'center',
        }}
      >
        Value: {value}
        <Button style={{ gridColumnStart: 1 }} onClick={incrementValue}>
          Add
        </Button>
        <Button onClick={asyncIncrement}>Add Async</Button>
        <Button onClick={decrementValue}>Subtract</Button>
        <Button onClick={asyncDecrement}>Subtract Async</Button>
      </div>
    </Wrapper>
  );
};

export default Home;
