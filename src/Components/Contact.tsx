import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import Semicontact from "./SemiContact/Semicontact";
import {motion} from 'framer-motion';
const Contact = () => {
  return (
    <div className="mt-32" id="Contact">
      <motion.h1

      initial={{y:50}}
      whileInView={{y:[-50,0,-35,0,-20,0]}}
      transition={{duration:2,delay:0}}
      viewport={{once:true}}
      className="text-center text-5xl sm:text-7xl">
        Contact Me
      </motion.h1>
      <div className="my-8 flex flex-wrap gap-12 py-4 px-3 sm:justify-around">
          <Semicontact  
          Icon={HiOutlineMail} 
          title="Email"
          aType="mailto"
          aLink="yuvrajs2122005@gmail.com"
          />
          <Semicontact 
          Icon={FaPhoneAlt} 
          title="Phone"
          aType="tel"
          aLink="8306355477"
          />
      </div>
    </div>
  );
};
export default Contact;
