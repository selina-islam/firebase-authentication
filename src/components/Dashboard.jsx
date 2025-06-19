import React from 'react'
import { useAuth } from './AuthContext'

const Dashboard = () => {
const {currentUser}=useAuth()
console.log('Current user form dashboard', currentUser)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard