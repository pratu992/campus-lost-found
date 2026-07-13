import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaBoxOpen,
  FaTag,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAlignLeft,
  FaPhone,
} from "react-icons/fa";

import AuthBackground from "../components/AuthBackground";
import Navbar from "../components/dashboard/Navbar";

function ReportFound() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    location: "",
    date: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      itemName: "",
      category: "",
      location: "",
      date: "",
      description: "",
      contact: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
await axios.post("https://campus-lost-found-244q.onrender.com/api/items", {
  title: formData.itemName,
  description: formData.description,
  category: formData.category,
  location: formData.location,
  date: formData.date,
  type: "found", // or "lost" in ReportLost.jsx
  status: "open",
  createdBy: user.id,
});

      alert("Found Item Reported Successfully!");

      resetForm();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to report found item."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthBackground>
      <div className="min-h-screen text-white">

        <Navbar user={user} />

        <main className="mx-auto flex flex-col items-center px-6 py-10">

          {/* Hero */}

          <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl"
          >

            <div className="flex items-center gap-8">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl">

                <FaBoxOpen className="text-4xl text-white" />

              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  Report Found Item
                </h1>

                <p className="mt-2 text-slate-300">
                  Help someone recover their belongings by
                  reporting an item you've found.
                </p>

              </div>

            </div>

          </motion.section>

          {/* Form */}

          <motion.form
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            onSubmit={handleSubmit}
            className="w-full max-w-3xl space-y-6 rounded-3xl border border-white/15 bg-white/10 p-10 backdrop-blur-2xl shadow-2xl"
          >

            {/* Item Name */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Item Name
              </label>

              <div className="relative">

                <FaTag className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  placeholder="Enter item name"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />

              </div>

            </div>

            {/* Category */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-slate-900/40 px-4 py-3 text-white outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              >

                <option value="">Select Category</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Wallet</option>
                <option>Keys</option>
                <option>ID Card</option>
                <option>Bag</option>
                <option>Watch</option>
                <option>Others</option>

              </select>

            </div>

            {/* Found Location */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Found Location
              </label>

              <div className="relative">

                <FaMapMarkerAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />

              </div>

            </div>
            {/* Date Found */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Date Found
              </label>

              <div className="relative">

                <FaCalendarAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />

              </div>

            </div>

            {/* Description */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Description
              </label>

              <div className="relative">

                <FaAlignLeft className="pointer-events-none absolute left-4 top-5 text-slate-400" />

                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the found item..."
                  className="w-full resize-none rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />

              </div>

            </div>

            {/* Contact Number */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Contact Number
              </label>

              <div className="relative">

                <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                  className="w-full rounded-xl border border-white/15 bg-slate-900/40 py-3 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={resetForm}
                disabled={loading}
                className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Clear Form
              </button>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Reporting..." : "Report Found Item"}
              </button>

            </div>

          </motion.form>

        </main>

      </div>

    </AuthBackground>
  );
}

export default ReportFound;