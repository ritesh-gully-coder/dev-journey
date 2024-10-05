//useReducer with complex state and action example
//here we are using initialState as an object
//suppose you want to mainatin two different counters then as follows

import React, { useReducer } from 'react'

function UseReducerHookCounter4() {
    const initialState = {
        firstCounter: 0,
        secondCounter: 10
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {...state, firstCounter: state.firstCounter + action.value }
            case 'decrement':
                return {...state, firstCounter: state.firstCounter - action.value }
            case 'increment2':
                return { ...state,secondCounter: state.secondCounter + action.value }
            case 'decrement2':
                return { ...state,secondCounter: state.secondCounter - action.value }
            case 'reset':
                return initialState
            default:
                return state
        }

    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>First Counter - {count.firstCounter}</h1>
            <h1>Second Counter - {count.secondCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment Counter 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement Counter 1</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counterr 2</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment Counter 1 by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement Counter 1 by 5</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment Counter 2 by 5</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement counter 2 by 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerHookCounter4;