import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaSave,
  FaTag,
  FaAlignLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const categories = [
  "Mobile",
  "Laptop",
  "Wallet",
  "Keys",
  "ID Card",
  "Bag",
  "Watch",
  "Electronics",
  "Books",
  "Others",
];

const EditItemModal = ({
  item,
  isOpen,
  onClose,
  onUpdate,
}) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    date: "",
    status: "open",
  });

  useEffect(() => {
    if (!item) return;

    setFormData({
      title: item.title || "",
      description: item.description || "",
      category: item.category || "",
      location: item.location || "",
      date: item.date
        ? new Date(item.date).toISOString().split("T")[0]
        : "",
      status: item.status || "open",
    });
  }, [item]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.location ||
      !formData.date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      await axios.put(
        `http://localhost:5000/api/items/${item._id}`,
        formData
      );

      await onUpdate();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-cyan-600 to-blue-700 px-8 py-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Edit Item
                </h2>

                <p className="text-sm text-cyan-100">
                  Update item details
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 text-white transition hover:bg-white/20"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8"
            >
              {/* Title */}
              <div>
                <label className="mb-2 block font-medium text-white">
                  Title
                </label>

                <div className="relative">
                  <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Category & Status */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-white">
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >
                    {categories.map((cat) => (
                      <option
                        key={cat}
                        value={cat}
                      >
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium text-white">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >
                    <option value="open">
                      Open
                    </option>

                    <option value="returned">
                      Returned
                    </option>
                  </select>
                </div>
              </div>
              {/* Location */}
              <div>
                <label className="mb-2 block font-medium text-white">
                  Location
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                    placeholder="Enter location"
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block font-medium text-white">
                  Date
                </label>

                <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block font-medium text-white">
                  Description
                </label>

                <div className="relative">
                  <FaAlignLeft className="absolute left-4 top-5 text-slate-400" />

                  <textarea
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the item..."
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-4 pt-4">

                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="rounded-xl border border-slate-600 px-6 py-3 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FaSave />

                  {loading ? "Saving..." : "Save Changes"}
                </button>

              </div>

            </form>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
};

export default EditItemModal;