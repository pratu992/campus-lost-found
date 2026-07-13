import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    usn: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    semester: {
      type: Number,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    idCard: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);