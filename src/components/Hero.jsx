import { HERO_CONTENT}  from "../constants";
import profilePic from "../assets/profile.jpg";
import { delay, motion } from "motion/react"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 flex justify-center lg:justify-start">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start pl-8">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Niladri Banerjee</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible" 
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl">
              Software Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="text-lg text-gray-500 mt-4">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration: 1, delay: 1.2}}
             className="rounded-2xl" src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero