//useReducer----->Local state management
//share state bewtween components  ----->Global state management
//usefor global state management----> useReducer + useContext 

//scenario 1:->
//                                   ---------
//                                   | App.js|
//                                    --------                                  
//                                       |
//                                       |
//         ------------------------------|--------------------------------
//         |                             |                                |
//         |                             |                                |
//   |-------------                  |------------|                |------------
//   |Component A |                  |Component B |                |Component C |
//   |-------------                  |-------------                |------------|
//      counter                         counter                       counter
//
//
//
//
//scenario 2:->
//                                   ---------
//                                   | App.js|
//                                    --------                                  
//                                       |
//                                       |
//         ------------------------------|--------------------------------
//         |                             |                                |
//         |                             |                                |
//   |-------------                  |------------|                |------------
//   |Component A |                  |Component B |                |Component C |
//   |-------------                  |-------------                |------------|
//      counter                             |                             |
//                                          |                             |
//                                          |                             |
//                                          |                             |
//                                          |                             |
//                                          |                             |
//                                          |                             |
//                                    |------------|                |------------
//                                    |Component D |                |Component E |
//                                    |-------------                |------------|
//                                       counter                           |
//                                                                         |                 
///                                                                        |
//                                                                  |------------
//                                                                  |Component F |
//                                                                  |------------|
//                                                                     counter
//
//