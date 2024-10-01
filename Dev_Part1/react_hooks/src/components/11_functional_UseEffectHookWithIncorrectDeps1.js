import React, { useEffect, useState } from 'react'

function UseEffectHookWithIncorrectDeps2() {
    const [count, setCount] = useState(0);
    const tick = () => {
        setCount(prevCount=>prevCount + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [])
    return (
        <div>
            <h1>interval counter with hooks in another method </h1>
            <h2>{count}</h2>
        </div>
    )
}

export default UseEffectHookWithIncorrectDeps2;