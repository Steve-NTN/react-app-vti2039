import styled from "styled-components";
import { Footer, Header, Products } from "../../components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faBath, faTrash } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Products />
      {/* Hello */}
      {/* <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faTrash} /> */}
    </StyledHome>
  );
};

const StyledHome = styled.div``;

export default Home;
