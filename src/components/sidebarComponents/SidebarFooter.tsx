import { Settings } from 'lucide-react'
import profile from '/src/assets/profile.jpeg'
type footerProps = {
    isSidebarCollapsed: boolean
}
export default function SidebarFooter({isSidebarCollapsed}: footerProps){
    return(
        <div className={`flex ${isSidebarCollapsed ? 'flex-col-reverse gap-3' : 'flex-row'} items-center justify-between  w-full mt-auto`} >
            <div className=' flex items-center gap-2' >
                <img src={profile} className=' w-8 h-8 rounded-full ' alt="profile image " />
                <p className={`${isSidebarCollapsed ? 'hidden' : 'block'} font-medium text-sm`} >honore mihigo</p>
            </div>
            <Settings size={18}/>
        </div>
    )
}