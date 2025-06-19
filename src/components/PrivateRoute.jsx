import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const {currentUser,loading}= useAuth()
    if(loading){
        return (
           <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
        )
    }
    if(currentUser){
        return children
    }
  return <Navigate to='/login' replace/>
}

export default PrivateRoute