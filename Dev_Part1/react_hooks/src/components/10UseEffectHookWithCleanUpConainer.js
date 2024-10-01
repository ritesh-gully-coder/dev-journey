import React, { useState, useEffect } from 'react';
import UseEffectRunEffectOnlyOnce from './09UseEffectRunEffectOnlyOnce';


function UseEffectHookWithCleanUpContainer() {
    const [display, setDisplay] = useState(true);


    return (
        <div>
            <h1>
                useEffect Hook with clean up
            </h1>

            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display &&
                <UseEffectRunEffectOnlyOnce></UseEffectRunEffectOnlyOnce>
            }



        </div>
    )
}

export default UseEffectHookWithCleanUpContainer;