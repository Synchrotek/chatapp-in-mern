import './App.css'
import Home from './pages/home/home'
import Login from './pages/login/Login'
import Signup from './pages/signup/signup'

function App() {
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Home />
      {/* <Signup /> */}
    </div>
  )
}

export default App
