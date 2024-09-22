import React from "react";

const HOC_WithCounter1 = (WrappedComponent) =>{
    class WithCounter1 extends React.Component{
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
        incrementCounter =()=>{
            this.setState(prevState=>{
                return{
                    count:prevState.count + 1
                }
            })
        } 
        render(){
            return <WrappedComponent
             name="Ritesh"
             count = {this.state.count}
             incrementCounter={this.incrementCounter}

            />
        }
    }
    return WithCounter1
}
export default HOC_WithCounter1;