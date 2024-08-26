//Destructuring is Es6 fetaures

//this makes possible unpack values from array or properties from object into distinct variables.

//Destructuring improves code ability.

//Destructuring of props are of two ways.
//Way1:Destructing in function parameter itself.
//Way2:Destructing in function body.

//Way 1:->

// import React from 'react';

// const Ritesh = ({name,title}) => {
 
//     return(
//         <div className='dummyClass'> 
//             <h1>Hello {name} {title}</h1>
//         </div>
//     )
// }
// export default Ritesh;



//Way 2:->
import React from 'react';

const Ritesh = props => {
    const {name,title} = props
 
    return(
        <div className='dummyClass'> 
            <h1>Hello {name} {title}</h1>
        </div>
    )
}
export default Ritesh;
