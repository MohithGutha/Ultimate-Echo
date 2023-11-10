import mongoose from "mongoose";

/**
 * Mongoose schema for a social media post.
 * @typedef {Object} PostSchema
 * @property {string} userID - The ID of the user who created the post.
 * @property {string} firstName - The first name of the user who created the post.
 * @property {string} lastName - The last name of the user who created the post.
 * @property {string} [location] - The location of the user who created the post (optional).
 * @property {string} description - The description of the post.
 * @property {string} picturePath - The path to the picture associated with the post.
 * @property {string} userPicturePath - The path to the user's profile picture.
 * @property {Map<boolean>} likes - A map of user IDs to boolean values indicating whether they have liked the post.
 * @property {Array} comments - An array of comment objects associated with the post.
 * @property {Date} createdAt - The date the post was created.
 * @property {Date} updatedAt - The date the post was last updated.
 */
const postSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String, // Optional
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map, // Efficient way to store data in MongoDB when compared to an array, when we want to store a large amount of data
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
