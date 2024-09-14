import React, { Component } from 'react'
import ComponentLifeCycleMethods4B from './23ComponentMountingLifeCycleMethods4B';

class ComponentLifeCycleMethods4A extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ritesh',
        }
        console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }
    render() {
        console.log("LifecycleA render");
        return (
            <>
                <div>LifecycleA</div>
                <ComponentLifeCycleMethods4B />
            </>

        )
    }
}

export default ComponentLifeCycleMethods4A;

//As result
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleB constructor
// LifecycleB getDerivedStateFromProps
// LifecycleB render
// LifecycleB componentDidMount
// LifecycleA componentDidMount


