import React, { useState, useEffect } from 'react';


function UseEffectRunEffectOnlyOnce() {
    const [x, setX] = useState(0);
    const [y,setY] =useState(0);


  const logMousePosition = e =>{
        console.log("mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
       console.log('useEffect called');
       window.addEventListener('mousemove',logMousePosition)
    },[])
    return (
        <div>
            <h1>
                useEffect Hook run only once
            </h1>
            <div>
                Hooks X:{x} Y :{y}
            </div>


        </div>
    )
}

export default UseEffectRunEffectOnlyOnce;