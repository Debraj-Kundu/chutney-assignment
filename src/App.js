import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Body from './components/Body'
import Jumbo from './components/Jumbotron'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Jumbo />
        <Body />
      </div>
    </BrowserRouter>
  )
}

export default App
