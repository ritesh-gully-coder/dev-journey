//how is the flow

<input type="text" onChange={this.changeEmailHandler}>enter value</input>


this.state={
    email:''
}

history.changeEmailHandler = (event)=>{
    this.setState({email:event.target.value})
}