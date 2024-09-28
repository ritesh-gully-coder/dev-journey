//Step 1:Create a functional component.
//Step 2:We need state property to initialize to zero 
//Step 3: We need a method capable of setting that state property value  .
//At the top of your component, import the useState Hook.

//We initialize our state by calling useState in our function component.
//useState accepts an initial state and returns two values:
//The current state.
//A function that updates the state.


//Rules of Hooks
//Only call hooks at the top level.
//Don't call hooks inside loops,conditions,or nested functions.
//Only call hooks from React functions.
//Call them from within React functional component and not just any regular javascript functions.


import React,{useState} from 'react';

function UseStateHook() {
    const [count,setCount] = useState(0);

  return (
    <div>
       <h1>useState Hook with Counter</h1>
       <button onClick={()=>setCount(count + 1)}>Click {count}</button>
    </div>
   
  )
}

export default UseStateHook;
