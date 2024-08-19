//Always make use of setState and never modify the state directly.

//Code has to be executed after the state has been updated?
//Place taht code in the call back function which is the scond argument to the seState method.

//When we have to update state based on the previous state value,
//pass in a function as argument instead of the regular object.

import React, { Component } from 'react';
class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.state.count = this.state.count + 1;//by using direct state update we can not upadte state 
        //this is only reason that we can not update directly state 
        //so use setState

        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('callback value', this.state.count);
                //whenever you need to execute some code after the state has changed then
                // donot place the code after the setState method 
                //place that code within the callback that is passed as 2nd parameter of setState method.
            })

        //

        //setState method has two parameters,
        //1st parameter is state object
        //2nd parameter is callback function(it is arrow function)

        console.log(this.state.count);//this is synchronous console so it called before state updated


    }
    inc5Times() {
        this.setState(prevState =>({
            count:prevState.count +1
        }))
        console.log(this.state.count);


    }

    incrementFive(){
        this.inc5Times();
        this.inc5Times();
        this.inc5Times();
        this.inc5Times();
        this.inc5Times();

    }

   render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Inc5Times</button>
            </div>


        )
    }
}

export default Counter;