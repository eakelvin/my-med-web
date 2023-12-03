import './App.css'
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom'
import Splash from './Pages/Splash'
import Onboarding1 from './Pages/Onboarding1'
import Onboarding2 from './Pages/Onboarding2'
import Onboarding3 from './Pages/Onboarding3'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Splash />} />
        <Route path='/onboarding1' element={<Onboarding1 />} />
        <Route path='/onboarding2' element={<Onboarding2 />} />
        <Route path='/onboarding3' element={<Onboarding3 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
