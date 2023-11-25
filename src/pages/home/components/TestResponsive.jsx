import { Collapse, Stack, styled, useMediaQuery } from "@mui/material";
import { useState } from "react";

const TestResponsive = () => {
  const isMobileView = useMediaQuery("(max-width:600px)");
  const [showCollapse, setShowCollapse] = useState(false);

  const onToggleCollapse = () => {
    setShowCollapse(!showCollapse);
  };

  return (
    <StyledStack>
      Responsive<button onClick={onToggleCollapse}>Click me</button>
      <Collapse in={showCollapse} timeout={2000}>
        <h1>My title</h1>
        <h1> {isMobileView ? "Is mobile view" : "Is not mobile view"}</h1>
      </Collapse>
    </StyledStack>
  );
};

const StyledStack = styled(Stack)(({ theme }) => ({
  button: {
    color: "red",
  },
  h1: {
    fontSize: 32,
  },
  [theme.breakpoints.down("md")]: {
    button: {
      color: "green",
    },
  },
  "@media screen and (max-width:600px)": {
    h1: {
      fontSize: 16,
    },
  },
}));

export default TestResponsive;
