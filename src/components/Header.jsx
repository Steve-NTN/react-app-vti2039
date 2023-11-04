import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate("/login");
  };

  return (
    <StyledHeader>
      <h1>Logo</h1>
      <div className="rightbar">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  &,
  .rightbar {
    gap: 16px;
    display: flex;
  }
`;

export default Header;
