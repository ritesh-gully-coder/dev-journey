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
import EventHandlingInFuncComponent from './components/14EventHandlingInFuncComponent';
import EventHandlingInClassComponent from './components/15EventHandlingInClassComponent';
import BindingEventHandlerApproach from './components/16BindingEventHandlerApproach';
import BindingEventHandlerApproach1 from './components/16BindingEventHandlerApproach1';
import BindingEventHandlerApproach2 from './components/16BindingEventHandlerApproach2';
import BindingEventHandlerApproach3 from './components/16BindingEventHandlerApproach3';
import BindingEventHandlerApproach4 from './components/16BindingEventHandlerApproach4';
import MethodAsPropsParent from './components/17MethodAsPropsParent';
import ConditionalRenderingApproach1 from './components/18ConditionalRenderingApproach1';
import ConditionalRenderingApproach2 from './components/18ConditionalRenderingApproach2';
import ConditionalRenderingApproach3 from './components/18ConditionalRenderingApproach3';
import ConditionalRenderingApproach4 from './components/18ConditionalRenderingApproach4';
function App() {
    return (
        <div className="App">
            <ConditionalRenderingApproach4 />
            {/* <ConditionalRenderingApproach3/> */}
            {/* <ConditionalRenderingApproach2/> */}
            {/* <ConditionalRenderingApproach1/> */}
            {/* <MethodAsPropsParent/> */}
            {/* <BindingEventHandlerApproach4 /> */}
            {/* <BindingEventHandlerApproach3 /> */}
            {/* <BindingEventHandlerApproach2 /> */}
            {/* <BindingEventHandlerApproach1 /> */}
            {/* <BindingEventHandlerApproach /> */}
            {/* <EventHandlingInClassComponent/> */}
            {/* <EventHandlingInFuncComponent/> */}
            {/* It is general component call */}
            {/* <Ritesh/> */}

            {/* It is used for functional component */}
            {/* <Ritesh name="Ritesh1" title="Kumar1"><p>This is children props</p></Ritesh>
        <Ritesh name="Ritesh2" title="Kumar2"><button>Action</button></Ritesh>
        <Ritesh name="Ritesh3"title="Kumar3"><p>testing children props</p></Ritesh> */}

            {/* It is used for class component  */}
            {/* <Greet name="Ritesh1" title="Kumar1"><p>This is children props</p></Greet>
        <Greet name="Ritesh2" title="Kumar2"><button>Action</button></Greet>
        <Greet name="Ritesh3"title="Kumar3"><p>testing children props</p></Greet> */}

            {/* <Message/> */}


        </div>
    );
}

export default App;
