import { motion } from "framer-motion";
import loginBg from "../assets/images/login-bg.png";

function AuthBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5,10,25,.78), rgba(5,10,25,.82)), url(${loginBg})`,
        }}
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>

    </div>
  );
}

export default AuthBackground;