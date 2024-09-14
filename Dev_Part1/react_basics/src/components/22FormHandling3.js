import React, { Component } from 'react'

class FormHandling3 extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:'',
      }
    }
    handleUserName = (event) =>{
        this.setState({
            userName:event.target.value
        })

    }
    handleCommentsChange = (event) =>{
      this.setState({
        comments:event.target.value
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
        <div style={{marginTop:'20px'}}>
          <label>Enter Comments : </label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>

        </form>
     
    )
  }
}

export default FormHandling3;