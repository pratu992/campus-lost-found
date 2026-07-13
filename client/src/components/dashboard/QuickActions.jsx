import { FaSearch, FaPlusCircle, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import ActionCard from "./ActionCard";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <section className="mb-12">

      <div className="mb-8 text-center">

        <h2 className="text-4xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-400">
          Access the most frequently used features with a single click.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        <ActionCard
          title="Report Lost Item"
          description="Lost something on campus? Create a report and let others help you find it."
          icon={<FaSearch />}
          buttonText="Report Lost"
          onClick={() => navigate("/report-lost")}
        />

        <ActionCard
          title="Report Found Item"
          description="Found an item? Submit its details so it can be returned to the rightful owner."
          icon={<FaPlusCircle />}
          buttonText="Report Found"
          onClick={() => navigate("/report-found")}
        />

        <ActionCard
          title="View All Items"
          description="Browse, search, filter and manage every reported item from one place."
          icon={<FaClipboardList />}
          buttonText="View Items"
          onClick={() => navigate("/items")}
        />

      </div>

    </section>
  );
}

export default QuickActions;