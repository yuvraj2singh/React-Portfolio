import ProjectLeft from "./Projects/ProjectLeft";
import ProjectRight from "./Projects/ProjectRight";
import { motion } from "framer-motion";
import { ltr, rtl } from "../framerFunctions";

const Projects = () => {
  return (
    <div className="mt:18 sm:mt-32" id="Projects">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        variants={ltr(0)}
        initial="hidden"
        transition={{ duration: 0.5 }}
        className="text-center text-6xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-100">
        Projects
      </motion.h1>
      <ProjectLeft
        title={"Zomato Home UI clone"}
        desc={
          "Created clone of Zomato's Home Interface using HTML CSS JAVASCRIPT"
        }
        imgUrl={"/Images/zomato_pic.png"}
        hostLink={
          "https://www.linkedin.com/posts/yuvrajs212_created-clone-of-zomatos-home-interface-activity-7246948699505868800-j52D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEubfgBfyhA4F0_BvJWWFUdpd-76VE7vkw"
        }
        techs={["HTML", "CSS", "JAVASCRIPT"]}
      />
      <ProjectRight
        title={"Paytm Home UI clone"}
        desc={
          "This is a Paytm Home Page UI clone project done using Tailwind CSS to enhance the knowledge of Tailwind responsive web design techniques and classes"
        }
        imgUrl={"/Images/paytmss.png"}
        hostLink={"https://effervescent-palmier-fbd858.netlify.app/"}
        techs={["HTML", "CSS", "JAVASCRIPT", "TAILWIND"]}
      />
      <ProjectLeft
        title={"Personal Portfolio"}
        desc={
          "This is a Personal Portfolio website which i made using HTML CSS JAVASCRIPT (Sept-Oct 2024)"
        }
        imgUrl={"/Images/personal-portfolio.png"}
        hostLink={"https://diwali-project-personal-portfolio.netlify.app"}
        techs={["HTML", "CSS", "JAVASCRIPT"]}
      />
    </div>
  );
};
export default Projects;
