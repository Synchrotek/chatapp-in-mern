import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/Login';
import Signup from './pages/signup/signup';

function App() {
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
