import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon,
  color = "from-blue-500 to-cyan-500",
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.04,
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
      {/* Background Glow */}
      <div
        className={`
          absolute
          -top-16
          -right-16
          h-40
          w-40
          rounded-full
          bg-gradient-to-br
          ${color}
          opacity-20
          blur-3xl
          transition-all
          duration-500
          group-hover:scale-125
        `}
      />

      {/* Decorative Line */}
      <div
        className={`
          absolute
          top-0
          left-0
          h-1
          w-full
          bg-gradient-to-r
          ${color}
        `}
      />

      <div className="relative z-10 flex items-center justify-between p-7">

        {/* Left */}
        <div>

          <p className="text-sm font-medium uppercase tracking-wider text-slate-300">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Updated just now
          </p>

        </div>

        {/* Right */}
        <div
          className={`
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            ${color}
            text-white
            shadow-xl
            transition-transform
            duration-300
            group-hover:rotate-6
            group-hover:scale-110
          `}
        >
          <div className="text-3xl">
            {icon}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;