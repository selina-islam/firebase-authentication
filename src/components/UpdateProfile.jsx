import React, { useState } from 'react'
import { useAuth } from './AuthContext'

const UpdateProfile = () => {
    const{currentUser, updateUserProfile}=useAuth()

    const [name, setName]=useState('')
    const [photoURL, setPhotoURL]=useState('')
    const [success, setSuccess]=useState('')
    const [error, setError]=useState('')

    const handleUpdateProfile= async (e)=>{
        e.preventDefault()
        try{
            await updateUserProfile({
                displayName: name || currentUser.displayName,
                photoURL: photoURL || currentUser.photoURL
            
            })
            alert('Profile update successfully')
            setSuccess('Profile update successfully')
            setError('')
        }catch(error){
                setError('Failed to update profile')
                setSuccess('')
        }
    }
  return (
    <div className='p-8 space-y-5'>
        <h1>Update Your Profile</h1>
        <p>Current Display Name: {currentUser?.displayName || 'Not Set Yet'}</p>
        <p>Current Photo URL: </p>
        {currentUser?.photoURL ? (<img src={currentUser?.photoURL} alt="Photo" />): 'Not Image Fount'}
        {/* update profile form */}
        <form onSubmit={handleUpdateProfile}>
            <div>
                <label className='block'>New Display Name: </label>
                <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name='name' id='name' placeholder='Set New Name' className='border p-2' />
            </div>
            <div>
                <label className='block'>New Img URL: </label>
                <input onChange={(e)=>setPhotoURL(e.target.value)} value={photoURL} type="text" name='photoURL' id='photoURL' placeholder='Set New photoURL' className='border p-2' />
            </div>
            <button type='submit' className='bg-blue-700 text-white font-medium px-6 py-2 rounded mt-4'>Update Profile</button>
            {success && <p className='text-green-500 text-sm italic'>{success}</p>}
            {error && <p  className='text-red-500 text-sm italic'> {error}</p>}
        </form>
    </div>
  )
}

export default UpdateProfile