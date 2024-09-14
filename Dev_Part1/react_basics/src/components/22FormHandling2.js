import React, { Component } from 'react'

class FormHandling2 extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
      }
    }
    handleUserName = (event) =>{
        this.setState({
            userName:event.target.value
        })

    }
    render() {
    return (
        <form>
             <div>
        <h1>Form Handling</h1>
        <label>Enter User Name : </label>
        <input type='text' value={this.state.userName} onChange={this.handleUserName}/>
        </div>

        </form>
     
    )
  }
}

export default FormHandling2;