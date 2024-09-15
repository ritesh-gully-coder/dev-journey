import React, { Component, PureComponent } from 'react'
import RegularComponent from './28RegularComponent'
import PureComponents from './28PureComponents'

class ParentComponent1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ritesh',
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Ritesh'
            })
        }, 2000)
    }
    render() {
        console.log("parent componenttttttttttttttttttttttt");
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name} />
                <PureComponents name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent1;



//parent component not re-render after 2 second because of now we are using Pure component.
//Always keep in mind is that if parent is not re-render then its children also not re-render.


//When we create a component by extending the Pure component class.
//A Pure component implements the shouldComponentUpdate 
//lifecycle method by performing a shallow comparison on the props and state of the component.
//If there is no difference ,the component is not re-rendered -performance boost.
//It is a good to ensure that all re children components are also pure to void unexpected behaviour.
//Never mutate the state .Always return  new object that reflects the new state.


