import styled from "styled-components";
import { Header, Products } from "../../components";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Products />
    </StyledHome>
  );
};

const StyledHome = styled.div``;

export default Home;
