import { useEffect, useRef } from "react";
import Typed from "typed.js";

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
    <div className="mt-20 sm:mt-8 flex items-center justify-center lg:justify-between flex-wrap " id="Intro">
      <div className="">
        <h1 className="text-6xl mb-10 ">Yuvraj singh</h1>
        <span ref={typedRef} className="text-2xl bg-gradient-to-r from-red-100 via-white to-blue-700 bg-clip-text text-transparent "></span>
        <p className="mt-8 w-full sm:w-[500px] text-justify">Python and Java Enthusiast Strongly Dedicated towards learning Data Structure and Algorithm and MERN stack</p>
      </div>
      <img className="w-[400px] overflow-hidden sm:opacity-90 rounded-4xl hover:scale-110 hover:opacity-100 transition-all duration-300" src="/Images/Profile.png" alt="Yuvraj singh" />
    </div>
  );
};

export default Intro;
