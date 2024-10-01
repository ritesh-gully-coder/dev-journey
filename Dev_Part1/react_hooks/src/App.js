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



function App() {
  return (
    <UseEffectHookWithCleanUpContainer/>
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
