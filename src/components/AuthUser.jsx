import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app } from '../Firebase/firebaseInfo'

const AuthUser = () => {
    const [users, setUser]=useState(null)
    const auth= getAuth(app)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser) => {
  if (currentuser) {

  setUser(currentuser)
    // ...
  } else {
   setUser(null)
  }
});
return () => unsubscribe()
    }, [auth])
  return (
    <div>
         <div>
      {users ? (
        <p>Welcome, {users.email || users.displayName}!</p>
      ) : (
        <p>Please login</p>
      )}
    </div>
      
    </div>
  )
}

export default AuthUser