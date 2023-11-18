import styled from "styled-components";
import { Footer, Header, Products } from "../../components";
import { Container } from "@mui/material";
import { Categories } from "./components";
import { HomeProvider } from "../../providers/home-provider";

const Home = () => {
  return (
    <HomeProvider>
      <StyledHome>
        <Header />
        <Container>
          <Categories />
          <Products />
        </Container>
      </StyledHome>
    </HomeProvider>
  );
};

const StyledHome = styled.div``;

export default Home;
