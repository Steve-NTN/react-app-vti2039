import { Box, Button, Rating, Stack, Typography, styled } from "@mui/material";
import { formatImg } from "../utils/imgHelpers";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { onAddItem } from "../redux/actions/cartActions";

const Product = ({ product }) => {
  const dispath = useDispatch();

  const onClickProduct = () => {
    dispath(onAddItem(product));
  };

  return (
    <StyledProduct>
      <img src={formatImg(product.productImage)} />
      <Rating name="read-only" value={product.ratingStar || 0} readOnly />
      <Typography className="product_name">{product?.productName}</Typography>

      <Stack direction="row">
        <Typography>{product?.productPrice}</Typography>
        <Typography className="label">HOT</Typography>
      </Stack>
      <StyledAddToCartButton endIcon={<FaCartPlus />} onClick={onClickProduct}>
        Add to cart
      </StyledAddToCartButton>
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
  ".product_name": {
    // color: 'red'
  },

  [theme.breakpoints.down(900)]: {
    "& .label": {
      marginLeft: 16,
      // color: "red",
    },
    ".product_name": {
      // color: 'green'
    },
  },
}));

const StyledAddToCartButton = styled(Button)({});
