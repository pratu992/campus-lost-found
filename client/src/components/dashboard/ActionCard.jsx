import { motion } from "framer-motion";

function ActionCard({
  title,
  description,
  icon,
  buttonText,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-2xl
        shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

      {/* Background Glow */}
      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

      <div className="relative z-10 flex h-full flex-col p-8">

        {/* Icon */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl transition duration-300 group-hover:rotate-6 group-hover:scale-110">
          <div className="text-3xl">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 flex-grow text-base leading-7 text-slate-300">
          {description}
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onClick}
          className="
            mt-8
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            py-4
            text-lg
            font-semibold
            text-white
            shadow-lg
            transition
            hover:shadow-cyan-500/40
          "
        >
          {buttonText}
        </motion.button>

      </div>
    </motion.div>
  );
}

export default ActionCard;