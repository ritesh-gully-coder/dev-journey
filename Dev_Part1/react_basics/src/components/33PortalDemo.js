//Portals provide way to render children into a DOM node 
//that exists outside the DOM hierachy of the parent component.

//Now Portals working flow will underatand
//When weare not using React Portals then our application runs in under root id as <div id="root"></div>
//Lets do with React portals

//React portals provides the ability to break out of this DOM tree,
//so you can render a component onto a DOM that is not under this root element.

//first step :->introduce in index.html as
//<div id="portal-root"></div>

//Second step:->Created a function component named as PortalDemo and called in App component.

//Third Step:->Use ReactDOM.createPortal()

//Forth step :->Render method instead of simply returning JSX ,returning ReactDOM.createPortal
//and ReactDOM.createPortal method takes two parameter,
//first parameter is the JSX as you want to render 
//and second parameter is the DOM node to mount element on to 
//say document.getElementById('portal-root')

//As Result Portal Demo display in broswerand main div under the portal-root

//Why we need React Portal?
//so will understand in next component files.
 


import React from 'react'
import ReactDOM from 'react-dom';

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,
        document.getElementById('portal-root')
    )
    
}

export default PortalDemo;
