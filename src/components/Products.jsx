import { Grid, Typography } from "@mui/material";
import Product from "./Product";

const Products = () => {
  return (
    <Grid container spacing={2}>
      {products.map((product, i) => (
        <Grid item xs={12} sm={6} md={3}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  );
};

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
