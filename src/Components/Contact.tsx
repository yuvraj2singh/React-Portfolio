import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import Semicontact from "./SemiContact/Semicontact";
const Contact = () => {
  return (
    <div className="mt-32" id="Contact">
      <h1 className="text-center text-5xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-300">
        Contact Me
      </h1>
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
