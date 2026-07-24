import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'

const Router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
       {path:"",
       element:<Home/>},
       {path:"/about",
        element: <About/>
       },
       {path:"/contact",
        element: <Contact/>
       },
       {path:"/service",
        element: <Service/>
       }
       
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
