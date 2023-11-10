import mongoose from "mongoose";

/**
 * Mongoose schema for User model.
 * @typedef {Object} UserSchema
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} picturePath - The path of the user's profile picture.
 * @property {Array} friends - The list of user's friends.
 * @property {string} location - The location of the user.
 * @property {string} occupation - The occupation of the user.
 * @property {string} teamAssociated - The team associated with the user.
 * @property {number} viewedProfile - The number of times the user's profile has been viewed.
 * @property {number} impressions - The number of times the user's profile has been displayed.
 * @property {Date} createdAt - The timestamp of when the user was created.
 * @property {Date} updatedAt - The timestamp of when the user was last updated.
 */
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    teamAssociated: String, // Custom field
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;