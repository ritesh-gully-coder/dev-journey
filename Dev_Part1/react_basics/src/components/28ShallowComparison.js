//Shallow Comparison(SC)
//Primitive Types
//a (SC) b returns true if a and b have the same value and are of the same type .
//Ex:string 'Ritesh' (SC) string 'Ritesh' returns true.


//Complex Types
//a (SC) b returns true if a and b eference the exact same object.

///////////////////////////////////////
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;

var ab_eq = (a === b);//false
var ac_eq = (a === c);//true


///////////////////////////////////////////

var a = { x: 1, y: 2 }
var b = { x: 1, y: 2 }
var c = a;

var ab_eq = (a === b);//false
var ac_eq = (a === c);//true


/////////////////////////////////////////////
//A pure component implements shouldComponentUpdate with a shallow prop and state comparison.

//SC of prevState with currentState ------------>Re-render component
//SC of prevState with currentProps ------------>Re-render component


