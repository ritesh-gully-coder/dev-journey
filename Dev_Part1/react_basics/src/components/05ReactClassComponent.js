//Class component is basically ES6 clases.

//
//                           |---------------------------|
//                           |                           |
//                           |                           |
//                           |          ES6              |
//    Properties------------>|         Class             |-------------->HTML(JSX)
//     (props)               |                           |
//                           |         (State)           |
//                           |                           |
//                           |---------------------------|
//
//

import React,{ Component } from 'react';

class App extends Component {
    render() {
        return <h1>Class component</h1>
    }
}

export default App;