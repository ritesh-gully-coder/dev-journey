import React from 'react';
// import Ritesh from './components/04ReactFunctionalComponent';
// import Ritesh from './components/05ReactClassComponent';
// import Ritesh from './components/08ReactJsxWord';
// import Greet from './components/Greet';
// import Ritesh from './components/09Props';
import Message from './components/Message';
// import Ritesh from './components/10State';
// import Ritesh from './components/11setStateMethod';
import Ritesh from './components/12DestructuringPropsInFuncComponent';
import Greet from './components/13DestructuringPropsAndStateInClassComponent';



function App() {
  return (
    <div className="App">
        {/* It is general component call */}
        {/* <Ritesh/> */}

        {/* It is used for functional component */}
        <Ritesh name="Ritesh1" title="Kumar1"><p>This is children props</p></Ritesh>
        <Ritesh name="Ritesh2" title="Kumar2"><button>Action</button></Ritesh>
        <Ritesh name="Ritesh3"title="Kumar3"><p>testing children props</p></Ritesh>

        {/* It is used for class component  */}
        <Greet name="Ritesh1" title="Kumar1"><p>This is children props</p></Greet>
        <Greet name="Ritesh2" title="Kumar2"><button>Action</button></Greet>
        <Greet name="Ritesh3"title="Kumar3"><p>testing children props</p></Greet>

        {/* <Message/> */}
    </div>
  );
}

export default App;
