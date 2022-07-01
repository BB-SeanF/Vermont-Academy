import Link from "next/link";

import { motion } from "framer-motion";

export default function PresNav({ frame, totalFrames }) {

  const current = frame.id
  let prev = frame.id - 1;
  let next = frame.id + 1;

  let prevHref = current > 1 ? `/presentation/${prev}` : `/`;
  let nextHref = current < totalFrames ? `/presentation/${next}` : `/`;

  function NavBtn({ destination, disabled, text }) {

    return (
      <Link href={destination || "/"} passHref>
        <button className="inline-flex items-center py-2 px-3 text-sm font-bold text-center uppercase tracking-widest text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 disabled:opacity-25 disabled:pointer-events-none transition-colors" disabled={disabled || false}>
          {text || ""}
        </button>
      </Link>
    )
  }

  const navAnimations = {
    hidden: { opacity: 0, x: 0, y: 100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { delay: .4 } },
    exit: { opacity: 0, x: 0, y: 0 }
  }

  return (
    <motion.div className="px-10 mt-10 grid grid-cols-3 max-w-[1600px] min-w-screen gap-2" initial="hidden" animate="visible" exit="exit" variants={navAnimations}>
      <NavBtn destination={prevHref} text="Back" disabled={current > 1 ? false : true} />
      <div className="items-center py-2 px-3 grow text-center text-sm font-bold dark:text-white">{current || "#"} / {totalFrames || "#"}</div>
      <NavBtn destination={nextHref} text="Next" disabled={current < totalFrames ? false : true} />
      <Link href={`/`} passHref><button className=" col-span-full items-center py-2 px-3 text-sm font-bold text-center uppercase tracking-widest text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 transition-colors">Table of Contents</button></Link>
    </motion.div>
  );
}