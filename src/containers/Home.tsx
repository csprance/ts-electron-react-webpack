import * as React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import { valueSelector } from '../redux/app/selectors';
import { decrement, increment } from '../redux/app/actions';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Home: React.FC = ({}) => {
  const value = useSelector(valueSelector);
  const dispatch = useDispatch();
  const incrementValue = () => dispatch(increment());
  const decrementValue = () => dispatch(decrement());
  return (
    <Wrapper>
      Value: {value}
      <Button onClick={incrementValue}>Add</Button>
      <Button onClick={decrementValue}>Subtract</Button>
    </Wrapper>
  );
};

export default Home;
