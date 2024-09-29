//If we are using class component then will get performed side effects 
//in your components for example updating the DOM fetcing data from an API
//endpoint and setting subscriptions or timers since the render method would be too early 
//to perform side effects had to make use of life cycle methods.

//For example1:
// componentDidMount(){
//     document.title = `you clicked ${this.this.state.count} times`;
// }
// componentDidUpdate(){
//     document.title = `you clicked ${this.this.state.count} times`;
// }

//For example2:
// componentDidMount(){
//     this.interval= setInterval(this.tick ,1000)
// }
// componentDidUpdate(){
//     clearInterval(this.interval)
// }

//For example3:
//combining two side effects

// componentDidMount(){
//     document.title = `you clicked ${this.this.state.count} times`;
//     this.interval= setInterval(this.tick ,1000)
// }
// componentDidUpdate(){
//     document.title = `you clicked ${this.this.state.count} times`;
// }
// componentWillUnmount(){
//     clearInterval(this.interval)
// }

//Te useEffect hook lets you perform side effects in functional component.

//It is a close replacement for :->
//componentDidMount
//componentDidUpdate
//componentWillUnmount
