//Context provides  a way to pass data through the component tree without having 
//to pass props down anually at every level

//                                          App Component
//                                                |
//                                                |
//                                                |
//                                                |
//        ------------------------------------------------------------------------------------
//        |                                       |                                           |
//        | username                              | username                                  | username
//        A                                       B                                           C
//                                                |                                           |
//                                                | username                                  | username
//                                                D                                           E
//                                                                                            |
//                                                                                            | username
//                                                                                            F

//Suppose we have system like above hierachy 
//Now i need to show to logged in user as A ,D and F
//for getting username props we needto pass username props to 
//each node hieachy belonging so that will forward to on required level.
//By doing like this unwanted level should also getting props to forward props that is not good.

//Context provides a way to pass data through the component tree without having 
//to pass props down manually at every level.

//For using context three steps:->
//step1):-Create the context
//step2):-Provide a context value
//step3):-Consume the context value

//Context works only in class component