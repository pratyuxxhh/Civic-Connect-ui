import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/public/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import About from './components/public/About.jsx'
import SignUp from './components/signup/SignUp.jsx'
import Login from './components/login/Login.jsx'
import ProtectedRoute from './components/security/ProtectedRoute.jsx'
import AdminLayout from './components/layout/AdminLayout.jsx'
import UserLayout from './components/layout/UserLayout.jsx'
import WorkerLayout from './components/layout/WorkerLayout.jsx'
import Unauthorized from './components/public/Unauthorized.jsx'
import UserDashboard from './components/user/UserDashboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
      
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
              <AdminLayout />
            </ProtectedRoute>
          } 
        />

        <Route 
        path="/user" 
        element={
          <ProtectedRoute allowedRoles={["ROLE_USER"]}>
            <UserLayout />
          </ProtectedRoute>
        }
      >
        {/* Children routes go here */}
        <Route path="dashboard" element={<UserDashboard />} />
      </Route>
        <Route 
          path="/worker" 
          element={
            <ProtectedRoute allowedRoles={["ROLE_WORKER"]}>
              <WorkerLayout />
            </ProtectedRoute>
          } 
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
