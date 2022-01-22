import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchGreetingAsync,
  selectGreetingMessage,
} from './greetingSlice';

const Greetings = () => {
  const { greeting } = useSelector(selectGreetingMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingAsync());
  }, []);

  return (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
};

export default Greetings;
