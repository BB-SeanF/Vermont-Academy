import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import { fixedNavGraphic } from "../data/data";
import { projectInfo } from "../data/data";

export default function PresImage( {frame, totalFrames} ) {
    
    const renderWidth = parseInt(frame.width) + 18 + "px"
    
    const animVariants ={
        hidden: {opacity: 0, x: -200, y: 0},
        visible: {opacity: 1, x: 0, y: 0, transition: {delay:.2,}},
        exit: {opacity: 0, x:0, y:0, transition: { duration: .2 }}
    }
    const imgAnimations ={
        hidden: {opacity: 0,},
        visible: {opacity: 1,},exit: {opacity: 1,}
    }
    const imageContainer = useRef();
    const resetScroll = () => {
        imageContainer.current.scrollTop = 0
    }

    function NavGraphic() {
        const navGraphic = frame.navGraphic
        const navGraphicToChange = frame.navGraphicToChange

        const [scrollPos, setScrollPos] = useState(0);
        
        const handleScroll = () => {
            const pos = imageContainer.current.scrollTop
            setScrollPos(pos)
        };
        
        useEffect(() => {
            const container = imageContainer.current
            
            container.addEventListener('scroll', handleScroll, {passive: true});

            return () => {
                container.removeEventListener('scroll', handleScroll)
            }
        },[])

        if (navGraphic === true){
           /*  let navGraphicRef = (navGraphicToChange === true && scrollPos <= 200) ? fixedNavGraphic.initial : fixedNavGraphic.scrolled
            let navGraphicImage = navGraphicRef.img */

            let initialOpacity = (navGraphicToChange === true && scrollPos <= 200) ? "1" : "0"
            let scrollOpacity = (navGraphicToChange === true && scrollPos <= 200) ? "0": "1"

            const navBarInitial ={
                backgroundImage: `url(${fixedNavGraphic.initial.img})`,
                height: fixedNavGraphic.initial.height,
                width: fixedNavGraphic.initial.width,
                opacity: initialOpacity,
            }
            const navBarScrolled ={
                backgroundImage: `url(${fixedNavGraphic.scrolled.img})`,
                height: fixedNavGraphic.scrolled.height,
                width: fixedNavGraphic.scrolled.width,
                opacity: scrollOpacity,
            }
            
            return (
                    <>
                    <div style={navBarInitial} className={`absolute z-10 top-full left-0 pointer-events-none max-w-full pr-4 transition-all`}/>
                    <div style={navBarScrolled} className={`absolute z-10 top-full left-0 pointer-events-none max-w-full pr-4 transition-all`}/>
                    </>
            )
        }
    }
    

    return (
        <motion.section style={{maxWidth: renderWidth}}className={`flex flex-col card p-0 relative z-10`} initial="hidden" animate="visible" exit="exit" variants={animVariants}>
            <header className="relative grid grid-cols-[auto_1fr] items-center bg-white p-2 text-center border-b border-gray-900 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex gap-3 ml-1 col-start-1 row-start-1">
                    <div className="p-1.5 border border-gray-900 bg-gray-900 dark:border-gray-700 dark:bg-gray-700"></div>
                    <div className="p-1.5 border border-gray-900 bg-gray-900 dark:border-gray-700 dark:bg-gray-700"></div>
                    <div className="p-1.5 border border-gray-900 bg-gray-900 dark:border-gray-700 dark:bg-gray-700"></div>
                </div>
                <h2 className="w-1/4 col-span-full row-start-1 mx-auto tracking-[.5em] bg-gray-100 text-gray-900 text-xs font-black uppercase px-2.5 py-1 dark:bg-gray-800 dark:text-gray-300">{projectInfo.name}</h2>
                <NavGraphic/>
            </header>
            <article className=" overflow-y-scroll scrollbar transition-all text-[0] bg-gray-900 max-h-[900px]" ref={imageContainer}>
                <motion.div key={frame.img} variants={imgAnimations} onAnimationStart={resetScroll}>
                <Image
                    src={frame.img}
                    quality="100"
                    alt="Image"
                    height={frame.height}
                    width={frame.width}
                    loading="eager"
                />
                </motion.div>
            </article>
        </motion.section>    
    )
}