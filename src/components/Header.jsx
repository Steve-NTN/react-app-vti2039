import { Menu } from "@mui/icons-material";
import {
  Button,
  Drawer,
  Hidden,
  IconButton,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../providers/user-provider";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { user, setUser } = useUser();

  const onClick = () => {
    setUser();
  };

  return (
    <StyledHeader>
      <h1>Logo</h1>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        className="rightbar"
      >
        <Hidden mdDown>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <Button variant="text" className="logout_btn" onClick={onClick}>
              Logout
            </Button>
          )}
        </Hidden>

        <Hidden mdUp>
          <IconButton onClick={() => setShowDrawer(true)}>
            <Menu />
          </IconButton>
        </Hidden>
      </Stack>

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
  display: flex;
  gap: 16px;
  .rightbar {
  }
  .logout_btn {
    text-transform: initial;
  }
`;

export default Header;
