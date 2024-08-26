import React from 'react';

function FunctionClick() {
   function clickHandler(){
    console.log('Button clicked');
   }
    return(
        <div className='dummyClass'> 
          <button onClick={clickHandler}>Click</button>
        </div>
    )
}
export default FunctionClick;