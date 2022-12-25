import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Components/Course/Admin'
import CourseDetails from '../Components/Course/CourseDetails'
import Home from '../Components/Course/Home'
import Login from '../Components/Signup-login/Login'
import Signup from '../Components/Signup-login/Signup'
import AuthRoute from '../Private/AuthRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={
        <AuthRoute>
        <Home />
        </AuthRoute>
        }/>
        <Route path="/details" element={
        <AuthRoute>
        <CourseDetails />
        </AuthRoute>
        }/>
        <Route path="/admin" element={
        <AuthRoute>
        <Admin />
        </AuthRoute>
        }/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
    </Routes>
  )
}

export default AllRoutes