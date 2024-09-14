//minimizing code as this.state . by const

import React, { Component } from 'react'

class FormHandling6 extends Component {

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
    const {userName,comments,topic} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Form Handling</h1>
          <label>Enter User Name : </label>
          <input type='text' value={userName} onChange={this.handleUserName} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <label>Enter Comments : </label>
          <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label>Select Topic : </label>
          <select value={topic}  onChange={this.handleTopicChange}>
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

export default FormHandling6;