import { motion } from "framer-motion";

function PrimaryButton({
  children,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-blue-700
        py-4
        font-semibold
        text-lg
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:shadow-blue-500/30
        disabled:opacity-60
        disabled:cursor-not-allowed
      `}
    >
      {/* Animated Shine */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          group-hover:translate-x-full
          transition-transform
          duration-1000
        "
      />

      {/* Button Text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

export default PrimaryButton;