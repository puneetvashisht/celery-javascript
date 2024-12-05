import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    console.log({email, password});
    setIsLoggedIn(true);
    
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
    <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}></MainHeader>
    <main>
      {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
      {isLoggedIn &&<Home></Home>}
    </main>
    
    </>
  )
}

export default App
