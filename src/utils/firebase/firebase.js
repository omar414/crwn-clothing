import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCnc2leCF3GV_E23zM3iHUkVehFHchZ3IA",
  authDomain: "crwn-clothing-db-fcbd3.firebaseapp.com",
  projectId: "crwn-clothing-db-fcbd3",
  storageBucket: "crwn-clothing-db-fcbd3.appspot.com",
  messagingSenderId: "505216504014",
  appId: "1:505216504014:web:8ba2d8283db52be963809f"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})


export const auth=getAuth()
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    
      return userDocRef;
}