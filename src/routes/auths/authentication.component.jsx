
import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.util'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { SignIn } from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss'



export const Authentication = () => {
  
  return (
   <div className='authentication-container'>
    <SignIn />
    <SignUpForm />
   </div>
  )
}
