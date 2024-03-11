import { useState } from 'react'
import { SignUp } from './components/SignUp'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { PrivateRoutes } from '../utils/PrivateRoutes'
import { AuthProvider } from '../utils/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          {/* private routes  */}
          <Route element={<PrivateRoutes />} >
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
