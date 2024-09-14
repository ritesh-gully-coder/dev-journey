import React, { Component } from 'react'

class ComponentMountingLifeCycleMethods3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ritesh',
        }
        console.log("Lifecycle constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("Lifecycle componentDidMount");
    }
    render() {
        console.log("Lifecycle render");
        return (
            <div>Component Life Cycle Methods</div>
        )
    }
}

export default ComponentMountingLifeCycleMethods3;


//As result order of console

// Lifecycle constructor
// getDerivedStateFromProps
// render
// componentDidMount
