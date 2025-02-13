import { FaNodeJs } from "react-icons/fa"
import { RiBootstrapFill, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri"
import {  SiTypescript } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="mt-32" id="Skills">
        <h1 className="text-center text-6xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-300">My Skills <span className="text-gray-500 text-2xl">(Technologies)</span></h1>
        <div className="flex gap-8 sm:gap-10 flex-wrap my-12 mx-10 justify-center items-center">
            <div className="border-2 border-blue-500 text-green-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-300"><FaNodeJs /></div>
            <div className="border-2 border-blue-500 text-cyan-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-300"><RiReactjsLine /></div>
            <div className="border-2 border-blue-500 text-purple-500 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-300"><TbBrandFramerMotion /></div>
            <div className="border-2 border-blue-500 text-cyan-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-300"><RiTailwindCssLine /></div>
            <div className="border-2 border-blue-500 bg-white text-blue-400 rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-300"><SiTypescript /></div>
            <div className="border-2 border-blue-500 text-purple-500 bg-white rounded-3xl p-3 text-7xl hover:opacity-80 transition-all duration-300"><RiBootstrapFill /></div>
        </div>
    </div>
  )
}
export default Technologies