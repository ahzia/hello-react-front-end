
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchGreetingAsync,
} from './greetingSlice';

export function Greetings() {
  // const greeting = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div>
        {/* <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button> */}
    </div>
  );
}

