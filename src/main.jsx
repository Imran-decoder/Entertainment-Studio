import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Game from './components/game.jsx'
import Footer from './components/Footer.jsx'
import Movie from './components/movie.jsx'
import Sign_in from './components/sign_in.jsx'


const router= createBrowserRouter([
  {
    path : "/",
    element :<><Home/><Footer/></>
  },
  {
    path : "/movie",
    element :<><Navbar/><Movie/><Footer/></>
  },
  {
    path : "/game",
    element :<><Navbar/><Game/><Footer/></>
  },
  {
    path : "/sign-in",
    element :<><Sign_in/></>
  },

])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App/>
  </React.StrictMode>
);