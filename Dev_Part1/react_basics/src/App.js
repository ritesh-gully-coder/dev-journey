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
import ListRendering1 from './components/19ListRendering1';
import ListRendering2 from './components/19ListRendering2';
import ListRendering3 from './components/19ListRendering3';
import ListRendering4 from './components/19ListRendering4';
import ListRendering5 from './components/19ListRendering5';
import ListAndKeys from './components/19ListRendering6a';
import ListRendering6 from './components/19ListRendering6';
import ListRendering7 from './components/19ListRendering7';
import ListRenderingndexAsKeyAntiPattern1 from './components/20ListRenderingndexAsKeyAntiPattern1';
import ListRenderingndexAsKeyAntiPattern1a from './components/20ListRenderingndexAsKeyAntiPattern1a';
import StylingAndCssBasics4 from './components/21StylingAndCssBasics4';
import StylingAndCssBasics2 from './components/21StylingAndCssBasics2';
import StylingAndCssBasics3 from './components/21StylingAndCssBasics3';
import StylingAndCssBasics5 from './components/21StylingAndCssBasics5';
import StylingAndCssBasics6 from './components/21StylingAndCssBasics6';
import StylingAndCssBasics7 from './components/21StylingAndCssBasics7';
import './21appStyles.css';
import styles from './21appStyles.module.css';
import FormHandling2 from './components/22FormHandling2';
import FormHandling3 from './components/22FormHandling3';
import FormHandling4 from './components/22FormHandling4';
import FormHandling5 from './components/22FormHandling5';
import FormHandling6 from './components/22FormHandling6';
import ComponentMountingLifeCycleMethods3 from './components/23ComponentMountingLifeCycleMethods3';
import ComponentMountingLifeCycleMethods4A from './components/23ComponentMountingLifeCycleMethods4A';
import ComponentMountingLifeCycleMethods4B from './components/23ComponentMountingLifeCycleMethods4B';
import ComponentUpdatingLifeCycleMethods2A from './components/24ComponentUpdatingLifecycleMethods2A';
import FragmentsDemo from './components/27FragmentsDemo';
import FragmentsDemo1 from './components/27FragmentsDemo1';
import FragmentsDemo2 from './components/27FragmentsDemo2';
import FragmentsDemo3Table from './components/27FragmentsDemo3Table';
import FragmentsDemo3Table1 from './components/27FragmentsDemo3Table1';
import FragmentsDemo3Table2 from './components/27FragmentsDemo3Table2';
import FragmentsDemo3Table3 from './components/27FragmentsDemo3Table3';
import ParentComponent from './components/28ParentComponent';
import ParentComponent1 from './components/28ParentComponent1';
import MemoComponentParent from './components/29MemoComponentParent';
import RefsDemo from './components/30RefsDemo';
import RefsDemo1 from './components/30RefsDemo1';
import RefsDemo2 from './components/30RefsDemo2';
import RefsWithClassComponentParent from './components/31RefsWithClassComponentParent';
import ForwardingRefsParent from './components/32ForwardingRefsParent';
import PortalDemo from './components/33PortalDemo';
import PortalDemo1 from './components/33PortalDemo1';
import ErrorBoundary from './components/34ErrorBoundary';
import ErrorBoundary1 from './components/34ErrorBoundary1';
import ErrorBoundary1Solution from './components/34ErrorBoundary1Solution';
import HOC_ClickCounter from './components/35HOC_ClickCounter';
import HOC_HoverCounter from './components/35HOC_HoverCounter';
import HOC_WithCounter from './components/35HOC_WithCounter';
import HOC_WithCopunterClickCounter from './components/35HOC_WithCounterClickCounter';
import HOC_WithCounterHoverCounter from './components/35HOC_WithCounterHoverCounter';
import HOC_WithCopunterClickCounter1 from './components/35HOC_WithCounterClickCounter1';
import HOC_WithCounterHoverCounter1 from './components/35HOC_WithCounterHoverCounter1';
import HOC_WithCopunterClickCounter2 from './components/35HOC_WithCounterClickCounter2';
import HOC_WithCounterHoverCounter2 from './components/35HOC_WithCounterHoverCounter2';
import RenderClickCounter from './components/36RenderClickCounter';
import RenderHoverCounter from './components/36RenderHoverCounter';
import RenderUser from './components/36RenderUser';
import RenderUser1 from './components/36RenderUser1';
import RenderUser2 from './components/36RenderUser2';
import RenderUser3 from './components/36RenderUser3';
import RenderCounter from './components/36RenderCounter';
import RenderCounterClick from './components/36RenderCounterClick';
import RenderCounterHover from './components/36RenderCounterHover';
import ContextComponentC from './components/37ContextComponentC';
// import { UserProvider } from './components/37UserContext';
import { UserProvider } from './components/37UserContext1';
import ContextComponentC1 from './components/37ContextComponentC1';
import HttpGetMethodDemo from './components/38_6HttpGetMethodDemo';
import HttpPostMethodDemo from './components/38_7HttpPostMethodDemo';


