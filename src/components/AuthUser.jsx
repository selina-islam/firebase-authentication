import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app } from '../Firebase/firebaseInfo'

const AuthUser = () => {
    const [users, setUser]=useState('')
    const auth= getAuth(app)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser) => {
  if (currentuser) {

  setUser(currentuser)
    // ...
  } else {
    // User is signed out
    // ...
  }
});
return () => unsubscribe()
    }, [auth])
  return (
    <div>
       <div> {users ? <p>  Welcome, {users?.email}!</p>: <p>Please login</p>}</div>
      
    </div>
  )
}

export default AuthUser