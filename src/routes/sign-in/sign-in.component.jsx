
import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await  createUserDocumentFromAuth(user);

    console.log(userDocRef);

  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google Popup
      </button>
    </div>
  )
}
