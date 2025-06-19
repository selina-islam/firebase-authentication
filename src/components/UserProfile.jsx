import React from 'react'
import { useAuth } from './AuthContext'
import { Link } from 'react-router'

const UserProfile = () => {
    const{currentUser}=useAuth()
    console.log(currentUser)
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='shadow-lg shadow-blue-300 p-8 rounded border border-gray-100 bg-gray-300'>
            <h2 className='text-xl font-semibold text-center'>User Profile</h2>
             {currentUser?.photoURL && <img src={currentUser.photoURL}  alt="User" className="w-24 h-24 rounded-full mx-auto my-4" />}
            <p className='text-sm text-gray-700 '>Name: {currentUser?.
displayName
} </p>
            <p className='text-sm text-gray-700 '>Email: {currentUser?.email} </p>
           
            <p className='text-sm text-gray-700 '>ID:{currentUser?.uid} </p>
            <p className='text-sm text-gray-700 mb-2'>Email Verified: {currentUser?.email ?'Yes':'No'}</p>
             <Link to='/update-user' className='bg-blue-400 px-6 py-1 rounded'>Edit Profile</Link>
        </div>
       
    </div>
  )
}

export default UserProfile