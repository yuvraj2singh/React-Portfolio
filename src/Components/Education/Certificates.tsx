import { motion } from "framer-motion";
import { rtl } from "../../framerFunctions";
import { HiOutlineExternalLink } from "react-icons/hi";

const certs = [
  { name: "Cloud Computing", issuer: "Nptel", date: "Oct 2026", link: "" },
  { name: "IamNeo DSA Course", issuer: "IamNeo", date: "Dec 2025", link: "" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", date: "Sept 2025", link: "" },
  { name: "Data Structures and Algorithms in Java", issuer: "ApnaCollege", date: "Jan 2025", link: "" },
];

const Certificates = () => {
  return (
    <div className="mt-32" id="Certificates">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        variants={rtl(0)}
        initial="hidden"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-6xl sm:text-7xl text-gray-400 hover:text-white transition-all duration-100"
      >
        Certificates
      </motion.h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="border px-6 py-6 bg-white/10 backdrop-blur-lg border-white/20 shadow-xl rounded-4xl flex items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl sm:text-2xl">{c.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{c.issuer}</p>
            </div>
            <div className="text-right flex-shrink-0 flex flex-col items-end gap-1">
              <p className="text-gray-500 text-sm">{c.date}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 text-xs hover:text-purple-300 flex items-center gap-1 transition-colors duration-200"
                >
                  View <HiOutlineExternalLink />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
