import { motion } from "framer-motion";

function WelcomeBanner({ firstName, stats }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left */}
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-10 shadow-2xl">

          <span className="inline-flex rounded-full bg-cyan-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Dashboard
          </span>

          <h1 className="mt-5 text-5xl font-bold text-white leading-tight">
            Welcome,
            <span className="text-cyan-400"> {firstName}</span> 👋
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Manage lost & found reports, help students recover their
            belongings, and monitor campus activity from one modern dashboard.
          </p>

        </div>

        {/* Right */}
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl">

          <h2 className="text-xl font-bold text-white">
            Today's Summary
          </h2>

          <div className="mt-8 space-y-5">

            <SummaryRow
              label="Total Items"
              value={stats.totalItems}
            />

            <SummaryRow
              label="Lost Items"
              value={stats.lostItems}
            />

            <SummaryRow
              label="Found Items"
              value={stats.foundItems}
            />

            <SummaryRow
              label="Returned"
              value={stats.returnedItems}
            />

          </div>

        </div>

      </div>
    </motion.section>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">

      <span className="text-slate-300">
        {label}
      </span>

      <span className="text-2xl font-bold text-cyan-400">
        {value}
      </span>

    </div>
  );
}

export default WelcomeBanner;