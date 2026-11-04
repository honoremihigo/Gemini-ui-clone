import { ChevronDown,  CornerDownRight, Mic, Plus, Sparkles, Store } from 'lucide-react'
import Suggestion from './MainContentComponent/Suggestion'
export default function MainContent() {
    return (
        <div className='flex  flex-col items-center justify-center h-[75%] gap-3 '>
            <div className='flex flex-col items-center gap-11' >
                <h1 className=' text-4xl '>Where should we start?</h1>
                <div className=' flex items-center gap-4 bg-gray-950 p-3 px-6 rounded-full' >
                    <div>
                        <Plus size={24} color='white' />
                    </div>
                    <input type="text" placeholder='Ask Gemini' className=' text-white placeholder:text-xl placeholder:text-white outline-none w-100 text-md' />
                    <div className='flex items-center gap-2 p-2 px-3 rounded-3xl transition-all hover:bg-gray-800 '>
                        <p className=' text-md '>Gemini <span className='text-gray-400' >Auto</span></p>
                        <ChevronDown color='white' />
                    </div>
                    <Mic color='white' />
                </div>
            </div>
            <div className=' w-3/5  pt-4 flex flex-col gap-2' >
                <Suggestion Icon={Sparkles} suggestion="Design an art dec living room"/>
                <Suggestion Icon={CornerDownRight} suggestion="Design an art dec living room"/>
                <Suggestion Icon={Store} suggestion="Design an art dec living room"/>
            </div>
        </div>
    )
}