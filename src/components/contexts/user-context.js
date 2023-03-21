// import { createContext, useEffect, useReducer } from "react";
// //actual value to access
// export const UserContext = createContext(
//     {
//         currentUser: null,
//         setCurrentUser: () => null,
//     }
// );

// // export const USER_ACTION_TYPES = {
// //     SET_CURRENT_USER: "SET_CURRENT_USER"
// // }

// // //## 3 ## userReducer triggers when dispatch event recieved from dispatch() call
// // const userReducer = (state, action) =>{
// //     const {type, payload} = action;

// //     //## 4 ## generate a new state object to return to useReducer() hook
// //    switch(type) {
// //     case USER_ACTION_TYPES.SET_CURRENT_USER:
// //     return {
// //         ...state,
// //         currentUser: payload,
// //     };
// //     default:
// //         throw new Error(`Unhandled type error ${type}`)    
// //    }
// // }

// // const INITIAL_STATE = {
// //     currentUser: null,
// // }

// //a provider wrapper to render the child components
// export const UserProvider = ({children}) => {

//     //## 5 ## new state object returned from userReducer, so functional component will re-render
//     //all other listeners for the user-context will trigger as usual for state change
//     // const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    
//     // const value = {currentUser};

//     return <UserContext.Provider value={value}>
//             {children}
//         </UserContext.Provider>
// }