import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSearch,
  FaShieldAlt,
  FaBoxOpen,
  FaArrowRight,
} from "react-icons/fa";

import AuthBackground from "../components/AuthBackground";
import GlassCard from "../components/GlassCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import FeatureCard from "../components/FeatureCard";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "https://campus-lost-found-244q.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Welcome Back!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthBackground>

      <div className="min-h-screen flex items-center justify-center px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* ================= LEFT PANEL ================= */}

            <div className="hidden lg:flex flex-col justify-between p-14 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-cyan-900/70 relative overflow-hidden">

              <div className="absolute -top-28 -left-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

              <div className="relative z-10">

                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: .2 }}
                  className="text-5xl font-extrabold text-white leading-tight"
                >
                  Campus
                  <br />
                  Lost &
                  <span className="text-cyan-300"> Found</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: .4 }}
                  className="mt-8 text-gray-200 text-lg leading-8 max-w-md"
                >
                  Helping students reconnect with their belongings
                  through a secure and intelligent campus platform.
                </motion.p>

              </div>

              <div className="relative z-10 space-y-5 mt-16">

                <FeatureCard
                  icon={<FaSearch />}
                  title="Instant Search"
                  description="Quickly locate lost and found items."
                />

                <FeatureCard
                  icon={<FaShieldAlt />}
                  title="Secure Platform"
                  description="Only verified students can access."
                />

                <FeatureCard
                  icon={<FaBoxOpen />}
                  title="Easy Reporting"
                  description="Report lost or found items within seconds."
                />

              </div>

              <div className="relative z-10 mt-10 text-gray-300 text-sm">
                © 2026 Campus Lost & Found System
              </div>

            </div>

            {/* ================= RIGHT PANEL ================= */}

            <div className="flex items-center justify-center bg-black/20 p-8 lg:p-14">

              <GlassCard className="w-full max-w-md">

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: .2 }}
                >

                  <h2 className="text-4xl font-bold text-white">
                    Welcome Back 👋
                  </h2>

                  <p className="text-gray-300 mt-3 mb-8">
                    Sign in to continue to your account.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    <InputField
                      icon={<FaEnvelope />}
                      label="Email Address"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <div className="relative">

                      <InputField
                        icon={<FaLock />}
                        label="Password"
                        type={
                          showPassword ? "text" : "password"
                        }
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-4 top-[52px] text-gray-400 hover:text-white transition"
                      >
                        {showPassword ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </button>

                    </div>

                    <div className="flex justify-between items-center text-sm">

                      <label className="flex items-center gap-2 text-gray-300">
                        <input
                          type="checkbox"
                          className="accent-cyan-500"
                        />
                        Remember me
                      </label>

                      <button
                        type="button"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        Forgot Password?
                      </button>

                    </div>
                                        <PrimaryButton
                      type="submit"
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Signing In...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          Login
                          <FaArrowRight />
                        </div>
                      )}
                    </PrimaryButton>

                  </form>

                  <div className="my-8 flex items-center">
                    <div className="flex-1 h-px bg-white/20"></div>

                    <span className="px-4 text-sm text-gray-400">
                      OR
                    </span>

                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>

                  <p className="text-center text-gray-300">
                    Don't have an account?
                  </p>

                  <Link
                    to="/register"
                    className="block mt-4"
                  >
                    <button
                      className="
                        w-full
                        py-3
                        rounded-xl
                        border
                        border-cyan-400/40
                        text-cyan-300
                        font-semibold
                        transition
                        duration-300
                        hover:bg-cyan-500/10
                        hover:border-cyan-300
                      "
                    >
                      Create New Account
                    </button>
                  </Link>

                </motion.div>

              </GlassCard>

            </div>

          </div>

        </motion.div>

      </div>

    </AuthBackground>
  );
}

export default Login;