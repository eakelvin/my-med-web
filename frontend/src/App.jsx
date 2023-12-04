import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Splash from './Pages/Splash'
import Onboarding1 from './Pages/Onboarding1'
import Onboarding2 from './Pages/Onboarding2'
import Onboarding3 from './Pages/Onboarding3'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import PrivateRoute from './Components/PrivateRoute'
import Schedule from './Pages/Schedule'
import Reminder from './Pages/Reminder'
import Add_medicine from './Pages/Add_medicine'
import Report from './Pages/Report';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import MedicalDetails from './Pages/MedicalDetails';


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
        <Route path='' element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/report' element={<Report />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/reminder' element={<Reminder />} />
          <Route path='/add-medicine' element={<Add_medicine />} />
          <Route path='/medical-details' element={<MedicalDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
