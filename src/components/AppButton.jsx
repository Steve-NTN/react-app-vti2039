import { Button, styled } from "@mui/material";

export const AppButton = (props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled(Button)({
  textTransform: "initial",
  color: "#fff",
  "&,:hover": {
    backgroundColor: "var(--app-color)",  
  },
});
