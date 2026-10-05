import { motion } from "framer-motion";
import { ltr } from "../../framerFunctions";

const points = [
  "Selected among 240 students from 4,500 applicants for an intensive offline DSA training program led by industry specialists, focusing on problem-solving, logical thinking, and competitive programming.",
  "Studied core data structures and algorithms through structured instruction, problem-solving sessions, hands-on implementation, and regular practice with algorithmic coding problems.",
  "Participated in multiple evaluation examinations during the training period, demonstrating consistent performance and strong understanding of data structures, algorithms, and problem-solving concepts.",
];

const Training = () => {
  return (
    <div className="mt-32" id="Training">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        variants={ltr(0)}
        initial="hidden"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-6xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-100"
      >
        Training
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-10 border px-6 sm:px-10 py-8 bg-white/10 backdrop-blur-lg border-white/20 shadow-xl rounded-4xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-white/10">
          <div>
            <h3 className="text-2xl sm:text-3xl">Summer Training</h3>
            <p className="text-gray-400 mt-1">Data Structures and Algorithms</p>
          </div>
          <span className="text-gray-500 text-sm sm:text-base flex-shrink-0">Jun 2026 – Aug 2026</span>
        </div>

        <ul className="mt-6 space-y-5">
          {points.map((p, i) => (
            <motion.li
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              variants={ltr(i * 0.15)}
              initial="hidden"
              viewport={{ once: true }}
              className="flex gap-3 text-gray-300 leading-relaxed"
            >
              <span className="text-purple-400 mt-1 flex-shrink-0">—</span>
              {p}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Training;
