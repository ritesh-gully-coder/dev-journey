import React, { Component } from 'react'
import ComponentUpdatingLifeCycleMethods2B from './24ComponentUpdatingLifecycleMethods2B';

class ComponentUpdatingLifeCycleMethods2 extends Component {
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

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null

    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate");

    }
    changeState=()=>{
        this.setState({
            name:'digital gully coder'
        })

    }
    render() {
        console.log("LifecycleA render");
        return (
            <>
            <div>Lifecycle A</div>
            <button onClick={this.changeState}>change state</button>
            <ComponentUpdatingLifeCycleMethods2B/>
            </>
        )
    }
}

export default ComponentUpdatingLifeCycleMethods2;


//As result order of console
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleA componentDidMount

