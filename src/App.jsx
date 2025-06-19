
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { AuthProvider } from './components/AuthContext'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Blogs from './components/Blogs'
import UserProfile from './components/UserProfile'
import UpdateProfile from './components/UpdateProfile'
import UpdatePassword from './components/UpdatePassword'
import SendPasswordReset from './components/SendPasswordReset'
import SendSignInLink from './components/SendSignInLink'
import FinishSignup from './components/FinishSignup'


function App() {
  


  return (
  <>
 <AuthProvider>
  <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/password-less-signin' element={<SendSignInLink/>}/>
  <Route path='/finish-signup' element={<FinishSignup/>}/>
  <Route path='/blogs' element={<PrivateRoute><Blogs/></PrivateRoute>}/>
  <Route path='/update-user' element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
  <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
  <Route path='/profile' element={<PrivateRoute><UserProfile/></PrivateRoute>}/>
  <Route path='/reset-password' element={<PrivateRoute><UpdatePassword/></PrivateRoute>}/>
  <Route path='/reset-password-email' element={<PrivateRoute><SendPasswordReset/></PrivateRoute>}/>
 </Routes>
 </BrowserRouter>
 </AuthProvider>
  </>
  )
}

export default App
