import React from 'react'
import Navigation from './Components/Navigation'
import Headers from './Components/Headers'
import "./App.css"
import Main from './Components/page1'
import About from './Components/About'
import Contactus from './Components/Contactus'
const App = () => {
  return (
    <div className='app'>
      <Navigation />

      <div className="app-content">
        <Headers></Headers>
        <div className="content">
          <Main></Main>
          <About></About>
          <Contactus></Contactus>
        </div>
      </div>
    </div>
  )
}

export default App