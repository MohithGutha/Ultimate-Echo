import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"; 
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path"; // This is a native package that comes with Node.js
import { fileURLToPath } from "url";    // Used to set the paths while configuring directories


import authRoutes from "./routes/auth.js"; // AUTH ROUTE
import userRoutes from "./routes/users.js"; // USER ROUTE
import postRoutes from "./routes/posts.js"; // POST ROUTE

import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";

import { verifyToken } from "./middleware/auth.js";

// For populating the DB with dummy data for the first time
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";



/* CONFIGURATIONS */

/// -> My comments with 3 slashes are used to explain the code below
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/// Both of the above configurations are used to set the paths while configuring directories 
/// & is only used when we set the type to "module" in package.json
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); /// Invoke cross origin resource sharing to allow the frontend to access the backend
app.use("/assets", express.static(path.join(__dirname, "public/assets")));



/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });


/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);


/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register); // Register route, with a single file upload as middleware, & register as controller
app.post("/posts", verifyToken, upload.single("picture"), createPost); // Create post route, with tokenverification & a single file upload as middleware, & createPost as controller


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 4001;
mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
      /* ADD DATA ONE TIME to populate the Database */
      // User.insertMany(users);
      // Post.insertMany(posts);
    })
    .catch((error) => console.log(`${error} did not connect`));







