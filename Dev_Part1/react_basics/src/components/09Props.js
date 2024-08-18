//Props is just an object that contains the attributes and their values,
//which have been passed from the parent component so we can get the value using props.

//Functional component props 
import React from 'react';

const Ritesh = (props) => {
    console.log("props",props);
    return(
        <div className='dummyClass'> 
            <h1>Hello {props.name} {props.title}</h1>
            {props.children}
        </div>
    )
}
export default Ritesh;


