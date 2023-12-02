import styled from "styled-components";
import { HomeBanner, Layout } from "../../components";
import { Container } from "@mui/material";
import { TestResponsive } from "./components";
import { HomeProvider } from "../../providers/home-provider";

const Home = () => {
  return (
    <HomeProvider>
      <Layout>
        <StyledHome>
          <Container>
            <HomeBanner />
            {/* <Categories /> */}
            {/* <Products /> */}

            <TestResponsive />
          </Container>
        </StyledHome>
      </Layout>
    </HomeProvider>
  );
};

const StyledHome = styled.div``;

export default Home;
