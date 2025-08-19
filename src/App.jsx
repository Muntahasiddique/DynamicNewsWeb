import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './navbar/Navbar'
import {NewsProvider} from './context/Context'
import { NewsFeed } from './newsFeed/Newsfeed'

function App() {
 

  return (
 <NewsProvider>
<Navbar />
<NewsFeed />
 </NewsProvider>

  
  )
}

export default App
