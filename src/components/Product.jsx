import { Box, Stack, Typography, styled } from "@mui/material";

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <img src={product.image} />
      <Typography>{product?.name}</Typography>

      <Stack direction="row">
        <Typography>{product?.price}</Typography>
        <Typography className="label">HOT</Typography>
      </Stack>
    </StyledProduct>
  );
};

export default Product;

const StyledProduct = styled(Box)(({ theme }) => ({
  "& img": {
    width: "100%",
  },
  "& .label": {
    marginLeft: 32,
  },

  [theme.breakpoints.down("sm")]: {
    "& .label": {
      marginLeft: 16,
      color: "red",
    },
  },
}));
