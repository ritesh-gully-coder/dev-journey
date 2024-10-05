//multiple reducers
//This will avoid te complexity of merging the state  if it were be an object
// and also prevents us from duplicating code in the reducer 

import React, { useReducer } from 'react'

function UseReducerHookCounter5() {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }

    }
    const [count,dispatch] =  useReducer(reducer, initialState);
    const [countTwo,dispatchTwo] =  useReducer(reducer, initialState)
    return (
        <>
        <div>
            <h1>Count - {count}</h1>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
         <div>
         <h1>Count Two - {countTwo}</h1>
         <button onClick={()=>dispatchTwo('increment')}>Increment</button>
         <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
         <button onClick={()=>dispatchTwo('reset')}>Reset</button>
     </div>
     </>
    )
}

export default UseReducerHookCounter5;