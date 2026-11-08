import type { SidebarLinkType } from "../../types/SidebarLinkType"
type SidbarLinkTypeWithState = SidebarLinkType & {
    isSidebarCollapsed: boolean
}
export default function LinkComponent({ Icon, href, title, isSidebarCollapsed }: SidbarLinkTypeWithState){
    return(
        <>
        <a href={href} className=" flex  items-center gap-4 hover:bg-black w-full p-2 rounded-2xl" >
            <Icon size={ isSidebarCollapsed ? 20 : 16} />
            <p className={`${isSidebarCollapsed ? 'hidden': 'block'} text-sm font-medium` } >{title}</p>
        </a>
        </>
    )
}