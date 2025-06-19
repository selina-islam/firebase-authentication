import React from 'react'
import { Link } from 'react-router'
import SignOut from './SignOut'
import AuthUser from './AuthUser'

const Home = () => {
  return (
    <div>
        <nav>
        <ul className='flex gap-4'>
          <li className='px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white'>
            <Link to='/register'>Register</Link>
          </li>
          <li className='px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white'>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
         
          <li className='px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white'>
            <Link to='/profile'>User Profile</Link>
          </li>
          <li className='px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white'>
            <Link to='/reset-password'>Update Password</Link>
          </li>
         
          <li className='px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white'>
            <Link to='/password-less-signin'>Passwordless Sign-In</Link>
          </li>
         
        </ul>
        
      </nav>
       <SignOut/>
       <AuthUser/>
    </div>
  )
}

export default Home