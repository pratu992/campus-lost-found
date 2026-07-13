import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaTag,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaBoxOpen,
} from "react-icons/fa";

function ItemCard({
  item,
  onReturn,
  onEdit,
  onDelete,
}) {
  const statusColor =
    item.status === "returned"
      ? "bg-green-500/20 text-green-400"
      : "bg-yellow-500/20 text-yellow-300";

  const typeColor =
    item.type === "lost"
      ? "bg-red-500/20 text-red-400"
      : "bg-cyan-500/20 text-cyan-400";

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-2xl
        shadow-2xl
      "
    >
      {/* Top Accent */}
      <div
        className={`absolute top-0 left-0 h-1 w-full ${
          item.type === "lost"
            ? "bg-gradient-to-r from-red-500 to-pink-500"
            : "bg-gradient-to-r from-cyan-500 to-blue-500"
        }`}
      />

      {/* Glow */}
      <div
        className={`absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-20 ${
          item.type === "lost"
            ? "bg-red-500"
            : "bg-cyan-500"
        }`}
      />

      <div className="relative z-10 p-7">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              {item.title}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${typeColor}`}
              >
                {item.type.toUpperCase()}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColor}`}
              >
                {item.status.toUpperCase()}
              </span>

            </div>

          </div>

          <div className="rounded-2xl bg-white/10 p-4 text-cyan-400">
            <FaBoxOpen size={26} />
          </div>

        </div>

        {/* Description */}
        <p className="mt-6 leading-7 text-slate-300">
          {item.description}
        </p>

        {/* Details */}
        <div className="mt-6 space-y-3">

          <div className="flex items-center gap-3 text-slate-300">
            <FaTag className="text-cyan-400" />
            <span>{item.category}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <FaMapMarkerAlt className="text-red-400" />
            <span>{item.location}</span>
          </div>

        </div>

        {/* Buttons */}

{(onReturn || onEdit || onDelete) && (
  <div className="mt-8 flex gap-3">

    {onReturn && item.status === "open" && (
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => onReturn(item._id)}
        className="
          flex-1
          rounded-xl
          bg-green-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-green-700
        "
      >
        <span className="flex items-center justify-center gap-2">
          <FaCheckCircle />
          Returned
        </span>
      </motion.button>
    )}

    {onEdit && (
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => onEdit(item)}
        className="
          rounded-xl
          bg-yellow-500
          px-4
          py-3
          text-white
          transition
          hover:bg-yellow-600
        "
      >
        <FaEdit />
      </motion.button>
    )}

    {onDelete && (
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => onDelete(item._id)}
        className="
          rounded-xl
          bg-red-600
          px-4
          py-3
          text-white
          transition
          hover:bg-red-700
        "
      >
        <FaTrash />
      </motion.button>
    )}

  </div>
)}

      </div>
    </motion.div>
  );
}

export default ItemCard;