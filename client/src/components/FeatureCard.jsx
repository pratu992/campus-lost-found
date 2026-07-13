import { motion } from "framer-motion";

function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      className="
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-white/15
        bg-white/8
        backdrop-blur-xl
        p-5
        transition-all
        duration-300
        hover:border-blue-400/30
        hover:bg-white/12
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-2xl shadow-lg">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;