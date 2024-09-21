//An Error Boundary in React is a component that catches JavaScript errors
// in its child component tree and gracefully handles them by rendering a 
//fallback UI. It prevents the entire app from crashing due to errors in part of the UI.

//Error handling phase methods
//1)static getDerivedStateFromError(error):->
//This is called when an error is thrown in a child component.
// It allows the error boundary to update its state so it can display a fallback UI.

//2)componentDidCatch(error,info):->
//This is where the error details are logged or reported.

//When an error is caught, the error boundary renders a
// fallback UI (such as an error message) instead of crashing the entire application.

//Limitations: Error boundaries only catch errors in:=>

//Lifecycle methods like render(), constructor(), componentDidMount(), etc.
//Not for errors in event handlers, async code, or errors outside the component tree (e.g., API requests).


import React from 'react'

function ErrorBoundary1({courseName}) {
    if(courseName === 'Coding'){
        throw new Error('Not simple')
    }
    return (
        <div>
            {/* <h1>Error Boundary</h1> */}
            {courseName}
        </div>
    )
}

export default ErrorBoundary1;