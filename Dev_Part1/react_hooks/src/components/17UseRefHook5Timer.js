import React,{useEffect, useState,useRef} from 'react'

function UseRefHook5Timer() {
  const [timer,setTimer] = useState(0);

  const intervalRef  = useRef(0);

  useEffect(()=>{
     intervalRef.current = setInterval(()=>{
      setTimer(prevTimer=>prevTimer + 1)
    },1000)
    return()=>{
      clearInterval(intervalRef.current)
    }
  })
  
  return (
    <div>
<h1>Hook Timer - {timer}</h1>
<button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
    </div>
  )
}

export default UseRefHook5Timer;