import { CircularProgress, styled } from "@mui/material";

const Loading = (props) => {
  return <StyledCircularProgress {...props} />;
};

const StyledCircularProgress = styled(CircularProgress)({
  color: "var(--app-color)",
});

export default Loading;
