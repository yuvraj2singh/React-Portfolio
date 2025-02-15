import Navbar from "./Components/Navbar.js";
import Intro from "./Components/Intro.js";
import About from "./Components/About.js";
import Technologies from "./Components/Technologies.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import CopyRight from "./Components/CopyRight.js";
import Navigations from "./Components/Navigations.js";
function App() {
  return (
    <div className="text-white selection:bg-orange-500 selection:text-white ">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-6" id="all-content">
        <Navbar />
        <Intro />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Navigations />
        <CopyRight />
      </div>
    </div>
  );
}

export default App;