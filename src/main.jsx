import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'

import Homepage from './components/pages/Homepage'
import NotFound from './components/not found/NotFound'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/home" element={<Layout />}>
      <Route path='/home' element={<Homepage />} />
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

