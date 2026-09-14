import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Technologies />
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar />
    </div>
  )
}

export default App
