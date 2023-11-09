import { Grid, styled } from "@mui/material";
import Product from "./Product";
import { FaShippingFast, FaPlaceOfWorship } from "react-icons/fa";
import johnSmitth from "../assets/imgs/test.png";

const Products = () => {
  return (
    <Grid container spacing={2}>
      {products.map((product, i) => (
        <Grid item xs={12} sm={6} md={3}>
          <Product product={product} />
        </Grid>
      ))}

      <FaShippingFast className="feature_icon" />

      <FaPlaceOfWorship className="feature_icon" />

      <StyledTest></StyledTest>
    </Grid>
  );
};

const StyledTest = styled("div")({
  width: "100%",
  height: 300,
  background: `orange url('${johnSmitth}') no-repeat center center`,
  backgroundSize: "contain"
});

export default Products;

const products = [
  {
    name: "Sản phẩm A",
    price: 25000,
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Sản phẩm A",
    price: 25000,
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    name: "Sản phẩm A",
    price: 25000,
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
