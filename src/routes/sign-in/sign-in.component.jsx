
import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.util'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

export const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await  createUserDocumentFromAuth(user);
  }

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();

    console.log(user);
  }

  return (
   <>
     <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google Popup
      </button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with google Redirect
      </button>
    </div>
    <SignUpForm />
   </>
  )
}
