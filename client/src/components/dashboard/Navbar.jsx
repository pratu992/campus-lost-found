import { motion } from "framer-motion";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";

function Navbar({ user, onLogout }) {
  const firstName = user?.fullName
    ? user.fullName.split(" ")[0]
    : "Student";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl"
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/20">
            <FaSearch className="text-2xl text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Campus Lost & Found
            </h1>

            <p className="text-sm text-slate-400">
              Secure • Smart • Student Community
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs uppercase tracking-widest text-slate-400">
              Welcome Back
            </span>

            <span className="text-lg font-semibold text-white">
              {firstName}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onLogout}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-red-600"
          >
            <FaSignOutAlt />
            Logout
          </motion.button>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;