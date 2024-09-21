//Ref forwarding is a technique autoamtically passing a ref through a component to one of its children
import React from 'react'

// function ForwardingRefs() {
//   return (
//     <div>
//     <h1>Forwarding Refs</h1>
//     <input type='text' />
//         </div>
//   )
// }

//Here arrow function as passed as parameter of forwardRef draft method.
//As we know thatevery functiinal component receives props as parameter .
//When a component is passed as parameter to the create ref method ,
//it receives the ref attributes as its parameter ,
//and pass it as value to the ref attribute on the native input element,
// so on the input element ref attribute and assign the value of ref parameter,
//this ref parameter will point to the value of ref attribute from the ref attribute ,
//from the parent component 
 
//Or in other word you can say the ref is forwared from the parent component
// to the native input element 

const ForwardingRefs = React.forwardRef((props,ref)=>{
    return(
        <div>
           <input type='text' ref={ref}/>

        </div>
    )
}
)
export default ForwardingRefs;