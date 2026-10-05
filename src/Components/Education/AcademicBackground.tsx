import { motion } from "framer-motion";
import { ltr } from "../../framerFunctions";

const schools = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    score: "CGPA: 9.22",
    period: "Aug 2024 – Present",
  },
  {
    institution: "Central Academy School",
    location: "Pali, Rajasthan",
    degree: "CBSE 12th Standard",
    score: "87%",
    period: "Apr 2022 – May 2023",
  },
  {
    institution: "Central Academy School",
    location: "Pali, Rajasthan",
    degree: "CBSE 10th Standard",
    score: "95.6%",
    period: "Apr 2020 – May 2021",
  },
];

const AcademicBackground = () => {
  return (
    <div className="mt-32" id="Education">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        variants={ltr(0)}
        initial="hidden"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-6xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-100"
      >
        Education
      </motion.h1>

      <div className="mt-10 flex flex-col gap-6">
        {schools.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="border px-6 py-6 bg-white/10 backdrop-blur-lg border-white/20 shadow-xl rounded-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl">{s.institution}</h3>
              <p className="text-gray-400 text-sm mt-1">{s.location}</p>
              <p className="text-gray-300 mt-3">{s.degree}</p>
            </div>
            <div className="sm:text-right flex-shrink-0">
              <span className="text-purple-400 text-xl font-semibold">{s.score}</span>
              <p className="text-gray-500 text-sm mt-1">{s.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcademicBackground;
