import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './navbar/Navbar'
import {NewsProvider} from './context/Context'

function App() {
 

  return (
 <NewsProvider>
<Navbar />
 </NewsProvider>

  
  )
}

export default App
