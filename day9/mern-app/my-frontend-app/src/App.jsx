import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'

function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}

export default App
