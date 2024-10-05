import React from 'react'

function UseCallbackHookButton({handleClick,children}) {
    
    console.log("Rendering - ",children);
  return (
    <div>
       <button onClick={handleClick}>{children}</button>
        </div>
  )
}

export default React.memo(UseCallbackHookButton);