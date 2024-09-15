//so what is the difference beytween component class and pure component class 
//and when should use one over other.



import React, { PureComponent } from 'react'
import RegularComponent from './28RegularComponent';

class PureComponents extends PureComponent {
    render() {
        console.log("pure componentttttttttt");
        return (
            <div>
                Pure Component  {this.props.name}
            </div>
        )
    }
}

export default PureComponents;

//pure compoenent will  not re-render and this is the difference betweern regulare and pure component class.
//A pure component n the other hand implements  shouldComponentUpdate with a shallow props and state comparison. 

