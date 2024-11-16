import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPython } from "react-icons/bi";
import { motion } from "motion/react"


const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition:  {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 0.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiReactjsLine className="text-6xl text-blue-500" />
          <span className="text-sm mt-2">React.js</span>
        </motion.div>
        {/* Next.js */}
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <TbBrandNextjs className="text-6xl text-white-900" />
          <span className="text-sm mt-2">Next.js</span>
        </motion.div>
        {/* Flutter */}
        <motion.divdiv 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiFlutter className="text-6xl text-cyan-500" />
          <span className="text-sm mt-2">Flutter</span>
        </motion.divdiv>
        {/* JAVA SCRIPT */}
        <motion.divdiv 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <LiaJava className="text-6xl text-orange-500" />
          <span className="text-sm mt-2">JAVA Script</span>
        </motion.divdiv>
        {/* Node.js */}
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaNodeJs className="text-6xl text-green-700" />
          <span className="text-sm mt-2">Node.js</span>
        </motion.div>
        {/* Python */}
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <BiLogoPython className="text-6xl text-yellow-500" />
          <span className="text-sm mt-2">Python</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
