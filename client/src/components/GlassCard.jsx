import { motion } from "framer-motion";

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/20
        bg-white/10
        backdrop-blur-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        p-10
        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/10
        before:via-transparent
        before:to-blue-500/5
        before:pointer-events-none
        ${className}
      `}
    >
      {/* Top Glow */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassCard;