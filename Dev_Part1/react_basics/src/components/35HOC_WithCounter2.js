import React from "react";

const HOC_WithCounter2 = (WrappedComponent,incrementNumber) =>{
    class WithCounter2 extends React.Component{
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
        incrementCounter =()=>{
            this.setState(prevState=>{
                return{
                    count:prevState.count + incrementNumber
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
    return WithCounter2
}
export default HOC_WithCounter2;