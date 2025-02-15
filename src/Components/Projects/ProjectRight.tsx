import { motion } from "framer-motion";

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
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.3 }}
      viewport={{ once: true }}
      className="my-8 flex flex-wrap-reverse justify-center lg:justify-around items-center gap-4 sm:gap-8 border px-3 py-6 bg-white/10 backdrop-blur-lg border-white/20 shadow-xl rounded-4xl"
    >
      <div className="flex flex-wrap gap-8 sm:gap-12 mt-8 mx-10 sm:mx-16">
        <div>
          <h3 className="text-2xl sm:text-3xl">{title}</h3>
          <p className="sm:w-[400px] text-justify mt-6">{desc}</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            {techs.map((t: string, index: number) => (
              <span
                key={index} // 🔥 Prevents React key issues in mapping
                className="text-purple-500 text-xs p-2 border rounded-md border-gray-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-hidden border border-gray-400 rounded-2xl">
        <a href={hostLink} target="_blank">
          <img
            className="w-[350px] sm:w-[400px] hover:scale-110 transition-all duration-300"
            src={imgUrl}
            alt={title}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectLeft;