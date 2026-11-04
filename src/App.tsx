import './App.css'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className=' text-white' >
      <div className=' bg-black h-lvh bg-radial from-blue-500/35  to-black'>
        <Navbar />
        <MainContent/>
      </div>
    </div>
  )
}

export default App
