import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import axios from "axios";

/**
 * Renders a widget that displays a list of friends for a given user.
 */
const FriendListWidget = ({ userID }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);


  const getFriends = async () => {
    try {
      // const response = await axios.get(`http://localhost:3001/users/${userID}/friends`, {
      // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${userID}/friends`, {
      const response = await axios.get(`${process.env.REACT_APP_VERCEL_URL}/users/${userID}/friends`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setFriends({ friends: response.data }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends?.map((friend) => (
          <Friend
            key={friend._id}
            friendID={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
