import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'

import Homepage from './components/pages/Homepage'
import NotFound from './components/not found/NotFound'
import Aboutus from './components/pages/Aboutus'
import Projects from './components/pages/Projects'
import Blogs from './components/pages/Blogs'
import Careers from './components/pages/Careers'
import Contactus from './components/pages/Contactus'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

