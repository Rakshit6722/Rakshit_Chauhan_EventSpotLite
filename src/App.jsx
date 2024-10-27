import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event'element={<Events/>}/>
      </Routes>
    </div>
  )
}

export default App