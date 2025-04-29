import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { AppLayout } from './components/UI/Applayout'
import {About} from './components/Pages/About'
import Booking from './components/Pages/Booking'
import Contact from './components/Pages/Contact'
import TripPlanner from './components/Pages/TripPlanner'
import { BookNow } from './components/Pages/BookNow'



export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/about", element: <About /> },
        { path: "/booking", element: <Booking/>},
        { path: "/book-now/:id", element: <BookNow/> },
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
