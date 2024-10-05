import React, { useReducer } from 'react';
import HooksIntro from './components/00HooksIntro';
import UseStateHook from './components/01UseStateHook';
import UseStateWithPreviousState from './components/02UseStateWithPreviousState';
import UseStateWithObject from './components/03UseStateWithObject';
import UseStateWIthArray from './components/04UseStateWIthArray';
import UseEffectHook from './components/05UseEffectHook';
import UseEffectHookAfterRender from './components/07UseEffectHookAfterRender';
import UseEffectConditionallyRunEffect from './components/08UseEffectConditionallyRunEffect';
import UseEffectRunEffectOnlyOnce from './components/09UseEffectRunEffectOnlyOnce';
import UseEffectHookWithCleanUpContainer from './components/10UseEffectHookWithCleanUpConainer';
import UseEffectHookWithIncorrectDeps from './components/11_class_UseEffectHookWithIncorrectDeps'
import UseEffectHookWithIncorrectDeps1 from './components/11_functional_UseEffectHookWithIncorrectDeps';
import UseEffectHookWithIncorrectDeps2 from './components/11_functional_UseEffectHookWithIncorrectDeps1';
import UseEffectHookWithIncorrectDeps3 from './components/11_functional_UseEffectHookWithIncorrectDeps2';
import FetchingDataUsingUseEffect from './components/12FetchingDataUsingUseEffect';
import FetchingDataUsingUseEffect1 from './components/12FetchingDataUsingUseEffect1';
import FetchingDataUsingUseEffect2 from './components/12FetchingDataUsingUseEffect2';
import UseContextHookDemoC from './components/13UseContextHookDemoC';
import UseContextHookDemoC1 from './components/13UseContextHookDemoC1';
import UseContextHookDemoC2 from './components/13UseContextHookDemoC2';
import UseReducerHookCounter1 from './components/14UseReducerHookCounter1';
import UseReducerHookCounter2 from './components/14UseReducerHookCounter2';
import UseReducerHookCounter3 from './components/14UseReducerHookCounter3';
import UseReducerHookCounter4 from './components/14UseReducerHookCounter4';
import UseReducerHookCounter5 from './components/14UseReducerHookCounter5';
import UseReducerHookWithUseContextHook from './components/14UseReducerHookWithUseContextHook';
import UseReducerHookWithUseContextHookB from './components/14UseReducerHookWithUseContextHookB';
import UseReducerHookWithUseContextHookC from './components/14UseReducerHookWithUseContextHookC';
import UseReducerHookWithUseContextHookA from './components/14UseReducerHookWithUseContextHookA';
import UseReducerUsingFetchData from './components/14UseReducerUsingFetchData';
import UseReducerUsingFetchData1 from './components/14UseReducerUsingFetchData1';

export const UserContext = React.createContext();//used for UseContextHookDemoC
export const ChannelContext = React.createContext();//used for UseContextHookDemoC1


export const CountContext = React.createContext();
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
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <UseReducerUsingFetchData1/>
    // <UseReducerUsingFetchData/>
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div>
    //     Count - {count}
    //     <UseReducerHookWithUseContextHookA />
    //     <UseReducerHookWithUseContextHookB />
    //     <UseReducerHookWithUseContextHookC />
    //   </div>

    // </CountContext.Provider>

    // <UseReducerHookWithUseContextHook/>
    // <UseReducerHookCounter5/>
    // <UseReducerHookCounter4/>
    // <UseReducerHookCounter3/>
    // <UseReducerHookCounter2/>
    // <UseReducerHookCounter1/>
    // <UserContext.Provider value={'Ritesh'}>
    //   <ChannelContext.Provider value={'Kumar'}>
    //     <UseContextHookDemoC2 />
    //   </ChannelContext.Provider>
    // </UserContext.Provider>
    // <UserContext.Provider value={'Ritesh'}>
    //   <ChannelContext.Provider value={'Kumar'}>
    //     <UseContextHookDemoC1 />
    //   </ChannelContext.Provider>
    // </UserContext.Provider>
    // <UserContext.Provider value={'Ritesh'}>
    //   <UseContextHookDemoC />
    // </UserContext.Provider>

    // <FetchingDataUsingUseEffect2/>
    // <FetchingDataUsingUseEffect1/>
    // <FetchingDataUsingUseEffect/>
    // <UseEffectHookWithIncorrectDeps3/>
    // <UseEffectHookWithIncorrectDeps2/>
    // <UseEffectHookWithIncorrectDeps1/>
    // <UseEffectHookWithIncorrectDeps/>
    // <UseEffectHookWithCleanUpContainer/>
    // <UseEffectRunEffectOnlyOnce/>
    // <UseEffectConditionallyRunEffect/>
    // <UseEffectHookAfterRender/>
    // <UseEffectHook/>
    // <UseStateWIthArray />
    // <UseStateWithObject />
    // <UseStateWithPreviousState />
    // <UseStateHook/>
    //  <HooksIntro/>
  );
}

export default App;
