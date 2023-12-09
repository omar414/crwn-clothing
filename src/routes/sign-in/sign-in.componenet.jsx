import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase'
const SingIn = () => {
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup()
       const userDocRef = await createUserDocumentFromAuth(user)
    }
  return (
    <div>SingIn

    <button onClick={logGoogleUser}>
    sing in with google popup
    </button>

    </div>
  )
}

export default SingIn