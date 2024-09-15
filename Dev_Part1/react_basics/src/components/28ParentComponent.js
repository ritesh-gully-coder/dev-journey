import React, { Component } from 'react'
import RegularComponent from './28RegularComponent'
import PureComponents from './28PureComponents'

class ParentComponent extends Component {
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

export default ParentComponent;



//parent component re-render