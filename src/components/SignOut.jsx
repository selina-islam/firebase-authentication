import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { app } from '../Firebase/firebaseInfo';

const SignOut = () => {
    const auth= getAuth(app)
    const handleLogout=()=>{
        signOut(auth).then(() => {
  // Sign-out successful.
  alert('User signed out successfully')
}).catch((error) => {
  // An error happened.
});
    }
  return (
    <div>
        <button onClick={handleLogout} className='border px-5 bg-blue-500 text-white underline'>Log Out</button>
    </div>
  )
}

export default SignOut