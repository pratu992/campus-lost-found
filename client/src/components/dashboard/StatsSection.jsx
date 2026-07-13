import { FaBox, FaSearch, FaPlusCircle, FaCheckCircle } from "react-icons/fa";
import StatCard from "./StatCard";

function StatsSection({ stats, loading }) {
  return (
    <section className="mb-14">

      <div className="mb-8 text-center">

        <h2 className="text-4xl font-bold text-white">
          Dashboard Statistics
        </h2>

        <p className="mt-2 text-slate-400">
          Live overview of all reported campus items.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Items"
          value={loading ? "..." : stats.totalItems}
          icon={<FaBox />}
          color="from-cyan-500 to-blue-600"
        />

        <StatCard
          title="Lost Items"
          value={loading ? "..." : stats.lostItems}
          icon={<FaSearch />}
          color="from-pink-500 to-red-500"
        />

        <StatCard
          title="Found Items"
          value={loading ? "..." : stats.foundItems}
          icon={<FaPlusCircle />}
          color="from-green-500 to-emerald-500"
        />

        <StatCard
          title="Returned"
          value={loading ? "..." : stats.returnedItems}
          icon={<FaCheckCircle />}
          color="from-purple-500 to-indigo-500"
        />

      </div>

    </section>
  );
}

export default StatsSection;