import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import NavbarHamburger from "./NavbarHamburger";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-2 px-4 py-4 mt-2 bg-white/10 backdrop-blur-xl border border-white shadow-md rounded-lg flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
      <NavbarHamburger />
      <img className="w-16 sm:w-20" src="/Images/Logo.png" alt="Logo" />
      </div>

      {/* Navigations */}
      <div className="flex gap-4 hidden sm:flex text-2xl">
      <a className="border-b hover:border-b-gray-400 hover:text-gray-400 transition-all duration-300" href="#About">About</a>
      <a className="border-b hover:border-b-gray-400 hover:text-gray-400 transition-all duration-300" href="#Projects">Projects</a>
      <a className="border-b hover:border-b-gray-400 hover:text-gray-400 transition-all duration-300" href="#Skills">Skills</a>
      <a className="border-b hover:border-b-gray-400 hover:text-gray-400 transition-all duration-300" href="#Contact">Contact</a>
      </div>
      
      {/* Social Icons */}
      <div className="flex gap-3 sm:gap-4 text-3xl text-white">
        <a href="https://www.instagram.com/notmeyuvraj?igsh=eDlzMWRhdnh4aWtq" target="_blank">
          <FaInstagram className="hover:text-pink-400 transition duration-300 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/yuvrajs212/" target="_blank">
          <FaLinkedin className="hover:text-blue-500 hover:bg-white transition duration-300 cursor-pointer" />
        </a>
        <a href="https://github.com/yuvraj2singh" target="_blank">
          <FaGithub className="hover:text-gray-400 transition duration-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
