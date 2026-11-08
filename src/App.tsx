import { useState } from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  return (
    <div className=' text-gray-200 flex  transition-all ' >
      <Sidebar setIsSidebarCollapsed={setIsSidebarCollapsed} isSidebarCollapsed={isSidebarCollapsed} />
      <div className={`bg-black h-lvh bg-radial from-blue-500/35 ${ isSidebarCollapsed ?'w-full' :`w-4/5`}  to-black`}>
        <Navbar />
        <MainContent/>
      </div>
    </div>
  )
}

export default App
