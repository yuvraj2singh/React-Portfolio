import { motion } from "framer-motion";
import { ltr, rtl } from "../../framerFunctions";

interface ProjectProps {
  title: string;
  desc: string;
  imgUrl: string;
  hostLink: string;
  techs: string[];
}

const ProjectLeft: React.FC<ProjectProps> = ({
  title,
  desc,
  imgUrl,
  hostLink,
  techs,
}) => {
  return (
    <div className="my-8 flex flex-wrap-reverse justify-center lg:justify-around items-center  gap-4 sm:gap-8 border px-3 py-6 bg-white/10 backdrop-blur-lg border-white/20 shadow-xl rounded-4xl">
      <div className="flex flex-wrap gap-8 sm:gap-12 mt-8 mx-10 sm:mx-16 ">
        <motion.div
          variants={ltr(0.25)}
          whileInView={{ x: 0, opacity: 1 }}
          initial="hidden"
          transition={{ duration: 0.75 }}>
          <h3 className="text-2xl sm:text-3xl">{title}</h3>
          <p className="sm:w-[400px] text-justify mt-6">{desc}</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            {techs.map((t: string) => (
              <span className="text-purple-500 text-xs p-2 border rounded-md border-gray-400 ">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={rtl(0.25)}
        whileInView={{ x: 0, opacity: 1 }}
        initial="hidden"
        transition={{ duration: 0.75 }}
        className="overflow-hidden border border-gray-400 rounded-2xl">
        <a href={hostLink} target="_blank">
          <img
            className="w-[350px] sm:w-[400px] hover:scale-110 transition-all duration-300"
            src={imgUrl}
            alt={title}
          />
        </a>
      </motion.div>
    </div>
  );
};
export default ProjectLeft;
