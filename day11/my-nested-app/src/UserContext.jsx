import { createContext, useContext, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = (email, password) => {
      console.log({email, password});
      setIsLoggedIn(true); 
    }
    const logout = () => {
      setIsLoggedIn(false)
    }

    return (
        <UserContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser  = () => useContext(UserContext)