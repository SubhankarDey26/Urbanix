import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, contact, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Create new user (password is hashed by pre-save hook)
    const user = await User.create({
      fullname,
      email,
      contact,
      password,
      role,
    });

    // Generate JWT token using config
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRY,
    });

    // Set token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      data: userResponse,
    });
  } catch (error) {
    console.error("Register error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


