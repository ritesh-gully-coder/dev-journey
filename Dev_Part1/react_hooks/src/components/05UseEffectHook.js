//The useEffect Hook allows you to perform side effects in your components.

//Some examples of side effects are: fetching data, directly updating the DOM, and timers.

//useEffect accepts two arguments. The second argument is optional.

//useEffect(<function>, <dependency>)

//useEffect runs on every render. That means that when the count changes,
// a render happens, which then triggers another effect.

//We should always include the second parameter which accepts an array.
// We can optionally pass dependencies to useEffect in this array.

//1) No dependency passed:

// useEffect(() => {
//     //Runs on every render
//   });

//2. An empty array:

// useEffect(() => {
//     //Runs only on the first render
//   }, []);


//3. Props or state values:

// useEffect(() => {
//     //Runs on the first render
//     //And any time any dependency value changes
//   }, [prop, state]);


//If there are multiple dependencies, they should be included in the useEffect dependency array.

//Effect Cleanup
//Some effects require cleanup to reduce memory leaks.

//Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

//We do this by including a return function at the end of the useEffect Hook.


import { useState, useEffect } from "react";

function UseEffectHook() {
    return (
        <div>
            <h1>useEffect Intro</h1>
        </div>
    )
}

export default UseEffectHook;