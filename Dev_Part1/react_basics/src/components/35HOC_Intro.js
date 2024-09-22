//                          Parent
//                            |
//                            |
//                            |
//                            |
//                            |
//props                       |                            props
//                            |
//ClickCounter---------------state---------------------HoverCounter


//Lift counter logic to Parent and pass props


//                          Parent
//                            |
//                            |
//                            |
//                            |
//                            |
//----------------------------------------------------------
//    |                                                    |
//    |                                                    |
//    |                                                    |
//ClickCounter                                       RandomComponentA
//                                                         |
//                                                         |
//                                                   RandomComponentB
//                                                         |
//                                                         |
//                                                    HoverCounter


//here lifting state is not a perfect soltion 
//So higher order component comes into picture.

//HOC:Higher Order Components
//HOC:->A Pattern where a function takes a component as an argument and results a new component.

//const NewComponent = higherOrderComponent(originalComponent)
//const EnhancedComponent = higherOrderComponent(originalComponent)
//Ex://const IronMan = withSuit(TonyStark)



                


