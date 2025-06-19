import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { app } from '../Firebase/firebaseInfo';

const SendSignInLink = () => {
    const[email,setEmail]=useState('')
    const [message, setMessage]= useState('')

    const auth = getAuth(app);

    const actionCodeSettings={
        url: 'http://localhost:5173/finish-signup',
        handleCodeInApp: true,
    }


    const handleSentSignIn= async (e) => {
        e.preventDefault()

        try{
            await sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
   
    window.localStorage.setItem('emailForSignIn', email);
    setMessage('Sign-In Link sent successfully to your address. Please check your inbox')
  })
  .catch((error) => {
   console.error('Error sending email link', error.message)
   setMessage('Failed to send email link. Please try again')
    // ...
  });

        }catch(error){

        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 bg-white shadow-md rounded-lg'>
            <h2 className='text-2xl font-bold text-center text-gray-800 my-4'>Sign In With Email Link</h2>
            {message && <p className={`p-2 text-sm my-2 text-center text-blue-600`}>{message}</p>}
            <form onSubmit={handleSentSignIn}>
                <div>
                    <label className='block font-medium text-gray-700 mb-2'>Email Address"</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Enter your email' className='w-full px-4 py-2 border rounded-md focus:outline-none mb-4' required/>
                </div>
                <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md'>Send Sign In Link</button>
            </form>
        </div>
    </div>
  )
}

export default SendSignInLink