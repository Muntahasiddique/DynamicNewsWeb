import { useState } from 'react'
import './App.css'
import { Navbar } from './navbar/Navbar'
import { NewsProvider } from './context/Context'
import { NewsFeed } from './newsFeed/Newsfeed'
import { ThemeProvider, useTheme } from './context/ThemeContext'



function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <div className="app">
          <Navbar />
          <NewsFeed />
        </div>
      </NewsProvider>
    </ThemeProvider>
  )
}

export default App