import React,{useContext} from 'react'
import { CountContext } from '../App';

function UseReducerHookWithUseContextHookD() {
    const countContext = useContext(CountContext);

  return (
    <>
    <div>UseReducerHookWithUseContextHookD - {countContext.countState}</div>
   
    <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </>

  )
}

export default UseReducerHookWithUseContextHookD;