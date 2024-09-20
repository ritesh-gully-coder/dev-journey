//in react,other than createRef we can access ref which is called callback refs
//this is older approach not now days generally use but learn this
//this approach has four simple steps:->
//1)crate the ref using createRef method
//in this approacvh we will reate a property and assign a value of null
//cbRef means callback refs
//2)Create a method that will assign a DOM element to the Ref we ave just created in step 1
//setCbRef means set Callback Ref
//setCbRef is going top accept an element a DOM element as parameter and assign as cbRef
//3)In this step attach this ref to the input element
//4)In this final step componentDidMount comment out and old code and replace it for the new callback ref
//now see the result as in input 2nd that is focus 


import React, { Component } from 'react'

class RefsDemo2 extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef =null
    this.setCbRef = (element)=>{
      this.cbRef = element
    }

  }
  componentDidMount() {
    if(this.cbRef){
      this.cbRef.focus()
    }
    // this.inputRef.current.focus()
    // console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value)
    //basically we are accessing value property of input DOM node which is available as current property
  }
  render() {
    return (
      <div>
        <h2> Refs Demo</h2>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Fetch Value</button>
      </div>
    )
  }
}

export default RefsDemo2;


//Summary
//With createRef approach you create a reference using React dot createRef 

//With callback  approach you first create a property and then create a method tghat assign -
//the property with a DOM element passed as parameter 

//In Create ref Approach we attach the reference to an element using the ref prop and assigning the property

//In call back approach we attach ref to an element using the method that in turn assigns the element to the property 

//In create ref approach the element can be ccessed using this dot reference variable dot current and 

//In callback appoach it is directly accessed using his dot reference variable


