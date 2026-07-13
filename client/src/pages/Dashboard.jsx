import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthBackground from "../components/AuthBackground";
import Navbar from "../components/dashboard/Navbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsSection from "../components/dashboard/StatsSection";
import QuickActions from "../components/dashboard/QuickActions";

const Dashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalItems: 0,
    lostItems: 0,
    foundItems: 0,
    returnedItems: 0,
  });

  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const firstName = user?.fullName
    ? user.fullName.split(" ")[0]
    : "Student";

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://campus-lost-found-244q.onrender.com/api/items/stats"
      );

      setStats({
        totalItems: res.data.totalItems || 0,
        lostItems: res.data.lostItems || 0,
        foundItems: res.data.foundItems || 0,
        returnedItems: res.data.returnedItems || 0,
      });
    } catch (err) {
      console.error("Error fetching dashboard stats:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthBackground>
      <div className="min-h-screen text-white">
        <Navbar
          user={user}
          onLogout={handleLogout}
        />

        <main className="mx-auto w-full max-w-7xl px-6 lg:px-10 py-10">

          <WelcomeBanner
            firstName={firstName}
            stats={stats}
          />

          <StatsSection
            stats={stats}
            loading={loading}
          />

          <QuickActions />

        </main>
      </div>
    </AuthBackground>
  );
};

export default Dashboard;