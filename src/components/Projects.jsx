import { PROJECTS } from "../constants";
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="px-4">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col items-center lg:flex-row lg:justify-center gap-8">
            <motion.div 
             whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 0.5}}
            className="w-full flex justify-center lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 0.5}}
            className="w-full text-center lg:text-left max-w-xl lg:w-3/4 gap-8">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
