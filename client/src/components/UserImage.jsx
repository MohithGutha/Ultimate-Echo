import { Box } from "@mui/material";

/**
 * Renders a user image with a specified size and image source.
 */
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        // src={`http://localhost:3001/assets/${image}`}
        // src={`${process.env.REACT_APP_BASE_URL}/assets/${image}`}
        src={`${process.env.REACT_APP_VERCEL_URL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
