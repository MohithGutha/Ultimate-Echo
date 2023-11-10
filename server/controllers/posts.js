import Post from "../models/Post.js";
import User from "../models/User.js";


/**
 * Creates a new post and saves it to the database.
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body containing userID, description, and picturePath.
 * @param {string} req.body.userID - The ID of the user creating the post.
 * @param {string} req.body.description - The description of the post.
 * @param {string} req.body.picturePath - The path of the picture associated with the post.
 * @param {Object} res - The response object.
 * @returns {Object} - The newly created post.
 * @throws {Object} - The error message if the post creation fails.
 */
export const createPost = async (req, res) => {
  try {
    const { userID, description, picturePath } = req.body;
    const user = await User.findById(userID);
    const newPost = new Post({
      userID,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location, // Optional
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find(); // Grabbing all the posts of the user
    res.status(201).json(post);
  } 
  catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/**
 * Retrieves all posts from the database and sends them as a JSON response.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all posts.
 * @throws {Object} - JSON response containing an error message if there was an error retrieving the posts.
 */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } 
  catch (err) {
    res.status(404).json({ message: err.message });
  }
};



/**
 * Get all posts of a user
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @returns {object} - Returns an object containing all posts of a user
 * @throws {object} - Throws an error if posts are not found
 */
export const getUserPosts = async (req, res) => {
  try {
    const { userID } = req.params;
    const post = await Post.find({ userID });
    res.status(200).json(post);
  } 
  catch (err) {
    res.status(404).json({ message: err.message });
  }
};


/**
 * Toggles the like status of a post for a given user.
 * @async
 * @function likePost
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the post to be liked/unliked.
 * @param {string} req.body.userID - The ID of the user liking/unliking the post.
 * @returns {Object} The updated post object.
 * @throws {Object} The error object containing the error message.
 */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params; // id -> postID
    const { userID } = req.body; 
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userID);

    // If the user has already liked the post, then we will unlike it
    if (isLiked) {
      post.likes.delete(userID);
    } 
    // If the user hasn't liked the post, then we will like it
    else {
      post.likes.set(userID, true);
    }

    // Updating the post
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } 
  catch (err) {
    res.status(404).json({ message: err.message });
  }
};
