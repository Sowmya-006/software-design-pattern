
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserLayout from './layout/UserLayout'
import NotFound from './pages/NotFound'

import AdminLayout from './layout/AdminLayout'

import HomeLayout from './layout/HomeLayout'




const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    
                    
                    

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App