import React, { Component } from 'react'

class ComponentUpdatingLifeCycleMethods2B extends Component {
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

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null

    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate");

    }
    render() {
        console.log("LifecycleB render");
        return (
            <div>Component Updating Cycle Methods</div>
        )
    }
}

export default ComponentUpdatingLifeCycleMethods2B;

