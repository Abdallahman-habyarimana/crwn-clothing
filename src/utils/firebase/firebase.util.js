// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc }  from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD48FgLRovAV22aBmYxlNS8UISRqb4tnAU",
  authDomain: "crwn-project-db-3c55d.firebaseapp.com",
  projectId: "crwn-project-db-3c55d",
  storageBucket: "crwn-project-db-3c55d.appspot.com",
  messagingSenderId: "72065136117",
  appId: "1:72065136117:web:b6ca15a27a3a95bea35cbc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const {displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (err) {
            console.log('Error creating the user', err.message);
        }
    }

    return userDocRef
}