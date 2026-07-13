import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaUser,
  FaIdCard,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaGraduationCap,
  FaLock,
  FaUpload,
} from "react-icons/fa";

import AuthBackground from "../components/AuthBackground";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    usn: "",
    email: "",
    phone: "",
    department: "",
    semester: "",
    password: "",
    confirmPassword: "",
    idCard: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      usn: "",
      email: "",
      phone: "",
      department: "",
      semester: "",
      password: "",
      confirmPassword: "",
      idCard: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          fullName: formData.fullName,
          usn: formData.usn,
          email: formData.email,
          phone: formData.phone,
          department: formData.department,
          semester: Number(formData.semester),
          password: formData.password,
        }
      );

      alert(res.data.message);

      resetForm();

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthBackground>

      <div className="min-h-screen flex items-center justify-center px-6 py-12">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl rounded-3xl border border-white/15 bg-white/10 p-10 backdrop-blur-2xl shadow-2xl"
        >

          {/* Header */}

          <div className="mb-10 text-center">

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl">

              <FaUser className="text-4xl text-white" />

            </div>

            <h1 className="text-5xl font-bold text-white">
              Create Account
            </h1>

            <p className="mt-3 text-slate-300">
              Join Campus Lost & Found and help build a
              smarter student community.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Full Name */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-white">
                Full Name
              </label>

              <div className="relative">

                <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* USN */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-white">
                USN / Student ID
              </label>

              <div className="relative">

                <FaIdCard className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="usn"
                  value={formData.usn}
                  onChange={handleChange}
                  placeholder="Enter your USN"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-white">
                University Email
              </label>

              <div className="relative">

                <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your university email"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* Phone */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-white">
                Phone Number
              </label>

              <div className="relative">

                <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>
            {/* Department & Semester */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-white">
                  Department
                </label>

                <div className="relative">

                  <FaBuilding className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="ISE">ISE</option>
                    <option value="AIML">AIML</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                  </select>

                </div>

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-white">
                  Semester
                </label>

                <div className="relative">

                  <FaGraduationCap className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>

                </div>

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-white">
                Password
              </label>

              <div className="relative">

                <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-white">
                Confirm Password
              </label>

              <div className="relative">

                <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* Student ID */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-white">
                Upload Student ID Card
              </label>

              <div className="relative">

                <FaUpload className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="file"
                  name="idCard"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-white hover:file:bg-cyan-600"
                />

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4">

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </div>

            {/* Login Link */}

            <div className="pt-4 text-center">

              <p className="text-slate-300">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Login
                </Link>

              </p>

            </div>

          </form>

        </motion.div>

      </div>

    </AuthBackground>
  );
}

export default Register;