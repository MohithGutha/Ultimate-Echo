import { Box } from "@mui/material";
import { styled } from "@mui/system";

/**
 * A styled component that renders a flex container with space-between alignment.
 */
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
