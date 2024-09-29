//if useEffect will be executed on each render then might be performance issue.
//so for this we need condition so useEffect will run on that condition.

//for conditionally rendering secify 2nd parameter in useEffect

import React, { useState, useEffect } from 'react';


function UseEffectConditionallyRunEffect() {
    const [count, setCount] = useState(0);
    const [name,setName] =useState('');


    useEffect(() => {
        console.log('useEffect document updsate title');
        document.title = `you clicked ${count} times`
    },[count])
    return (
        <div>
            <h1>
                useEffect Hook run effect on condition
            </h1>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count}</button>

        </div>
    )
}

export default UseEffectConditionallyRunEffect;