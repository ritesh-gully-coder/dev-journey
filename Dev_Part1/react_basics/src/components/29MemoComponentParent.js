import React, { Component } from 'react'
import MemoComponent from './29MemoComponent'

class MemoComponentParent extends Component {
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
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default MemoComponentParent;



//parent component re-render