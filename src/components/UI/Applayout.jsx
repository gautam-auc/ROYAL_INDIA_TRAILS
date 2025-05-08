import React from 'react'
import { Outlet, useLocation } from 'react-router'
import { Navbar } from '../UI/Navbar'
import Home from '../pages/Home'
import { Footer } from '../UI/Footer'


export const AppLayout = () => {
  const location = useLocation()
  const showIndex = '/'

  return (
    <div className='app-layout'>
      <Navbar />
      {showIndex.includes(location.pathname) ? <Home /> : <Outlet />}
      <Footer />
    </div>
  )
}