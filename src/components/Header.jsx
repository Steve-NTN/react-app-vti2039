import { Menu } from "@mui/icons-material";
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);
  const isMobileView = useMediaQuery("(max-width:480px)");

  const onClickUser = () => {
    navigate("/login");
  };

  console.log(isMobileView);

  return (
    <StyledHeader>
      <h1>Logo</h1>
      <div className="rightbar">
        {!isMobileView && (
          <>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        {isMobileView && (
          <IconButton onClick={() => setShowDrawer(true)}>
            <Menu />
          </IconButton>
        )}
      </div>

      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      </Drawer>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: orange;
  &,
  .rightbar {
    gap: 16px;
    display: flex;
  }
`;

export default Header;
