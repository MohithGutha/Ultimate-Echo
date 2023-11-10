import { createSlice } from "@reduxjs/toolkit";


// Setting the initial state of the app
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

/**
 * Creates a slice of the Redux store for authentication state.
 *
 * @typedef {Object} AuthState
 * @property {string} mode - The current mode of the app (light or dark).
 * @property {Object} user - The authenticated user object.
 * @property {string} token - The authentication token for the user.
 * @property {Array} posts - The posts in the app.
 *
 * @typedef {Object} SetLoginAction
 * @property {Object} payload - The payload of the action.
 * @property {Object} payload.user - The authenticated user object.
 * @property {string} payload.token - The authentication token for the user.
 *
 * @typedef {Object} SetFriendsAction
 * @property {Object} payload - The payload of the action.
 * @property {Array} payload.friends - The friends of the authenticated user.
 *
 * @typedef {Object} SetPostsAction
 * @property {Object} payload - The payload of the action.
 * @property {Array} payload.posts - The posts in the app.
 *
 * @typedef {Object} SetPostAction
 * @property {Object} payload - The payload of the action.
 * @property {Object} payload.post - The post to be updated.
 *
 * @typedef {Object} AuthSlice
 * @property {string} name - The name of the slice.
 * @property {AuthState} initialState - The initial state of the slice.
 * @property {Object} reducers - The reducers of the slice.
 * @property {Function} reducers.setMode - The reducer for setting the mode of the app.
 * @property {Function} reducers.setLogin - The reducer for setting the authenticated user and token.
 * @property {Function} reducers.setLogout - The reducer for logging out the user.
 * @property {Function} reducers.setFriends - The reducer for setting the friends of the authenticated user.
 * @property {Function} reducers.setPosts - The reducer for setting the posts in the app.
 * @property {Function} reducers.setPost - The reducer for updating a post in the app.
 */
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    setFriends: (state, action) => {
      if (state.user) { // If user exists
        state.user.friends = action.payload.friends;
      } 
      else {
        console.error("user friends non-existent");
      }
    },

    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post; // Update the post after it has been edited
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;

export default authSlice.reducer;
