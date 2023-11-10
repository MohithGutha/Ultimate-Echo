import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ ROUTES */
router.get("/", verifyToken, getFeedPosts); // for getting the posts of all the users
router.get("/:userID/posts", verifyToken, getUserPosts); // for getting the posts of a particular user

/* UPDATE ROUTES */
router.patch("/:id/like", verifyToken, likePost); // for Liking & unLiking the posts

export default router;
