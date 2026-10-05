import { motion } from "framer-motion";
import { ltr, rtl } from "../../framerFunctions";

const items = [
  { text: "Solved 300+ problems on LeetCode, demonstrating strong proficiency in DSA.", date: "Oct 2025 – Present" },
  { text: "Achieved a 1700+ rating in LeetCode contests, reflecting strong coding skills.", date: "Nov 2025 – Present" },
  { text: "Got Rank 1616 in LeetCode Weekly Contest 518 out of 40,000+ participants.", date: "Sept 2026" },
  { text: "Ranked in the Top 20 in an inter-college hackathon among 100+ teams.", date: "Oct 2025" },
  { text: "Ranked in the Top 5 in an inter-college quiz among 500+ participants.", date: "Oct 2024" },
];

const Achievements = () => {
  return (
    <div className="mt-32" id="Achievements">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        variants={rtl(0)}
        initial="hidden"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-6xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-100"
      >
        Achievements
      </motion.h1>

      <div className="mt-10 flex flex-col gap-5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, x: 0 }}
            variants={i % 2 === 0 ? ltr(i * 0.08) : rtl(i * 0.08)}
            initial="hidden"
            viewport={{ once: true }}
            className="border px-6 py-5 bg-white/10 backdrop-blur-lg border-white/20 shadow-xl rounded-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <div className="flex items-start gap-4">
              <span className="text-purple-400 font-bold text-lg flex-shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <p className="text-gray-200 leading-relaxed">{item.text}</p>
            </div>
            <span className="text-gray-500 text-sm flex-shrink-0 sm:text-right pl-8 sm:pl-0">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
