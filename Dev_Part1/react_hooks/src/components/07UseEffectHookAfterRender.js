import React, { useState, useEffect } from 'react';


function UseEffectHookAfterRender() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
    return (
        <div>
            <h1>
                useEffect Hook After Render
            </h1>
            <button onClick={() => setCount(count + 1)}>Click {count}</button>

        </div>
    )
}

export default UseEffectHookAfterRender;