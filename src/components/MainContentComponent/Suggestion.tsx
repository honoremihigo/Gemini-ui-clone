import { X, type LucideIcon } from "lucide-react"
type PropType = {
    Icon: LucideIcon,
    suggestion: string
}
export default function Suggestion({ Icon, suggestion }: PropType) {
    return (
        <div className=" group transition-all hover:bg-white/15 flex items-center justify-between backdrop-blur-md px-4  rounded-3xl " >
            <div className=" flex gap-3 items-center   backdrop-blur- p-3  rounded-3xl " >
                <Icon size={18} />
                <p className=" text-md " >{suggestion}</p>
            </div>
            <X size={16} className=" hidden group-hover:flex " />
        </div>
    )
}