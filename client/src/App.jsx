import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Singnin } from './pages/Singnin';
import { SingUp } from './pages/SingUp';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
export const App = () => {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<Singnin/>}/>
    <Route path='/sign-up' element={<SingUp/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/projects' element={<Projects/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}
export default App;