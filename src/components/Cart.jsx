import { Box, IconButton, Stack, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { onRemoveItem } from "../redux/actions/cartActions";

const Cart = () => {
  const cart = useSelector((state) => state?.cart?.cart) || [];
  const dispatch = useDispatch();

  const onClickDelete = (product) => {
    dispatch(onRemoveItem(product));
  };

  return (
    <StyledCart spacing={2}>
      {cart?.map((product, i) => (
        <Box className="product" key={i}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Typography>{product?.productName}</Typography>
            <Typography>
              {product?.quantity} x {product?.productPrice}
            </Typography>

            <IconButton onClick={() => onClickDelete(product)}>
              <MdDelete />
            </IconButton>
          </Stack>
        </Box>
      ))}
    </StyledCart>
  );
};

const StyledCart = styled(Stack)({
  padding: 24,
});

export default Cart;
