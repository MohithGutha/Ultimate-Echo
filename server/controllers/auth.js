import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


/* REGISTER THE USER */

/**
 * Registers a new user.
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body containing user details.
 * @param {string} req.body.firstName - The first name of the user.
 * @param {string} req.body.lastName - The last name of the user.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {string} req.body.picturePath - The profile picture path of the user.
 * @param {Array} req.body.friends - The friends of the user.
 * @param {string} req.body.location - The location of the user.
 * @param {string} req.body.occupation - The occupation of the user.
 * @param {string} req.body.teamAsscoiated - The team associated with the user.
 * @param {Object} res - The response object.
 * @returns {Object} The saved user object.
 * @throws {Object} Error object containing error message.
 */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      teamAsscoiated,
    } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "User exists, Please Login." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      teamAsscoiated,
      viewedProfile: Math.floor(Math.random() * 10000), // Dummy values for testing
      impressions: Math.floor(Math.random() * 10000), // Dummy values for testing
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};


/* LOGGING IN THE USER */

/**
 * Authenticates a user with email and password and returns a JWT token and user object.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing email and password.
 * @param {string} req.body.email - User's email.
 * @param {string} req.body.password - User's password.
 * @param {Object} res - Express response object.
 * @returns {Object} - Returns a JSON object containing a JWT token and user object.
 * @throws {Object} - Returns a JSON object containing an error message if there is an error.
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User doesn't exist. " });

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password; // Deleting the password so that it isn't sent back to the frontend
    res.status(200).json({ token, user });
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};

  