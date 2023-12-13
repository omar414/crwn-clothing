import React from 'react'
// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'
import {auth, signInWithGooglePopup, createUserDocumentFromAuth,signInWithGoolgeRedirect} from '../../utils/firebase/firebase'
import SignUpForm from '../../components/sign-up/sign-up-form'
import SignInForm from '../../components/sign-in/sign-in-form'
import './authentication.scss'
const Authentication = () => {
    // useEffect(async()=>{
    //    const response = await getRedirectResult(auth);  
    //    if(response){
    //     const userDocRef = await createUserDocumentFromAuth(response.user)
    //    }
    // },[])
 

  return (
    <div className='authentication-container'>
    <SignInForm/>
    <SignUpForm/>
    {/* <button onClick={signInWithGoolgeRedirect}>
    sing in with google Redirect
    </button> */}

    </div>
  )
}

export default Authentication