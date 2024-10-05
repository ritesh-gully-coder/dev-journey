//The React useCallback Hook returns a memoized callback function.

//Think of memoization as caching a value so that it does not need to be recalculated.

//This allows us to isolate resource intensive functions so that they will not automatically run on every render.

//The useCallback Hook only runs when one of its dependencies update.

//This can improve performance.

//what?
//useCallback is a hook that will return a memoized version of the callback function that only
//changes if one of the dependencies has changed

//why?
//it is usefuly only when passing callbacks to optimized child components that 
//rely on reference equality to prevent unnecesssary renders.



import React from 'react';

function UseCallbackHook() {
    return (
        <div>
            <h1>useCallback Hook</h1>
        </div>
    )
}

export default UseCallbackHook;