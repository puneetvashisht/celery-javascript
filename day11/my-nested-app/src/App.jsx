import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import MainHeader from './components/MainHeader/MainHeader'
import { UserProvider } from './UserContext'

const App= () => {


  return (
    <UserProvider>
      <MainHeader></MainHeader>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
        {isLoggedIn &&<Home></Home>}
      </main>
    
    </UserProvider>
  )
}

export default App
