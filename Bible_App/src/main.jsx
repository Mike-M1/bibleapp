import React from 'react'
import ReactDOM from 'react-dom/client'
import Credentials from './pages/Credentials.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Note from './pages/Note.jsx'
import UserHome from "./pages/UserHome.jsx"
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage/>,
  },
  {
    path:"/Credentials",
    element: <Credentials/>
  },
  {
    path: "/Note",
    element: <Note/>
  },
  {
    path: "/UserHome",
    element: <UserHome/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
