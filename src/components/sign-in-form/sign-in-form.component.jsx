import React from 'react'
import { useState } from 'react';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  email:'',
  password: ''
}

export const SignIn = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password} = formFields

  const resetFormFields = () => setFormFields(defaultFormFields)

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (err) {
        switch(err.code) {
          case 'auth/wrong-password':
            alert('Username or Password incorrect');
            break
          case 'auth/user-not-found':
            alert('User not found')
            break;
          default:
            console.log(err);
        }
    }
  }

  const handleChange = (event) => 
    setFormFields({...formFields, [event.target.name]: event.target.value})

  return (
   
     <div className='sign-up-container'>
      <h2>Already have an Account ? Sign In</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email"  type="email" required onChange={handleChange} name="email" value={email}/>
        <FormInput label="Password"  type="password" required onChange={handleChange} name="password" value={password} />
       <div className='buttons-container'>
          <Button type="submit">
            Sign In
          </Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Button>
       </div>
      </form>
      
    </div>
   
  )
}
