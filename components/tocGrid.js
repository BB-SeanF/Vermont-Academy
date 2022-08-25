import TOCsectionHeader from "./tocSectionHeader"
import { tocItemInfo } from "../data/data"
import TOCitem from "./tocItem";
import { motion } from "framer-motion";

export default function TOCgrid() {

  const tocGridVariants = {
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1, delay: 0.2 } },
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
    exit: { opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } }
  };
  const tocItemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={tocGridVariants}>
      <TOCsectionHeader>Table of Contents</TOCsectionHeader>
      <div className="grid gap-4 grid-cols-2">
        {tocItemInfo.map((tocItemInfo) => {
          return (
            <motion.div variants={tocItemVariants} key={tocItemInfo.id}>
              <TOCitem tocItemInfo={tocItemInfo} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );

}