function App() {
    return (
        <div className="App">
            <HttpPostMethodDemo />
            {/* <HttpGetMethodDemo/> */}
            {/* <UserProvider value="Ritesh">
            <ContextComponentC1/>
            </UserProvider> */}
            {/* <UserProvider value="Ritesh">
            <ContextComponentC/>
            </UserProvider> */}

            {/* <RenderCounter render={(count, incrementCount) => (
                <RenderCounterHover
                    count={count}
                    incrementCount={incrementCount}
                />
            )}
            />
            <RenderCounter render={(count, incrementCount) => (
                <RenderCounterClick
                    count={count}
                    incrementCount={incrementCount}
                />
            )}
            /> */}
            {/* <RenderUser3 render = {(isLoggedIn)=>isLoggedIn ? 'Ritesh' : 'Guest'}/>
              <RenderUser2 name = {(isLoggedIn)=>isLoggedIn ? 'Ritesh' : 'Guest'}/>
             <RenderUser1 name = {()=>'Ritesh'}/>
            <RenderUser name="Ritesh"/>
            <RenderHoverCounter/>
            <RenderClickCounter/> */}
            {/* <HOC_WithCounterHoverCounter2 />
            <HOC_WithCopunterClickCounter2 /> */}
            {/* <HOC_WithCounterHoverCounter1/>
            <HOC_WithCopunterClickCounter1/> */}
            {/* <HOC_WithCounterHoverCounter/>
            <HOC_WithCopunterClickCounter/> */}
            {/* <HOC_HoverCounter/> 
             <HOC_ClickCounter/> */}
            {/* <ErrorBoundary1Solution>
                <ErrorBoundary1 courseName="Computer" />
            </ErrorBoundary1Solution>
            <ErrorBoundary1Solution>
                <ErrorBoundary1 courseName="Science" />
            </ErrorBoundary1Solution>
            <ErrorBoundary1Solution>
                <ErrorBoundary1 courseName="Coding" />
            </ErrorBoundary1Solution> */}
            {/* <ErrorBoundary1Solution>
                <ErrorBoundary1 courseName="Computer" />
                <ErrorBoundary1 courseName="Science" />
                <ErrorBoundary1 courseName="Coding" />
            </ErrorBoundary1Solution> */}
            {/* <ErrorBoundary1 courseName="Computer"/>
            <ErrorBoundary1 courseName ="Science"/>
            <ErrorBoundary1 courseName ="Coding"/> */}
            {/* <ErrorBoundary courseName="Computer"/>
            <ErrorBoundary courseName ="Science"/> */}
            {/* <ErrorBoundary courseName ="Coding"/>by tis entire application crshes */}
            {/* <PortalDemo1/> */}
            {/* <PortalDemo/> */}
            {/* <ForwardingRefsParent/> */}
            {/* <RefsWithClassComponentParent/> */}
            {/* <RefsDemo2/> */}
            {/* <RefsDemo1 /> */}
            {/* <RefsDemo /> */}
            {/* <MemoComponentParent /> */}
            {/* <ParentComponent1 /> */}
            {/* <ParentComponent/> */}
            {/* <FragmentsDemo3Table3 /> */}
            {/* <FragmentsDemo3Table2 /> */}
            {/* <FragmentsDemo3Table1/> */}
            {/* <FragmentsDemo3Table/> */}
            {/* <FragmentsDemo2 /> */}
            {/* <FragmentsDemo1 /> */}
            {/* <FragmentsDemo/> */}
            {/* <ComponentUpdatingLifeCycleMethods2A/> */}
            {/* <ComponentMountingLifeCycleMethods4B /> */}
            {/* <ComponentMountingLifeCycleMethods4A/> */}
            {/* <ComponentMountingLifeCycleMethods3/> */}
            {/* <FormHandling6/> */}
            {/* <FormHandling5/> */}
            {/* <FormHandling4/> */}
            {/* <FormHandling3/> */}
            {/* <FormHandling2/> */}
            {/* <StylingAndCssBasics7  /> */}
            {/* <h1 className='error'>Error</h1> */}
            {/* <h1 className={styles.success}>Success</h1> */}
            {/* <StylingAndCssBasics6 /> */}
            {/* <StylingAndCssBasics5/> */}
            {/* <StylingAndCssBasics4 primary={true} /> */}
            {/* <StylingAndCssBasics4 primary={false}/> */}
            {/* <StylingAndCssBasics3  primary={false}/> */}
            {/* <StylingAndCssBasics3  primary={true}/> */}
            {/* <StylingAndCssBasics2 /> */}
            {/* <ListRenderingndexAsKeyAntiPattern1a/> */}
            {/* <ListRenderingndexAsKeyAntiPattern1/> */}
            {/* <ListRendering7 /> */}
            {/* <ListRendering6 /> */}
            {/* <ListRendering5 /> */}
            {/* <ListRendering4 /> */}
            {/* <ListRendering3 /> */}
            {/* <ListRendering2 /> */}
            {/* <ListRendering1 /> */}
            {/* <ConditionalRenderingApproach4 /> */}
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
