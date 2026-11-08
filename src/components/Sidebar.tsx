import { Banana, Clock4, Ellipsis, GraduationCap, LayoutGrid, MessageCircle, Plus, Search, SquarePaddingLeft } from 'lucide-react'
import logo from '/src/assets/gemini_log0.png'
import type { SidebarLinkType } from '../types/SidebarLinkType'
import LinkComponent from './sidebarComponents/LinkComponent'
import SidebarFooter from './sidebarComponents/SidebarFooter'
import type { Dispatch, SetStateAction } from 'react'
type sideBarProps = {
    isSidebarCollapsed: boolean,
    setIsSidebarCollapsed: Dispatch<SetStateAction<boolean>>
}
export default function Sidebar({ isSidebarCollapsed, setIsSidebarCollapsed }: sideBarProps) {
    const Links: SidebarLinkType[] = [
        { Icon: MessageCircle, title: 'New Chart', href: 'localhost' },
        { Icon: LayoutGrid, title: 'Library', href: 'localhost' },
        { Icon: Banana, title: 'Images', href: 'localhost' },
        { Icon: Clock4, title: 'Scheduled', href: 'localhost' },
        { Icon: GraduationCap, title: 'Student', href: 'localhost' },
        { Icon: Ellipsis, title: 'More', href: 'localhost' },
    ]
    return (
        <div className={`${isSidebarCollapsed ? 'w-17 bg-black p-4 px-2' : 'w-1/5 p-4 bg-[#1c1c1c] '} transition-all duration-200   flex flex-col items-start gap-5 `} >
            <div className='flex items-center justify-between w-full'>
                {
                    isSidebarCollapsed ?
                        <div>
                            <div className='flex items-center gap-3 group justify-center transition-all ' >
                                <img src={logo} alt="gemini logo" className=' object-cover w-7 group-hover:hidden  ' />
                                <div className=' cursor-pointer hidden group-hover:block relative left-1/3 ' onClick={() => setIsSidebarCollapsed(prev => !prev)} >
                                    <SquarePaddingLeft size={20} color='gray' />
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-3' >
                            <img src={logo} alt="gemini logo" className=' object-cover w-6  ' />
                            <h1 className={` text-lg font-medium `}>Gemini</h1>
                        </div>
                }
                <div className={` ${isSidebarCollapsed ? 'hidden' : 'flex'} items-center gap-5`}>
                    <Search size={18} color='gray' />
                    <div className=' cursor-pointer ' onClick={() => setIsSidebarCollapsed(prev => !prev)} >
                        <SquarePaddingLeft size={18} color='gray' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col  w-full' >
                {Links.map(link => <LinkComponent Icon={link.Icon} title={link.title}
                    href={link.href} isSidebarCollapsed={isSidebarCollapsed} />)}
            </div>
            <div className={`${isSidebarCollapsed ? 'hidden' : 'flex'} flex-col gap-2.5 pt-2`} >
                <h1 className='text-sm text-gray-500 font-medium '>Notebook</h1>
                <div className='flex gap-2 items-center' >
                    <Plus size={18} />
                    <p className='text-sm' >New notebook</p>
                </div>
            </div>
            <SidebarFooter isSidebarCollapsed={isSidebarCollapsed} />
        </div>
    )
} 