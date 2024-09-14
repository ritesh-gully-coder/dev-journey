//submit has default behaviour as if clicked on submit button 
//then page refreshes
//so it has default html form behaviour as browsing a new page when submit is clicked.
//with the help of submit handler u can apply logic of submit on form.


//here if we dismiss the alert dom of submit clicked then data lost
//so solution for thisis preventDefault
//when u add this then  after dismissing the alert u see still data and data not lost .



import React, { Component } from 'react'

class FormHandling5 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      comments: '',
      topic:'react',
    }
  }
  handleUserName = (event) => {
    this.setState({
      userName: event.target.value
    })

  }
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })

  }

  handleSubmit = (event) =>{
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Form Handling</h1>
          <label>Enter User Name : </label>
          <input type='text' value={this.state.userName} onChange={this.handleUserName} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <label>Enter Comments : </label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label>Select Topic : </label>
          <select value={this.state.topic}  onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <button type='submit'>Submit</button>

      </form>

    )
  }
}

export default FormHandling5;