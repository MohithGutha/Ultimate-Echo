import User from "../models/User.js";

/* READ OPERATION */

/**
 * Get a user by ID.
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the user to retrieve.
 * @param {Object} res - The response object.
 * @returns {Object} The user object.
 * @throws {Object} The error message object.
 */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } 
  catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/**
 * Retrieves friends of a user from the database and formats the response to be sent to the frontend.
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the user whose friends are to be retrieved.
 * @returns {Object} The formatted list of friends of the user.
 * @throws {Object} The error message if the user is not found.
 */
export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all( // using Promise, as we are making multiple requests to the DB, for finding the friends of the user
      user
        .friends.map((id) => User.findById(id))
    );

    // Formatting properly to the frontend
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath, teamAssociated }) => {
        return { _id, firstName, lastName, occupation, location, picturePath, teamAssociated };
      }
    );
    res.status(200).json(formattedFriends);
  } 
  catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE OPERATION */

/**
 * Function to add or remove a friend from a user's friend list.
 * @async
 * @function addRemoveFriend
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The id of the user.
 * @param {string} req.params.friendID - The id of the friend to add or remove.
 * @returns {Object} The updated friend list of the user.
 * @throws {Object} The error message if the user or friend is not found.
 */
export const addRemoveFriend = async (req, res) => { // Function to Add / Remove a friend
  try {
    const { id, friendID } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendID);

    // If friend exists, remove him from the friend list
    if (user.friends.includes(friendID)) {
      
      user.friends = user.friends.filter((id) => id !== friendID); // Removing the friend from the user's friend list
      
      friend.friends = friend.friends.filter((id) => id !== id); // Removing the user from the friend's friend list
    } 
    // Else, add him to the friend list
    else {
      user.friends.push(friendID);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath, teamAssociated }) => {
        return { _id, firstName, lastName, occupation, location, picturePath, teamAssociated };
      }
    );

    // Send the updated friend list to the frontend
    res.status(200).json(formattedFriends);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
};
