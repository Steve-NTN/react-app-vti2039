import { Menu } from "@mui/icons-material";
import {
  Badge,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Popover,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../providers/user-provider";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { logout } from "../services/account";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [anchorElCart, setAnchorElCart] = useState();
  const { user, setUser } = useUser();
  const cart = useSelector((state) => state?.cart?.cart) || [];

  const onClickLogout = () => {
    logout()
      .then((res) => {
        setUser();
      })
      .catch((err) => console.log(err));
  };

  const onClickCart = (e) => {
    setShowCart(true);
    setAnchorElCart(e?.currentTarget);
  };

  const onCloseCart = () => {
    setShowCart(false);
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
          {user?.isAdmin === 1 && <Link to="/admin">Admin</Link>}
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <>
              <IconButton onClick={onClickCart}>
                <StyledBadge badgeContent={cart?.length} color="secondary">
                  <MdOutlineShoppingCart />
                </StyledBadge>
              </IconButton>

              <Button
                variant="text"
                className="logout_btn"
                onClick={onClickLogout}
              >
                Logout
              </Button>
            </>
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

      <Popover
        open={showCart}
        anchorEl={anchorElCart}
        onClose={onCloseCart}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Cart />
      </Popover>
    </StyledHeader>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    backgroundColor: "#fff",
    padding: "0 4px",
    color: "var(--app-color)",
  },
}));

const StyledHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: orange;
  display: flex;
  position: sticky;
  top: 0;
  /* position: fixed;
  width: 100%; */
  gap: 16px;
  z-index: 100;
  .rightbar {
  }
  .logout_btn {
    text-transform: initial;
  }
`;

export default Header;
