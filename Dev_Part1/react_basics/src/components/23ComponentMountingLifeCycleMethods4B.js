import React, { Component } from 'react'


class ComponentLifeCycleMethods4B extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ritesh',
        }
        console.log("LifecycleB constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }
    render() {
        console.log("LifecycleB render");
        return (
            <div>LifecycleB</div>
        )
    }
}

export default ComponentLifeCycleMethods4B;


//