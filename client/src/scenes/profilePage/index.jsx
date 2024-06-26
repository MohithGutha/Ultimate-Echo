import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import AddPostWidget from "scenes/widgets/AddPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";
import axios from "axios";

/**
 * Renders the profile page of a user.
 */
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userID } = useParams();
  const token = useSelector((state) => state.token);
  const loggedUser = (useSelector((state) => state.user._id) === userID); // Checking if the profile asking for is of current loggedIn user or not
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  const getUser = async () => {
    try {
      // const response = await axios.get(`http://localhost:3001/users/${userID}`, {
      // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${userID}`, {
      const response = await axios.get(`${process.env.REACT_APP_VERCEL_URL}/users/${userID}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined} mt={loggedUser ? undefined : "2rem"}>
          <UserWidget userID={userID} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userID={userID} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {loggedUser && <AddPostWidget picturePath={user.picturePath} />}
          {/* <Box m="2rem 0" /> */}
          <PostsWidget userID={userID} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
