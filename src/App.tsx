import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className=' text-white flex ' >
      <Sidebar/>
      <div className=' bg-black h-lvh bg-radial from-blue-500/35 w-4/5  to-black'>
        <Navbar />
        <MainContent/>
      </div>
    </div>
  )
}

export default App
