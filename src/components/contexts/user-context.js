import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";
//actual value to access
export const UserContext = createContext(
    {
        currentUser: null,
        setCurrentUser: () => null,
    }
);

//a provider wrapper to render the child components
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocFromAuth(user);
            }
            setCurrentUser(user)
        });
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
}