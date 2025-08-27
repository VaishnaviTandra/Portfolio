import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Education  from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'

const browserrouterObj=createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    children:[
      {
        path:'',
        element:<Hero/>
      },{
        path:'about',
        element:<About/>
      },{
        path:'contact',
        element:<Contact/>
      },{
        path:'education',
        element:<Education/>
      },{
        path:'experience',
        element:<Experience/>
      },{
        path:'skills',
        element:<Skills/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={browserrouterObj}/>
  </StrictMode>,
)
