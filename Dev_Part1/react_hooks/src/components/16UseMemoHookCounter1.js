import React, { useState } from 'react';


function UseMemoHookCounter1() {
  const [counterOne,setCounterOne] = useState(0);
  const [counterTwo,setCounterTwo] = useState(0);

  const incrementOne = () =>{
    setCounterOne(counterOne + 1)
  }
  const incrementTwo = () =>{
    setCounterTwo(counterTwo + 1)
  }
  const isEven = () =>{
    return counterOne %2 === 0
  }
  return (
    <div>
        <h1>useMemo Hook Counter 1</h1>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven() ? 'Even':'Odd'}</span>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        
        </div>
  )
}

export default UseMemoHookCounter1;