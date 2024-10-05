import React, { useState } from 'react';


function UseMemoHookCounter() {
  const [counterOne,setCounterOne] = useState(0);
  const [counterTwo,setCounterTwo] = useState(0);

  const incrementOne = () =>{
    setCounterOne(counterOne + 1)

  }
  const incrementTwo = () =>{
    setCounterTwo(counterTwo + 1)

  }
  return (
    <div>
        <h1>useMemo Hook Counter</h1>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        
        </div>
  )
}

export default UseMemoHookCounter;