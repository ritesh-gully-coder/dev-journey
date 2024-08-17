//Components describe a part of user interface.

//They are re-usable and can be nested inside other components.

//Comnponents contain other Comnponents.

//Component in code:-
//JavaScript File                                 App.js
//Compoenent code                                 AppComponent

//Two types:->
//Stateless Functional components
//Javascript functions
//For example:
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

//Statefull Class Compoenents
//Class extending Component class
//Render method returning HTML
//For Example:
class Welcome extends React.Component{
    render(){
        return <h1>Hello,{this.props.name}</h1>;
    }
}
