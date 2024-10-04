import React from 'react';
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



function App() {
  return (
    <FetchingDataUsingUseEffect2/>
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
