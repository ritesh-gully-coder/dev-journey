import React from "react";

//const UserContext = React.createContext()
const UserContext = React.createContext('IT')//if provider doesnot match or Provider does not match then default "IT" display.


const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext;
