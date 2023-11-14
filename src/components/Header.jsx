import { Menu } from "@mui/icons-material";
import { Button, Drawer, IconButton, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../providers/user-provider";

const Header = () => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);
  const isMobileView = useMediaQuery("(max-width:480px)");
  const { user, setUser } = useUser();

  const onClickUser = () => {
    navigate("/login");
  };

  console.log(isMobileView);

  const onClick = () => {
    setUser();
  };

  return (
    <StyledHeader>
      <h1>Logo</h1>
      <div className="rightbar">
        {!isMobileView && (
          <>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
            {!user ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            ) : (
              <Button onClick={onClick}>Logout</Button>
            )}
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
