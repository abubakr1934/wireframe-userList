import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import MainPage from './components/mainPage/MainPage'
function App() {
  return(
    <>
    <Header></Header>
    <MainPage></MainPage>
    </>
  )
   
  
}

export default App
