//JSX:Javascript XML

//JSX-Extension to the javascript language syntax.

//Write XML-like code for elements and components.

//JSX tags have a tag name,attributes and children.

//JSX is not a necessity to wrigte React applications.

//JSX makes your react code simpler and elegant.

//JSX ultimately transpiles to pure Javascripty which is understood by the browsers.

import React from 'react';

const App = () =>{
    // return(
    //     <div className='dummyClass'> 
    //         <h1>Ritesh is here</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Ritesh is here')
    )
}
export default App;


//Jsx Differences:->
//class ->className
//for ->htmlFor
//camelCase property naming convention
//      onclick ->onClick
//      tabindex ->tabIndex

