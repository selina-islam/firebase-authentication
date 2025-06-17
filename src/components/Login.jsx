import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { app } from '../Firebase/firebaseInfo'

const Login = () => {
     const [email, setEmail]=useState('')
      const [password, setPassword]= useState('')
        const [error, setError]=useState('')

      const auth=getAuth(app)
      const navigate= useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
   alert('Login successfully')
navigate('/')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setError('Invalid user email or password please type correct one!')
  });
    }
  return (
     <div className='bg-gray-200 h-screen flex justify-center items-center'>
   <div className='bg-white max-w-md mx-auto p-8 w shadow-md rounded'>
    <h2 className='font-semibold text-2xl text-center mb-3'>Please Register</h2>
    <form onSubmit={handleLogin} className='space-y-4'>
      <div>
        <label className='font-semibold text-sm mb-2 block text-gray-700'>Email:</label>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' value={email} className='border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded w-full'/>
      </div>
      <div>
        <label className='font-semibold text-sm mb-2 block text-gray-700'>Password:</label>
      <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} placeholder='Enter your password' className='border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded w-full'/>
      </div>
      {error && <p className='text-sm italic text-red-500'>{error}</p>}
      <button className='py-2 bg-blue-700 w-full rounded text-white text-sm hover:bg-blue-800'>Submit</button>
    </form>
    <p className='text-center text-sm text-gray-700'>
      Already have an account? Please <Link to='/login' className='text-blue-600 hover:underline font-semibold'>Login</Link>
    </p>
   </div>
    </div>
  )
}

export default Login