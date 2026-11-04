import  { Astroid, Download, MessageCircleDashed } from "lucide-react";

export default function Navbar(){
    return(
        <div className=" flex items-center gap-3 justify-end p-4 px-6 " >
            <a href="" className=" flex gap-2 items-center justify-center p-2 px-3 rounded-3xl bg-slate-900 " >
                <Download color="white" size={16} />
                Get App
            </a>
            <a href="" className=" bg-blue-800/40 flex items-center justify-center rounded-3xl p-2 px-4 gap-1" >
                <Astroid size={16} />
                Upgrade
            </a>
            <a href="">
                <MessageCircleDashed size={20} color="white" />
            </a>
        </div>
    )
}