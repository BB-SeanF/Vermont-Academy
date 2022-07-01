import { motion } from "framer-motion";
import { useState } from "react";

export default function PresPanel ({frame}) {

    const [showPanel, setShowPanel] = useState(false);

    function togglePanel(){
        setShowPanel(!showPanel)
    }

    const textAnimations = {
        hidden:{opacity: 0},
        enter: {opacity: 1, transition: {delay: .4}}
    }
    const panelAnimations = {
        hidden:{opacity: 0, y: 200},
        enter: {opacity: 1, y: 0, transition: {delay: .2}},
        exit: {opacity: 0, y:0}
    }

    return(
        <>
        <div className="absolute top-[4rem] right-5">
            <button onClick={togglePanel} className="inline-flex items-center py-2 px-3 text-sm font-bold text-center uppercase tracking-widest text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 disabled:opacity-25 disabled:pointer-events-none transition-colors">
                {showPanel ? "Close Notes" : "Open Notes"}
            </button>
        </div>
        <motion.aside layout className={`w-96 z-20 flex flex-col fixed right-5 bg-white border shadow-brutal shadow-gray-900 border-gray-900 dark:border-gray-700 dark:shadow-gray-700 dark:bg-gray-900 dark:text-gray-400 prose `} initial="hidden" animate={showPanel ? "enter" : "exit"} exit="exit" variants={panelAnimations}>
            <motion.h1 key={frame.title} className="px-10 py-5 mb-0 text-xl bg-gray-200 text-gray-900 dark:text-white dark:bg-gray-800 border-b border-gray-900 dark:border-gray-700" initial="hidden" animate="enter" variants={textAnimations}>{frame.title || "Title"}</motion.h1>
            <motion.div key={frame.description} className="px-10 pb-5 pt-5 grow text-sm overflow-y-scroll max-h-[900px] scrollbar" dangerouslySetInnerHTML={{__html: frame.description}} initial="hidden" animate="enter" variants={textAnimations}/>  
        </motion.aside>
        </>
    )
}