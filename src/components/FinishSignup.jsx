import React, { useEffect, useState } from 'react'
import { app } from '../Firebase/firebaseInfo';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useNavigate } from 'react-router';

const FinishSignup = () => {
     const[email,setEmail]=useState('')
        const [message, setMessage]= useState('')

        const auth = getAuth(app);
        const navigate= useNavigate()


        useEffect(()=>{
            if(isSignInWithEmailLink(auth, window.location.href)){
                setMessage('Invalid or Expired sign-in link!')
                return;
            }
        },[auth])
        const handleCompleteSignIn= async (e)=>{
            e.preventDefault()
            const storedEmail= window.localStorage.getItem('emailForSignIn');
            const emailToUse= email || storedEmail;

            if(!emailToUse){
                setMessage('Please provide the email address used to receive the sign-in link')
            }
            try{
                const result= await signInWithEmailLink(auth, email, window.localStorage.href)
                setMessage('Sign-In Successfully')
                window.localStorage.removeItem('emailForSignIn')
                navigate('/dashboard')
            }catch(error){
                 console.error('Error completing sign-in', error.message)
   setMessage('Failed to complete sign-in. Please try again')
            }
        }
    
  return (
       <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 bg-white shadow-md rounded-lg'>
            <h2 className='text-2xl font-bold text-center text-gray-800 my-4'>Complete Your Sign-In</h2>
            {message && <p className={`p-2 text-sm my-2 text-center text-blue-600`}>{message}</p>}
            <form onSubmit={handleCompleteSignIn}>
                <div>
                    <label className='block font-medium text-gray-700 mb-2'>Email Address"</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Enter your email' className='w-full px-4 py-2 border rounded-md focus:outline-none mb-4' required/>
                </div>
                <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md'> Complete Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default FinishSignup