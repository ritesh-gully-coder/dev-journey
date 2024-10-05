//The useReducer Hook is similar to the useState Hook.

//It allows for custom state logic.

//If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

//Syntax
//The useReducer Hook accepts two arguments.

//useReducer(<reducer>, <initialState>)

//The reducer function contains your custom state logic and the initial State can be a simple value but generally will contain an object.

//The useReducer Hook returns the current stateand a dispatch method.

//useReducer is a hook that is used for state management.
//It is alternative to useState.

//Then what is the difference b/w useReducer and useState.
//useReducer is more primitive hook compare to useState.

//Oaky good,but i have question in mind is that
//When should i user one over other.
//??????????????

// Sl no |            Scenarios          | useState is better choice       | useReducer is better choice
//---------------------------------------------------------------------------------------------------------
//   1   |     Type of state             | Number,String,Boolean           | Object, Array
//       |                               |                                 |
//---------------------------------------------------------------------------------------------------------
//   2   |  Number of state Transitions  | One or Two                      | Too Many
//       |                               |                                 | 
//---------------------------------------------------------------------------------------------------------
//   3   |  Related state transition     | No                              | Yes     
//       |                               |                                 |
//-----------------------------------------------------------------------------------------------------------
//   4   |  Business Logic               | No business logic               |
//       |                               |                                 |   
//----------------------------------------------------------------------------------------------------------
//   5   |   Local or Global state       | Local                           | Global
//       |                               |                                 |
//---------------------------------------------------------------------------------------------------------


//reduce vs useReducer
//>>>reduce in javascript:->
//1.array.reduce(reducer,initialValue)
//2.singleValue=reducer(accumulator,itemValue)
//3.reduce method returns a single value

//>>>useReducer in Raect:->
//1.useReducer(reducer,initialValue)
//2.newState=reducer(currentState,action)
//3.useReducer returns a pair of values.
//  [newState,dispatch]





