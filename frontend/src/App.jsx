import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Applyjobs from './pages/Applyjobs'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'


const App = () => {

  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <div>
      { showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<Applyjobs />} />
        <Route path='/applications' element={<Applications />} />
      </Routes>
    </div>
  )
}

export default App