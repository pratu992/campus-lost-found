import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Register User
export const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      usn,
      email,
      phone,
      department,
      semester,
      password,
    } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { usn }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      usn,
      email,
      phone,
      department,
      semester,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Registration Successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check whether user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        department: user.department,
        semester: user.semester,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};