import TOCsectionHeader from "./tocSectionHeader"
import { projectInfo } from "../data/data"
import { motion } from "framer-motion"


export default function TOCtext(props) {
    const tocTextVariants ={
        hidden: {
            opacity: 0,
            y:-20,
        },
        enter: {
            opacity: 1,
            y:0,
            transition: {
                delay: .2
            }, 
        },
        exit: {
            opacity:0,
            transition: {
            }
        }
    }
    return (
        <motion.div initial="hidden" animate="enter" exit="exit" variants={tocTextVariants}>
        <TOCsectionHeader>
        {projectInfo.name}<span className="bg-gray-100 text-gray-900 text-xs ml-2 px-2.5 py-0.5 dark:bg-gray-700 dark:text-gray-300">{projectInfo.type} Design</span>
        </TOCsectionHeader>
        <div className="prose max-w-none prose-lead:text-3xl prose-h1:text-6xl mb-10 dark:prose-invert">
            <h1 className="text-center">Design Preview</h1>
            <p className="lead text-center">The first round of designs have been collected in a single click-through presentation. The table of contents below shows how the {projectInfo.frames} slides are organized.</p>
            <p><b>Overview:</b> The presentation includes mockups for the homepage, hover styles therein, nav styling, and sample interior layouts</p>
            <p><b>Navigating the Click-through: </b>Below each slide are navigation buttons that allow you to move through the presentation or come back to this page. Additionally, each slide includes a panel with notes that be accessed by clicking the button labeled &quot;Open Notes&quot; in the top right of the screen. The whole presentation is best viewed on a full screen. If at full screen and elements are still being cut off, please use your browser&apos;s zoom function to zoom out.</p>
            <p><b>Please review and discuss the designs as a team prior to our next session.</b> We will review your click-through and make revisions in Photoshop together during the session. It is important to have all key decision makers present or have gathered their feedback if they can not attend the session.</p>
        </div>
        </motion.div>
    )
}