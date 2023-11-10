import jwt from "jsonwebtoken";

/**
 * Middleware function to verify the authenticity of a JSON Web Token (JWT) passed in the request header.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} - Returns the next middleware function if the token is verified, otherwise returns an error response.
 * @throws {Object} - Throws an error response if the token is invalid or not provided.
 */
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization"); // Token will be set in the header("Authorization") of the request in the frontend

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) { // On the frontend side we set the token to "Bearer " + token
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;

    next(); // Move on to the next middleware
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};
