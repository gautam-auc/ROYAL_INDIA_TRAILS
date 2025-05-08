import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { AppLayout } from './components/UI/Applayout'
import {About} from './components/Pages/About'
import Contact from './components/Pages/Contact'
import TripPlanner from './components/Pages/TripPlanner'
import HotelList from './components/Pages/HotelList'
import {Booking} from './components/Pages/Booking'



export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/about", element: <About /> },
        { path: "/hotel-list", element: <HotelList/>},
        { path: "/booking/:hotelId", element: <Booking/> },
        { path: "/contact", element: <Contact /> },
        { path: "/destinations", element: <TripPlanner/> },
      ]
    }

  ])
  return (
    <div className="app-container">
      <RouterProvider router={router}/>
    </div>
  )
}
