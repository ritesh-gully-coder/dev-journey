//A functional component is a javascript function that 
//accepts an input of properties and returns html described ui.

//
//                           |---------------------------|
//                           |                           |
//                           |                           |
//                           |        Javascript         |
//    Properties------------>|         Functions         |-------------->HTML(JSX)
//     (props)               |                           |
//                           |                           |
//                           |                           |
//                           |---------------------------|
//
//

//Method1:->with normal function
// import React from 'react';

// function App() {
//     return<h>Ritesh Kumar</h>
// }

//export default App;


//Method2:->with arrow function
 import React from 'react';

const App = () =><h1>Ritesh Kumar</h1>

export default App;
