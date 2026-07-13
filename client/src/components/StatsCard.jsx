import { motion } from "framer-motion";

function StatsCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="
        rounded-2xl
        border
        border-white/15
        bg-white/8
        backdrop-blur-xl
        p-5
        text-center
        shadow-xl
      "
    >
      <h2 className="text-3xl font-bold text-white">
        {number}
      </h2>

      <p className="mt-2 text-sm text-gray-300">
        {label}
      </p>
    </motion.div>
  );
}

export default StatsCard;