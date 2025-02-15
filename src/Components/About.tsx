import {motion} from "framer-motion";
import { ltr,rtl } from "../framerFunctions";
const About = () => {  
  return (
    <div className="mt-32" id="About">
        <motion.h1 
        whileInView={{ opacity: 1, x: 0 }}
        variants={ltr(0)}
        initial="hidden"
        transition={{duration:.5}}
        viewport={{ once: true }}
        className="text-6xl sm:text-7xl text-center lg:mt-28 text-gray-400 hover:text-white duration-100 ">About Me</motion.h1>
        <div
        className="flex gap-12 sm:gap-4 flex-wrap justify-center items-center lg:justify-around mt-12">
            <motion.img 
            whileInView={{ opacity: 1, x: 0 }}
            variants={ltr(.5)}
            initial="hidden"
            transition={{duration:.5,delay:.5}}
            viewport={{ once: true }}
            className="w-[500px] overflow-hidden hover:scale-105 sm:opacity-80 hover:opacity-100 rounded-4xl transition-all duration-100" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmt8ZW58MHx8MHx8fDA%3D" alt="" />
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            variants={rtl(.5)}
            initial="hidden"
            transition={{duration:.5,delay:.75}}
            viewport={{ once: true }}
            className="w-full sm:w-[600px] sm:text-lg text-justify">I am from Pali Rajasthan and currently Pursuing my Btech in CSE from Lovely Professional University strongly dedicated towards data structure and Full Stack Development. Feel free to contact me for queries and project related information</motion.p>
        </div>
    </div>
  )
}
export default About;