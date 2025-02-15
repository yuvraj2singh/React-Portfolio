import { FaNodeJs } from "react-icons/fa"
import { RiBootstrapFill, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri"
import {  SiTypescript } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
import { up_down } from "../framerFunctions"
import {motion} from "framer-motion";
import { ltr,rtl } from "../framerFunctions"
const Technologies = () => {
  return (
    <div className="mt-32" id="Skills">
        <motion.h1 
        whileInView={{ opacity: 1, x: 0 }}
        variants={rtl(0)}
        initial="hidden"
        transition={{duration:.5}}
        viewport={{ once: true }}
        className="text-center text-6xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-100">My Skills <span className="text-gray-500 text-2xl">(Technologies)</span></motion.h1>
        <motion.div
        whileInView={{x:0,opacity:1}}
        variants={ltr(0.25)}
        initial="hidden"
        transition={{duration:.75}}
        viewport={{ once: true }}
        className="flex gap-8 sm:gap-10 flex-wrap my-12 mx-10 justify-center items-center">
            <motion.div
            variants={up_down(0)}
            initial="initial"
            animate="animate"
            className="border-2 border-blue-500 text-green-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-100"><FaNodeJs /></motion.div>
            <motion.div
            variants={up_down(.25)}
            initial="initial"
            animate="animate"
            className="border-2 border-blue-500 text-cyan-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-100"><RiReactjsLine /></motion.div>
            <motion.div
            variants={up_down(.75)}
            initial="initial"
            animate="animate"
            className="border-2 border-blue-500 text-purple-500 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-100"><TbBrandFramerMotion /></motion.div>
            <motion.div
            variants={up_down(1)}
            initial="initial"
            animate="animate"
            className="border-2 border-blue-500 text-cyan-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-100"><RiTailwindCssLine /></motion.div>
            <motion.div
            variants={up_down(1.25)}
            initial="initial"
            animate="animate"
            className="border-2 border-blue-500 bg-white text-blue-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-100"><SiTypescript /></motion.div>
            <motion.div
            variants={up_down(1.5)}
            initial="initial"
            animate="animate"
            className="border-2 border-blue-500 text-purple-500 bg-white rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-100"><RiBootstrapFill /></motion.div>
        </motion.div>
    </div>
  )
}
export default Technologies