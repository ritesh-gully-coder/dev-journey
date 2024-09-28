//Prerequiites
//Basics of React
//Functional component
//Class Component
//props
//state,etc

//Better you go through react_basics Series.

//Hooks are  new fetaure addition in React version 16.8 which allow you
// to se React eatures without having to write a class.

//e.g:State of a component


//Why Hooks?

//Reason Set 1
//Understand how this keyword works in javascript.
//Remember to bind vent handlers in class components.
//Class don't minify very well nd make hot reloading very unreliable.

//Reason Set 2
//There is no particular way to reuse stateful component logic.
//HOC and render props pattern do address this problem.
//Makes the ode harder to follow.
//There is need to share stateful logic in a better way.

//Reason Set 3
//Create components for complex scenario such as data fetching and 
//subscribing to events related ode is not organized in one place.
//Ex:Data fetching -In componentDidMount and componentDidUpdate.
//Ex:Event listeners-In componentDidMount and componentWillUnmount.
//Because of stateful logic-Can not break components into smaller ones.

//Worthy Points
//React version 16.8 or more.
//Completely opt in.
//Hooks don't contain any breaking changes and the release is 100% backward-comptiable.
//Classes will not be removed from React.
//Can't use hooks inside of a class component.
//Hooks don't replace our exiting knowledge of react components.
//Instead,Hook provide a more direct API to the  React concepts you already know.


//Sumary
//Hooks are a new feature ddition in React 16.8 or higher.
//They allow you to use React fetaures without having o write a class.
//Avoid the whole confusion with this keyword.
//Allow you to reuse stateful logic
//Organize the logic nside a component into reusable isolated inputs.


//Hook rules
// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional.
//Hooks will not work in React class components.


import React from 'react'

function HooksIntro() {
  return (
    <div>Hooks_intro</div>
  )
}

export default HooksIntro;

