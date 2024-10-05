import React, { useState } from 'react';
import useCounter from './hooks/20useCounter';


function UseCounterHookCounterTwo() {
    const  [count,increment,decrement,reset] = useCounter(10,20)

   
  return (
    <div>
        <h2>Counter Two - {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseCounterHookCounterTwo;