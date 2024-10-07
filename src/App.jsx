import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
// Navbar is Arrowfunctionname ./componentis folder,/Navbar is folder /Navbar is file fro Navbar.jsx
const App = () => {
  return (
    <div>
  <Navbar />
    <Routes>
      <Route>
<Route exact path="/" element={<Home />} />
      </Route>
  </Routes>
    </div>
  )
}

export default App
