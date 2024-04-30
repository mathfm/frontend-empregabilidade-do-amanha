import React from 'react'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import About from './pages/content/About'


/* import Login from './components/login/Login'
import Register from './components/register/Register'
import Developers from './pages/services/Developers'
import Clients from './pages/clients/Clients'
import Profile from './pages/profile/Profile' */

import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
