import React, { createContext, useContext, useState } from "react";

export const LoggedInContext = createContext<boolean>(false);

export const SetLogInContext = createContext<React.Dispatch<React.SetStateAction<boolean>> | undefined>(undefined)

export const useSetLoggedIn = () =>{
  const setLoggedIn = useContext(SetLogInContext);
  if(!setLoggedIn) {
    throw new Error('Used outside of SetLogInContext provider')
  }
  return setLoggedIn
}

//Now I need to pass loggedIn state to localStorage, because context restarts on page refresh

export const LogInProvider: React.FC = ({children}) =>{
  const [loggedIn, setLoggedIn] = useState(false)

  return(
    <LoggedInContext.Provider value={loggedIn}>
      <SetLogInContext.Provider value={setLoggedIn}>
      {children}
      </SetLogInContext.Provider>
    </LoggedInContext.Provider>
  )
}