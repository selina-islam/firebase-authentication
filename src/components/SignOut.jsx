import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { app } from '../Firebase/firebaseInfo';
import { useAuth } from './AuthContext';

const SignOut = () => {
 const{currentUser}= useAuth()
    const auth= getAuth(app)
    const handleLogout=()=>{
        signOut(auth).then(() => {
  // Sign-out successful.
  alert('User signed out successfully')
}).catch((error) => {
 console.log('log out failed', error)
});
    }
  return (
    <div>
      <p>User: {currentUser?.displayName || 'Not Set Yet'}</p>
        <button onClick={handleLogout} className='border px-5 bg-blue-500 text-white underline'>Log Out</button>
    </div>
  )
}

export default SignOut