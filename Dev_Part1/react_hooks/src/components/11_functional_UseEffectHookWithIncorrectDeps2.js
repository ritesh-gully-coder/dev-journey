import React, { useEffect, useState } from 'react'

function UseEffectHookWithIncorrectDeps3({someProp}) {
    const [count, setCount] = useState(0);
    const tick = () => {
        setCount(prevCount=>prevCount + 1)
    }
   
    useEffect(() => {
        function doSomething(){
            console.log(someProp);
        }
        doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [someProp])
    return (
        <div>
            <h1>interval counter in functional components </h1>
            <h2>{count}</h2>
        </div>
    )
}

export default UseEffectHookWithIncorrectDeps3;