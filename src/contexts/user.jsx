import {React ,createContext,useState,useEffect} from 'react'
import { createUserDocumentFromAuth, onAuthStateChangeListener,   } from '../utils/firebase/firebase';


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
    
})


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    
    useEffect(() => {
   const unSubcribe =   onAuthStateChangeListener((user)=>{
     console.log(user)
    if(user){
      createUserDocumentFromAuth(user);
    }
    setCurrentUser(user)
   }) 
   return unSubcribe
    },[])


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

