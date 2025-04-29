import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Register user function with password hashing and role assignment
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Check if this is the first user
    const isFirstUser = (await User.countDocuments()) === 0;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // If first user, assign 'admin' role
    const userRole = isFirstUser ? 'admin' : 'user';

    // Create the user with hashed password and role
    const user = await User.create({ name, email, password: hashedPassword, role: userRole });

    // Generate JWT token
    const token = generateToken(user._id);

    // Respond with user details and token
    res.status(201).json({ user: { _id: user._id, name, email, role: userRole }, token });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login user function
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials (email not found)" });
    }

    console.log("User found:", user);
    console.log("Plain password:", password);
    console.log("Hashed password from DB:", user.password);


    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials (wrong password)" });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
