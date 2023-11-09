import styled from "styled-components";
import { Footer, Header, Products } from "../../components";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Products />

      <Footer />
    </StyledHome>
  );
};

const StyledHome = styled.div``;

export default Home;
