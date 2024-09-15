import React, { Component } from 'react'

class FragmentsDemo extends Component {
  render() {
    return (

      // <h1>Fragments Demo</h1>
      // <p>details of fragments</p>
      //wrapping elemts in to div below
      <div>
        <h1>Fragments Demo</h1>
        <p>details of fragments</p>
      </div>

    )
  }
}

export default FragmentsDemo;


//by doing this 
//getting error as 
//JSX expressions must have one parent element.
//so wrap into div so will not get error 
//but when you open inspects then you will get one enclosing div tag incleded into DOM tree.

// so avoiding extra div ,React Fragments come into picture.So that will prevent extra adding div tag into DOM tree.

