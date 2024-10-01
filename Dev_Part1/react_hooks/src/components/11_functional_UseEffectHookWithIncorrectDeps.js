import React, { useEffect, useState } from 'react'

function UseEffectHookWithIncorrectDeps1() {
    const [count, setCount] = useState(0);
    const tick = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [count])//if count gives as dps then working as expected id remove count then will not work as expected.
    return (
        <div>
            <h1>interval counter with hooks </h1>
            <h2>{count}</h2>
        </div>
    )
}

export default UseEffectHookWithIncorrectDeps1;