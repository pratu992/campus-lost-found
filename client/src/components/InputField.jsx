import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const getIcon = () => {
    if (type === "email") return <FaEnvelope />;
    if (type === "password") return <FaLock />;
    return <FaUser />;
  };

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-200 mb-2 tracking-wide">
        {label}
      </label>

      <div className="relative group">

        {/* Left Icon */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-400 transition">
          {getIcon()}
        </div>

        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="
            w-full
            rounded-2xl
            bg-white/10
            border
            border-white/20
            backdrop-blur-xl
            py-4
            pl-14
            pr-14
            text-white
            placeholder:text-gray-400
            transition-all
            duration-300
            outline-none
            focus:border-blue-400
            focus:ring-4
            focus:ring-blue-500/20
            hover:border-white/40
            hover:bg-white/15
          "
        />

        {/* Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;