import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { ltr,rtl } from "../framerFunctions";
const Intro = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Aspiring Engineer",
        "Competitive Programmer",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="mt-20 sm:mt-8 flex items-center justify-center lg:justify-between flex-wrap "
      id="Intro">
      <div className="">
        <motion.h1
          variants={ltr(0)}
          initial="hidden"
          animate="visible"
          className="text-6xl mb-10 ">
          Yuvraj singh
        </motion.h1>
        <span
          ref={typedRef}
          className="text-2xl bg-gradient-to-r from-red-100 via-white to-blue-700 bg-clip-text text-transparent "></span>
        <motion.p
          variants={ltr(.5)}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full sm:w-[500px] text-justify">
          Python and Java Enthusiast Strongly Dedicated towards learning Data
          Structure and Algorithm and MERN stack
        </motion.p>
      </div>
      <motion.img
      variants={rtl(1.2)}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1, opacity: 1, transition: { duration: 0.4 }}} 
      className="w-[400px] sm:opacity-90 rounded-4xl"
      src="/Images/Profile.png"
      alt="Yuvraj Singh"
      />
    </div>
  );
};

export default Intro;
