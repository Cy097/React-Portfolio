import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className="my-10 text-center text-3xl sm:text-4xl">
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 0.5}}
         className="w-full lg:w-1/2 px-4 sm:px-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl max-w-full h-auto" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        {/* Text Section */}
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 0.5}}
         className="w-full lg:w-1/2 px-4 sm:px-8">
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl py-4 text-sm sm:text-base text-justify leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
