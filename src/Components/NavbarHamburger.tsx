import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavbarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden text-2xl">
      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed -left-8 -top-2 w-[50vw] h-screen border-r border-gray-300 transition-all duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        {/* Close Button */}
        <div
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxCross1 />
        </div>

        {/* Sidebar Content */}
        <div className="p-6 text-lg">
          <a href="#About" className="block py-2" onClick={()=>setIsOpen(!isOpen)}>About</a>
          <a href="#Projects" className="block py-2" onClick={()=>setIsOpen(!isOpen)}>Projects</a>
          <a href="#Skills" className="block py-2" onClick={()=>setIsOpen(!isOpen)}>Skills</a>
          <a href="#Contact" className="block py-2" onClick={()=>setIsOpen(!isOpen)}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarHamburger;