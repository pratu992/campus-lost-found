import { useNavigate } from "react-router-dom";
import homeBg from "../assets/images/home-bg.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${homeBg})`,
      }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-12 text-center max-w-2xl mx-4">

        <h1 className="text-6xl font-bold text-white">
          Campus Lost & Found
        </h1>

        <p className="mt-6 text-gray-200 text-xl">
          Helping students reconnect with their belongings quickly, securely,
          and effortlessly.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105"
        >
          Get Started →
        </button>

      </div>
    </div>
  );
}

export default Home;