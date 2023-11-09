import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useLayoutEffect } from "react";

const Footer = () => {
  const onClickScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollTopBtn = document.getElementById("scroll_top_btn");
      scrollTopBtn.style.display = window.scrollY < 150 ? "none" : "block";
    });
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <h1>Column 1</h1>
        </Grid>

        <Grid item xs={12} md={8} container>
          <Grid item xs={12} md={4}>
            <h1>Column 2</h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <h1>Column 3</h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <h1>Column 4</h1>
          </Grid>
        </Grid>
      </Grid>

      <StyledScrollTopButton id="scroll_top_btn" onClick={onClickScrollToTop}>
        <AiOutlineArrowUp />
      </StyledScrollTopButton>
    </Container>
  );
};

const StyledScrollTopButton = styled.button`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

export default Footer;
