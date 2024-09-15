import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log("regular componentttttttttttttttttttt");
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent;


//Regular component re-render
//A Regular component does not implement the shouldComponentUpdate method.
//It always returns true y default.
